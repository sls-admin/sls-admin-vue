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
                key: 'content',
                type: 'editor',
                id: 'one-article',
                desc: '请输入文章内容',
                label: '文章内容',
                item_style: {
                    width: '100%'
                },
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
                }
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
                    'one-article': '文章内容不能为空'
                }
            });
            console.log(check);

        },
        onChange({
            id,
            data
        }) {
            // console.log(id);
            // console.log(data);
        }
    },
    created() {},
    mounted() {}
}