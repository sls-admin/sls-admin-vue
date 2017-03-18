import {
    gbs
} from 'config/settings.js';

module.exports = {
    name: 'edit-article',
    data() {
        return {
            article_data: {
                title: '',
                cate: '其他',
                tabs: ['html'],
                status: true,
                content: '',
            },
            temp: {
                content: ''
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
                }],
                content: [{
                    required: true,
                    message: '文章不能为空！',
                    trigger: 'blur'
                }]
            },
            wangEditor: {
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
                ]
            }
        }
    },
    methods: {
        /**
         * 提交表单
         * @param  {string} formName 表单名称
         */
        onSubmit(formName) {
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
                        return;
                    }

                    // console.log(this.article_data);

                    this.$$saveArticle(this.article_data, data => {
                        this.$router.push('/demo/article/list');
                    });
                }
            });
        },
        setContent(html, text) {
            this.article_data.content = html;
            this.temp.content = text;
        },
        reset_article(article) {
            this.$refs[article].resetFields();
        },
    },
    created() {},
    mounted() {
        var self = this;
        var editor = new wangEditor('article');

        // console.log(editor.config);

        // editor.config.jsFilter = false;

        editor.config.uploadImgFileName = 'article';

        editor.config.uploadImgUrl = gbs.host + '/Article/editUpload';

        // 配置自定义参数（举例）
        editor.config.uploadParams = {
            token: this.$store.state.user.userinfo.token,
            username: this.$store.state.user.userinfo.username
        };

        // 自定义load事件
        editor.config.uploadImgFns.onload = (data) => {
            if (data.status === 200) {
                // 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
                var originalName = editor.uploadImgOriginalName || '';

                // 如果 resultText 是图片的url地址，可以这样插入图片：
                editor.command(null, 'insertHtml', '<img src="' + data.data.fileinfo.getSaveName + '" alt="' + originalName + '" style="max-width:100%;"/>');
            } else {
                if (data.status === 404) {
                    this.$message.error('上传错误信息：token无效！');
                } else {
                    this.$message.error('上传错误信息：' + data.msg);
                }
            }

        };

        editor.config.uploadImgFns.onerror = (xhr) => {
            this.$message.error('上传错误信息：网络错误！');
        };

        editor.config.menus = this.wangEditor.bar;

        //编辑器改变事件时，同步更新文章内容
        editor.onchange = function() {

            var text = this.$txt.text().replace(/(^\s*)|(\s*$)/g, ""),
                html = this.$txt.html();

            /*console.log(text);
            console.log(html);*/

            self.setContent(html, text);
        };

        // editor.config.hideLinkImg = true;

        //自定义上传图片错误事件
        editor.create();

        if (this.$route.query.id) {
            var data = {
                id: this.$route.query.id
            };
            this.$$findArticle(data, (data) => {
                // console.log(data);

                this.article_data = data.article_info;
                this.article_data.status = data.article_info.status == 1 ? true : false;
                this.article_data.tabs = data.article_info.tabs.split(',');

                $("#article").html(this.article_data.content);
            });
        }
    }
}