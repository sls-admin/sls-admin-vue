import {
    gbs
} from 'config/';

export default {
    name: 'edit-wangeditor',
    components: {
        // FormData
    },
    data() {
        return {
            fields: [{
                key: 'content',
                type: 'editor',
                id: 'many-article-1',
                desc: '请输入文章内容',
                label: '文章内容',
                style: {
                    height: '260px'
                },
                config: {
                    hide_bar: ['fullscreen']
                }
            }, {
                key: 'content2',
                type: 'editor',
                id: 'many-article-2',
                desc: '请输入文章内容2',
                label: '文章内容2',
                style: {
                    height: '260px'
                },
                config: {
                    show_bar: ['fullscreen'],
                }
            }, {
                key: 'content3',
                type: 'editor',
                id: 'many-article-3',
                desc: '请输入文章内容3',
                label: '文章内容3',
                style: {
                    height: '260px'
                }
            }],
            editor: {
                name: 'article',
                url: gbs.host + '/Article/editUpload',
                params: {
                    token: this.$store.state.user.userinfo.token,
                    username: this.$store.state.user.userinfo.username
                },
                show_bar: ['source', 'img'],
                hide_bar: []
            }
        }
    },
    methods: {
        onGetData({
            data,
            editor_temp_data
        }) {
            var check = this.onCheckEditor({
                editor_temp_data,
                field_infos: {
                    'many-article-1': '文章内容1不能为空',
                    'many-article-2': '文章内容2不能为空',
                    'many-article-3': '文章内容3不能为空',
                },
                type: true
            });
            console.log(check);
        }
    },
    created() {},
    mounted() {}
}