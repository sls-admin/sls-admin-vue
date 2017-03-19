import {
    gbs
} from 'config/settings.js';

import {
    FormData
} from 'common/';

module.exports = {
    name: 'edit-article',
    components: {
        FormData
    },
    data() {
        return {
            fields: [{
                    key: 'input',
                    value: '',
                    desc: '请输入标题',
                    label: 'Input'
                }, {
                    type: 'checkbox',
                    key: 'checkbox',
                    value: true,
                    label: 'Checkbox'
                }, {
                    type: 'checkbox',
                    multiple: true,
                    checkall: {
                        value: true,
                        indeterminate: true,
                        text: '全选吧我曹',
                    },
                    key: 'checkbox-multiple',
                    value: {
                        default: [1, 3],
                        list: [{
                            text: 'one',
                            value: 1
                        }, {
                            text: 'two',
                            value: 2
                        }, {
                            text: 'three',
                            value: 3
                        }]
                    },
                    label: 'Checkbox-multiple'
                }, {
                    key: 'textarea',
                    type: 'textarea',
                    value: '',
                    desc: '请输入内容',
                    label: 'Textarea'
                },
                /*{
                               key: 'wangeditor',
                               type: 'editor',
                               id: 'article',
                               desc: '请输入内容',
                               label: '富文本',
                               style: {
                                   height: '260px'
                               }
                           },*/
                {
                    key: 'radio',
                    type: 'radio',
                    desc: 'radio',
                    label: '单选',
                    value: {
                        default: '2',
                        list: [{
                            text: '不限',
                            value: '1'
                        }, {
                            text: '男',
                            value: '2'
                        }, {
                            text: '女',
                            value: '3'
                        }]
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
                    label: '单选下拉框'
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
                    label: '多选下拉框'
                }, {
                    key: 'status',
                    type: 'switch',
                    value: {
                        default: true,
                        on: '启用',
                        off: '禁用'
                    },
                    desc: '',
                    label: 'Switch'
                }
            ],
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
        onSubmitFn(submit_data) {
            this.$$saveArticle(submit_data, data => {
                this.$router.push('/adv/article/list');
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
            this.$$findArticle(data, (data) => {
                this.default_value = data.article_info;
                this.default_value.status = data.article_info.status == 1 ? true : false;
                this.default_value.tabs = data.article_info.tabs.split(',');
            });
        }
    }
}