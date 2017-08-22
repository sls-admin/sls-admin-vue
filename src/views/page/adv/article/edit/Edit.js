import {
    gbs
} from 'config/';

export default {
    name: 'adv-edit-article',
    components: {

    },
    data() {
        return {
            fields: [{
                key: 'title',
                desc: '请输入文章标题',
                label: '文章标题'
            }, {
                key: 'content',
                type: 'editor',
                id: 'adv-article',
                desc: '请输入文章内容',
                label: '文章内容',
                config:{
					attrs:{
						uploadImgServer:gbs.host + '/Article/editUpload',
						uploadFileName:'article',

						uploadImgParams:{
							username: this.$store.state.user.userinfo.username
						},
						uploadImgHeaders:{
							token: this.$store.state.user.userinfo.token
						}
					},
					//上传自定义事件
					events:{
						customInsert:(insertImg, result, editor)=>{
							if(result.status===404){
								this.$store.dispatch('remove_userinfo').then(() => {
									this.$alert(result.status + ',' + result.msg + '！', '登录错误', {
										confirmButtonText: '确定',
										callback: action => {
											this.$router.push('/login');
										}
									});
								});
							}else{
								if(result.status!=200){
									this.$alert(result.status + ',' + result.msg + '！', '登录错误', {
										confirmButtonText: '确定',
										callback: action => {
											this.$router.push('/login');
										}
									});
								}else{
									insertImg(result.data.fileinfo.getSaveName);
								}
							}
						}
					},

                }
            }, {
                key: 'cate',
                type: 'select',
				list: [{
					value: 'jishu',
					text: '技术'
				}, {
					value: 'sanwen',
					text: '散文'
				}, {
					value: 'qita',
					text: '其他'
				}],
                desc: '请选择文章分类',
                label: '文章分类'
            }, {
                key: 'tabs',
                type: 'select',
                multiple: true,
				list: [{
					value: 'html',
					text: 'html'
				}, {
					value: 'css',
					text: 'css'
				}, {
					value: 'javascript',
					text: 'javascript'
				}, {
					value: 'jquery',
					text: 'jquery'
				}],
                desc: '请选择文章标签',
                label: '文章标签'
            }, {
                key: 'status',
                type: 'switch',
                value: {
                    on: '启用',
                    off: '禁用'
                },
                desc: '',
                label: '状态'
            }],
            default_value: {
				title:'',
				content:'',
				cate:'',
				tabs:[],
				status:true,
			},
			rules:{
				title:[{
					required: true, message: '请输入标题', trigger: 'blur'
				}],
				cate:[{
					required: true, message: '请选择分类', trigger: 'blur'
				}],
				tabs:[{
					type:'array',required: true, message: '至少选择一个标签', trigger: 'blur'
				}]
			}
        }
    },
    methods: {
        onSubmit({data,info}) {
        	//如果没有任何文本text，就检测html中是否包含图片img，iframe,如果都没有，代表真的没有数据。
        	if(!info.content){
				if ((data.content.indexOf('<iframe') == -1 || data.content.indexOf('</iframe>') == -1) && (data.content.indexOf('<img') == -1)) {
					this.$message.error('文章内容不能为空！');
					return;
				}
			}
            this.$$api_article_saveArticle({
			    data,
                fn:()=>{
					this.$router.push('/adv/article/list');
                }
            });
        }
    },
    created() {
		if (this.$route.query.id) {
			var data = {
				id: this.$route.query.id
			};
			this.$$api_article_findArticle({
				data,
				fn:data=>{
					console.dir(data);
					this.default_value.content=data.article_info.content;
					this.default_value.title=data.article_info.title;
					this.default_value.cate=data.article_info.cate;
					this.default_value.status=data.article_info.status == 1 ? true : false;
					this.default_value.tabs = data.article_info.tabs.split(',');
				}
			});
		}
    },
    mounted() {

    },
	watch:{
    	default_value:{
    		deep:true,
			handler(v){
    			this.default_value=v;
			}
		}
	}
}