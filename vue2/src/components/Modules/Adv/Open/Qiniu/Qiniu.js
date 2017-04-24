module.exports = {
    name: '',
    components: {

    },
    data() {
        return {
            params: {
                token: '',
            }
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
                formData.append('key', data.qiniu.key);
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
                }).fail(err => {
                    console.log('error');
                });
            });

        }
    },
    created() {},
    mounted() {}
}