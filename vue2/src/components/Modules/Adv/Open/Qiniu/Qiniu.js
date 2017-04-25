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
            list: [],
            fields: [{
                key: 'key',
                label: '文件类型',
                type: 'image',
                width: '100',
                style: {
                    width: '80px'
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
        onBeforeUpload(file) {
            console.log(file);
            // this.params.file = file;
        },

        onChangeFile(e) {
            var file = e.target.files[0];
            console.log(file);
            var formData = new FormData();
            formData.append('file', file);

            this.$$getQiniuToken(data => {
                formData.append('token', data.qiniu.token);
                if (data.qiniu.key) {
                    formData.append('key', data.qiniu.key);
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
                    console.log(res);
                    if (res.error) {
                        this.$message({
                            showClose: true,
                            message: res.error,
                            type: 'error'
                        });
                    } else {
                        console.log(res);
                    }
                }).fail(err => {
                    console.log('error');
                    console.log(err);
                });
            });

        }
    },
    created() {},
    mounted() {
        this.$$getQiniuList(data => {
            this.list = data.list;
        });
    }
}