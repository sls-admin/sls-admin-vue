import {
	gbs
} from 'config/';

import 'wangeditor';

export default {
	name   : 'edit-article',
	data() {
		return {
			article_data: {
				title  : '',
				cate   : '',
				tabs   : ['html'],
				status : true,
				content: '',
			},
			temp        : {
				content: ''
			},
			rules       : {
				title  : [{
					required: true,
					message : '文章标题不能为空！',
					trigger : 'blur'
				}],
				cate   : [{
					required: true,
					message : '文章分类不能为空！',
					trigger : 'change'
				}],
				tabs   : [{
					type    : 'array',
					required: true,
					message : '请至少选择一个文章标签！',
					trigger : 'change'
				}],
				content: [{
					required: true,
					message : '文章不能为空！',
					trigger : 'blur'
				}]
			},
			wangEditor  : {
				bar: [
					'source', '|',
					'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|',
					'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', '|',
					'link', 'unlink', 'table', 'emotion', '|',
					'img',
					'video',
					// 'location',
					'insertcode', '|',
					'undo', 'redo', 'fullscreen'
				],
                obj:null
			}
		}
	},
	methods: {
		/**
		 * 提交表单
		 * @param  {string} formName 表单名称
		 */
		onSubmit(formName){

			// console.log(this.article_data);
			// return;

			var ref = this.$refs[formName];
			ref.validate((valid) => {
				if (valid) {
					// console.log(this.article_data.content);
					// console.log(this.temp.content);
					// return;

					if (!this.temp.content) {
						if ((this.article_data.content.indexOf('<iframe') == -1 || this.article_data.content.indexOf('</iframe>') == -1) && (this.article_data.content.indexOf('<img') == -1)) {
							this.$message.error('文章内容不能为空！');
							return;
						}
					}

					// console.log(this.article_data);

					this.$$api_article_saveArticle({
						data:this.article_data,
						fn:data=>{
							this.$router.push('/demo/article/list');
						}
					});
				}
			});
		},

		setContent(html, text){
			this.article_data.content = html;
			this.temp.content         = text;
		},

        /**
         * 初始化wangeditor编辑器
         */
        initWangeditor(){
            var self   = this;
            this.wangEditor.obj = new wangEditor('article');

            this.wangEditor.obj.config.uploadImgFileName = 'article';

            this.wangEditor.obj.config.uploadImgUrl = gbs.host + '/Article/editUpload';

            // 配置自定义参数（举例）
            this.wangEditor.obj.config.uploadParams = {
                username: this.$store.state.user.userinfo.username
            };

            //自定义header，因为服务器验证通过header中的token进行的验证
            this.wangEditor.obj.config.uploadHeaders = {
                token : this.$store.state.user.userinfo.token
            };

            // 自定义load事件
            this.wangEditor.obj.config.uploadImgFns.onload = (data) => {
                //注意：这是原生ajax的处理,返回的是原生的JSON串
                if(typeof data==='string'){
                    data=JSON.parse(data);
                }
                // console.log(data);
                if (data.status === 200) {
                    // 上传图片时，已经将图片的名字存在 this.wangEditor.obj.uploadImgOriginalName
                    var originalName = this.wangEditor.obj.uploadImgOriginalName || '';

                    // 如果 resultText 是图片的url地址，可以这样插入图片：
                    this.wangEditor.obj.command(null, 'insertHtml', '<img src="' + data.data.fileinfo.getSaveName + '" alt="' + originalName + '" style="max-width:100%;"/>');
                } else {
                    //这里可以判断到token无效时，可以退出登录，让用户重新登录
                    if (data.status === 404) {
                        this.$message.error('上传错误信息：token无效！');
                    } else {
                        this.$message.error('上传错误信息：' + data.msg);
                    }
                }

            };

            //自定义错误信息
            this.wangEditor.obj.config.uploadImgFns.onerror = (xhr) => {
                this.$message.error('上传错误信息：网络错误！');
            };

            //自定义工具栏
            this.wangEditor.obj.config.menus = this.wangEditor.bar;

            //编辑器改变事件时，同步更新文章内容
            this.wangEditor.obj.onchange = function () {
                var text = this.$txt.text().replace(/(^\s*)|(\s*$)/g, ""),
                    html = this.$txt.html();

                /*console.log(text);
                 console.log(html);*/

                self.setContent(html, text);
            };

            // this.wangEditor.obj.config.hideLinkImg = true;

            //自定义上传图片错误事件
            this.wangEditor.obj.create();
        },

		reset_article(article){
			this.$refs[article].resetFields();
		}
	},

	mounted(){
		this.initWangeditor();

		if (this.$route.query.id) {
			var data = {
				id: this.$route.query.id
			};
			this.$$api_article_findArticle({
				data,
				fn:data=>{
					this.article_data        = data.article_info;
					this.article_data.status = data.article_info.status == 1 ? true : false;
					this.article_data.tabs   = data.article_info.tabs.split(',');
                    this.wangEditor.obj.$txt.html(this.article_data.content);
				}
			});
		}
	}
}