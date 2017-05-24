export default {
	name      : '',
	components: {
		// ListData
	},
	data() {
		return {
			params    : {
				token: '',
			},
			image_host: '//slsadmin.qiniu.sailengsi.com/',
			dialog    : {
				show: false,
				info: {}
			},
			list      : [],
			fields    : [{
				key  : 'key',
				label: '文件类型',
				type : 'image',
				width: '100',
				style: {
					width : '80px',
					height: '60px'
				}
			}, {
				key  : 'key',
				label: '文件路径'
			}, {
				key  : 'fsize',
				label: '文件大小'
			}],

			qiniu: {
				marker: '',
				limit : 10,
				prefix: '',
			}
		}
	},
	methods   : {
		onLoadMoreData() {
			this.onGetQiniuList();
		},

		onGetQiniuList() {
			this.$$api_open_getQiniuFileList({
				data: this.qiniu,
				fn  : (data) => {
					this.list = data.list;
					if (data.other) {
						this.qiniu.marker = data.other.marker || '';
					}
				}
			});
		},

		onGetQiniuToken(file, fn) {
			this.$$api_open_getQiniuToken({
				data: {},
				fn  : data => {
					this.params.token = data.qiniu.token;
					if (data.qiniu.key) {
						this.$set(this.params, 'key', data.qiniu.key);
					}
					fn && fn();
				}
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
				/*this.$$api_open_uploadQiniuFile(formData, data => {}, {
				 host: '//up-z2.qiniu.com/',
				 cbFn:res=>{
				 this.onGetQiniuList();
				 },
				 errFn: err => {
				 console.log(err);
				 },
				 headers: {
				 'Content-Type': 'multipart/form-data'
				 }
				 });*/

				this.$$api_open_uploadQiniuFile({
					data   : formData,
					path   : '//up-z2.qiniu.com/',
					fn     : data => {

					},
					errFn  : err => {
						console.log(err);
					},
					headers: {
						'Content-Type': 'multipart/form-data'
					}
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
				cancelButtonText : '取消',
				type             : 'warning'
			}).then(() => {
				this.$$deleteQiniuFile({
					data:{
						key: opts.data.key
					},
					fn:data=>{
						this.list.splice(opts.index, 1);
					}
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
	created() {
	},
	mounted() {
		this.onGetQiniuList();
	}
}