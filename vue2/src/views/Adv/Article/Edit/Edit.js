import {
    gbs
} from 'config/';

export default {
    name: 'edit-article',
    components: {
        FormData
    },
    data() {
        return {
            fields: [{
                key: 'title',
                value: '',
                desc: '请输入文章标题',
                label: '文章标题'
            }, {
                key: 'content',
                type: 'editor',
                id: 'article',
                desc: '请输入文章内容',
                label: '文章内容',
                style: {
                    height: '260px'
                }
            }, {
                key: 'cate',
                type: 'select',
                value: {
                    default: 'sanwen',
                    list: [{
                        value: 'jishu',
                        text: '技术'
                    }, {
                        value: 'sanwen',
                        text: '散文'
                    }, {
                        value: 'qita',
                        text: '其他'
                    }]
                },
                desc: '请选择文章分类',
                label: '文章分类'
            }, {
                key: 'tabs',
                type: 'select',
                multiple: true,
                value: {
                    default: ['javascript', 'html'],
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
                    }]
                },
                desc: '请选择文章标签',
                label: '文章标签'
            }, {
                key: 'status',
                type: 'switch',
                value: {
                    default: true,
                    on: '启用',
                    off: '禁用'
                },
                desc: '',
                label: '状态'
            }],
            default_value: {},
            editor: {
                name: 'article',
                url: gbs.host + '/Article/editUpload',
                params: {
                    token: this.$store.state.user.userinfo.token,
                    username: this.$store.state.user.userinfo.username
                }
            },
            rules: {
                title: [{
                    required: true,
                    message: '文章标题不能为空！',
                    trigger: 'blur'
                }],
                cate: [{
                    required: true,
                    message: '文章分类不能为空！',
                    trigger: 'change'
                }],
                tabs: [{
                    type: 'array',
                    required: true,
                    message: '请至少选择一个文章标签！',
                    trigger: 'change'
                }]
            },

            tips: {
                article: {
                    msg: '文章内容不能为空',
                    field: 'content'
                },
            },

        }
    },
    methods: {
        onSubmitFn(data) {
			this.$$api_article_saveArticle({
			    data,
                fn:()=>{
					this.$router.push('/adv/article/list');
                }
            });
        }
    },
    created() {

    },
    mounted() {
        if (this.$route.query.id) {
            var data = {
                id: this.$route.query.id
            };
			this.$$api_article_findArticle({
			    data,
                fn:(data)=>{
					this.default_value = data.article_info;
					this.default_value.status = data.article_info.status == 1 ? true : false;
					this.default_value.tabs = data.article_info.tabs.split(',');
                }
            });
        }
    }
}