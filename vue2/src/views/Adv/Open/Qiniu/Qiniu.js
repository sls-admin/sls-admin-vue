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
			dialog    : {
				show: false,
				info: {}
			},
			list      : [],
			fields    : [{
				key  : 'key',
				label: '文件类型',
				type : 'image',
				host: '//slsadmin.qiniu.sailengsi.com/',
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

			btn_info:{
				update:false
			},

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


		/**
		 * 七牛只传
		 * @param file	文件对象
		 * @returns {boolean}	return false阻止elementUI内部上传
		 */
		onUploadQiniu(file) {
			this.onGetQiniuToken(file, () => {
				var formData = new FormData();
				formData.append('file', file);
				formData.append('token', this.params.token);
				if (this.params.key) {
					formData.append('key', this.params.key);
				}

				this.$$api_open_uploadQiniuFile({
					data   : formData,
					path   : '//up-z2.qiniu.com/',
					errFn  : data => {
						this.onGetQiniuList();
					},
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				});
			});

			return false;
		},


		/**
		 * 删除七牛图片
		 * @param opts
		 */
		onDeleteQiniuFile(opts){
			if (opts.batch_ids) {
				this.$alert('暂时不支持批量批量删除七牛图片，完善中...', '不支持的操作');
				return;
			}
			this.$confirm('确定删除该图片?', '删除图片', {
				confirmButtonText: '确定',
				cancelButtonText : '取消',
				type             : 'warning'
			}).then(() => {
				this.$$api_open_deleteQiniuFile({
					data: {
						key: opts.data.key
					},
					fn  : data => {
						this.onGetQiniuList();
					}
				});
			}).catch(()=>{
				this.$message('已取消删除！');
			});
		},

		/**
		 * 查看图片
		 * @param opts
		 */
		onSelectQiniuFile(opts){
			console.log(opts);
			this.onShowDialog(opts.data);
		},


		/**
		 * 弹框查看图片
		 * @param info
		 */
		onShowDialog(info) {
			this.dialog.info = info || {};
			this.dialog.show = true;
		},


		/**
		 * 关闭弹框查看图片
		 */
		onHideDialog() {
			this.dialog.show = false;
		}
	},
	created() {},
	mounted() {
		this.onGetQiniuList();
	}
}