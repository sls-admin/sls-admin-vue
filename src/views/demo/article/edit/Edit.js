import {
  gbs
} from 'config/'

import E from 'wangeditor'

export default {
  name: 'edit-article',
  data () {
    return {
      article_data: {
        title: '',
        cate: '',
        tabs: ['html'],
        status: true,
        content: ''
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
          'head',  // 标题
          'bold',  // 粗体
          'italic',  // 斜体
          'underline',  // 下划线
          'strikeThrough',  // 删除线
          'foreColor',  // 文字颜色
          'backColor',  // 背景颜色
          'link',  // 插入链接
          'list',  // 列表
          'justify',  // 对齐方式
          'quote',  // 引用
          'emoticon',  // 表情
          'image',  // 插入图片
          'table',  // 表格
          'video',  // 插入视频
          'code',  // 插入代码
          'undo',  // 撤销
          'redo'  // 重复
        ],
        obj: null
      }
    }
  },
  methods: {
    /**
     * 提交表单
     * @param  {string} formName 表单名称
     */
    onSubmit (formName) {
      // console.log(this.article_data);
      // return;

      var ref = this.$refs[formName]
      ref.validate((valid) => {
        if (valid) {
          if (!this.temp.content) {
            if ((this.article_data.content.indexOf('<iframe') === -1 || this.article_data.content.indexOf('</iframe>') === -1) && (this.article_data.content.indexOf('<img') === -1)) {
              this.$message.error('文章内容不能为空！')
              return
            }
          }

          this.$$api_article_saveArticle({
            data: this.article_data,
            fn: data => {
              this.$router.push('/demo/article/list')
            }
          })
        }
      })
    },

    setContent (html, text) {
      this.article_data.content = html
      this.temp.content = text
    },

    /**
     * 初始化wangeditor编辑器
     */
    initWangeditor () {
      this.wangEditor.obj = new E('#article')

      this.wangEditor.obj.customConfig.zIndex = 100
      this.wangEditor.obj.customConfig.uploadFileName = 'article'
      this.wangEditor.obj.customConfig.uploadImgServer = gbs.host + '/Article/editUpload'
      this.wangEditor.obj.customConfig.uploadImgParams = {
        username: this.$store.state.user.userinfo.username
      }
      this.wangEditor.obj.customConfig.uploadImgHeaders = {
        token: this.$store.state.user.userinfo.token
      }
      this.wangEditor.obj.customConfig.uploadImgHooks = {
        error: function (xhr, editor) {
          console.log('error')
          this.$message.error('上传错误信息：上传错误！')
        },
        timeout: function (xhr, editor) {
          console.log('timeout')
          this.$message.error('上传错误信息：网络超时！')
        },
        customInsert: function (insertImg, data, editor) {
          if (data.status === 200) {
            var url = data.data.fileinfo.getSaveName
            insertImg(url)
          } else {
            // 这里可以判断到token无效时，可以退出登录，让用户重新登录
            if (data.status === 404) {
              this.$message.error('上传错误信息：token无效！')
            } else {
              this.$message.error('上传错误信息：' + data.msg)
            }
          }
        }
      }

      // 自定义工具栏
      // this.wangEditor.obj.customConfig.menus = this.wangEditor.bar;

      // 编辑器改变事件时，同步更新文章内容
      this.wangEditor.obj.customConfig.onchange = (html) => {
        var text = this.wangEditor.obj.txt.text().replace(/(^\s*)|(\s*$)/g, '')
        html = this.wangEditor.obj.txt.html()
        this.setContent(html, text)
      }

      // 自定义上传图片错误事件
      this.wangEditor.obj.create()
    },

    reset_article (article) {
      this.$refs[article].resetFields()
    }
  },

  mounted () {
    if (this.wangEditor.obj === null) {
      console.log('test')
      this.initWangeditor()
    }

    if (this.$route.query.id) {
      var data = {
        id: this.$route.query.id
      }
      this.$$api_article_findArticle({
        data,
        fn: data => {
          this.article_data = data.article_info
          this.article_data.status = data.article_info.status === 1
          this.article_data.tabs = data.article_info.tabs.split(',')
          this.wangEditor.obj.txt.html(this.article_data.content)
        }
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (from.query.id && !to.query.id && (to.path === from.path)) {
      this.$confirm('正在修改内容，确认离开？', '离开此页').then(() => {
        this.$message('确认离开，在这里处理自己的逻辑，比如清空输入值')
        next()
      }).catch(() => {
        this.$message('取消离开，啥也不干，随你搞')
        next(false)
      })
    }
  }
}
