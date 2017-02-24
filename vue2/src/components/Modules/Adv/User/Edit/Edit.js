import {
    user as UserApi
} from 'config/request.js';

import {
    FormData
} from 'common/';

module.exports = {
    name: 'user',
    components: {
        FormData
    },
    data() {
        return {
            fields: [{
                key: 'email',
                value: '',
                desc: '请输入用户名',
                label: '邮箱'
            }, {
                key: 'username',
                type: 'input',
                value: '',
                desc: '请输入邮箱',
                label: '用户名'
            }, {
                key: 'sex',
                type: 'radio',
                value: {
                    default: 2,
                    list: [{
                        value: 1,
                        text: '男'
                    }, {
                        value: 2,
                        text: '女'
                    }, {
                        value: 3,
                        text: '保密'
                    }]
                },
                desc: '',
                label: '性别'
            }, {
                key: 'address',
                type: 'textarea',
                value: '',
                desc: '请输入地址',
                label: '地址'
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
                desc: '请选择分类',
                label: '分类'
            }, {
                key: 'tag',
                type: 'select',
                multiple: true,
                value: {
                    default: ['qianduan', 'houtai'],
                    list: [{
                        value: 'qianduan',
                        text: '前端'
                    }, {
                        value: 'mysql',
                        text: '数据库'
                    }, {
                        value: 'houtai',
                        text: '后台'
                    }, {
                        value: 'fuwuqi',
                        text: '服务器'
                    }]
                },
                desc: '请选择标签',
                label: '标签'
            }]
        }
    },
    methods: {
        onGetData(opts) {
            console.log(opts);
        }
    },
    mounted() {

    }
}