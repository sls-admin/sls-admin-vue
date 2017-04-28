import {
	ListData
} from 'common/';

module.exports = {
	name: '',
	components: {
		ListData
	},
	data() {
		return {
			params: {
				token: '',
			},
			image_host: '//slsadmin.qiniu.sailengsi.com/',
			dialog: {
				show: false,
				info: {}
			},
			list: [],
			fields: [{
				key: 'key',
				label: '文件类型',
				type: 'image',
				width: '100',
				style: {
					width: '80px',
					height: '60px'
				}
			}, {
				key: 'key',
				label: '文件路径'
			}, {
				key: 'fsize',
				label: '文件大小'
			}],
		}
	},
	methods: {
		onGetQiniuList() {
			this.$$getQiniuFileList(data => {
				this.list = data.list;
				// this.onShowDialog(this.list[3]);
			});
		},

		onGetQiniuToken(file, fn) {
			this.$$getQiniuToken(data => {
				this.params.token = data.qiniu.token;
				if (data.qiniu.key) {
					this.$set(this.params, 'key', data.qiniu.key);
				}
				fn && fn();
			});
		},

		onUploadQiniu(file) {
			this.onGetQiniuToken(file, () => {
				var formData = new FormData();
				formData.append('file', file);
				formData.append('token', this.params.token);
				if (this.params.key) {
					formData.append('key', this.params.key);
				}
				$.ajax({
					url: '//up-z2.qiniu.com/',
					type: 'POST',
					dataType: 'json',
					cache: false,
					data: formData,
					processData: false,
					contentType: false
				}).done(res => {
					if (res.error) {
						this.$message({
							showClose: true,
							message: res.error,
							type: 'error'
						});
					} else {
						this.onGetQiniuList();
					}
				}).fail(err => {
					console.log('error');
					console.log(err);
				});
			});

			return false;
		},


		onDelete(opts) {
			if (opts.batch_ids) {
				this.$alert('暂时不支持批量批量删除七牛图片，完善中...', '不支持的操作');
				return;
			}
			this.$confirm('确定删除该图片?', '删除图片', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$$deleteQiniuFile({
					key: opts.data.key
				}, data => {
					this.list.splice(opts.index, 1);
				});
			});
		},

		onGetInfo(opts) {
			switch (opts.type) {
				case 'select':
					this.onShowDialog(opts.row);
					break;
				default:

			}
		},

		onShowDialog(info) {
			this.dialog.info = info || {};
			this.dialog.show = true;
		},

		onHideDialog() {
			this.dialog.show = false;
		}
	},
	created() {},
	mounted() {
		this.onGetQiniuList();
	}
}