<template>
  <div>
    <div
      style="width: 1100px;"
      :id="id"></div>
  </div>
</template>

<script>
  import WangEditor from 'wangeditor'
  import Common from './js/Common'

  var Js = Common('sls-textarea')
  Js.mixins = [{
    data () {
      return {
        is_init: true,

        editor: null,

        id: '',

        menus: [
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

        attrs: {
          zIndex: 90,

          uploadImgShowBase64: false,   // 使用 base64 保存图片
          uploadImgServer: '', // 上传图片到服务器
          showLinkImg: true, // 隐藏“网络图片”tab
          uploadImgMaxSize: 5 * 1024 * 1024, // 默认限制图片大小是 5M
          uploadImgMaxLength: 10000, // 限制一次最多能传几张图片,默认为 10000 张（即不限制），需要限制可自己配置
          uploadImgParams: {}, // 上传图片时可自定义传递一些参数，例如传递验证的token等。这些参数会拼接到 url 的参数中，也会被添加到formdata中。
          uploadFileName: '', // 上传图片时，可自定义filename，即在使用formdata.append(name, file)添加图片文件时，自定义第一个参数。
          uploadImgHeaders: {}, // 上传图片时刻自定义设置 header
          withCredentials: false, // 跨域上传中如果需要传递 cookie 需设置 withCredentials
          uploadImgTimeout: 5000 // 默认的 timeout 时间是 5 秒钟
        },

        event: {
          // 图片上传之前触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
          // before: function (xhr, editor, files) {},

          // 图片上传并返回结果，图片插入成功之后触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
          // success: function (xhr, editor, result) {},

          // 图片上传并返回结果，但图片插入错误时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
          // fail: function (xhr, editor, result) {},

          // 图片上传出错时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
          // error: function (xhr, editor) {},

          // 图片上传超时时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
          // timeout: function (xhr, editor) {},

          // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
          // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
          // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
          // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
          // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
          // result 必须是一个 JSON 格式字符串！！！否则报错
          /* customInsert: function (insertImg, result, editor) {
           var url = result.url
           insertImg(url)
          } */
        }
      }
    },
    computed: {
      config () {
        return this.Data.config || {}
      }
    },
    methods: {
      /**
       * 初始化参数
       */
      initParams () {
        this.id = this.data.id || this.data.key

        if (this.config.show_menus && Array.isArray(this.config.show_menus)) {
          this.menus = this.menus.filter(item => {
            return this.config.show_menus.indexOf(item) !== -1
          })
        } else {
          if (this.config.hide_menus && Array.isArray(this.config.hide_menus)) {
            this.menus = this.menus.filter(item => {
              return this.config.hide_menus.indexOf(item) === -1
            })
          }
        }
      },

      onSetEditorContent () {

      },

      /**
       * 初始化实例编辑器
       */
      initWangEditor () {
        this.editor = new WangEditor('#' + this.id)
        this.editor.customConfig = {}
        this.editor.customConfig.menus = this.menus
        this.editor.customConfig = Object.assign(this.editor.customConfig, this.attrs, this.config.attrs)
        this.editor.customConfig.uploadImgHooks = {}
        this.editor.customConfig.uploadImgHooks = Object.assign(this.editor.customConfig.uploadImgHooks, this.config.events)
        this.editor.customConfig.onchange = (html) => {
          this.submit_data[this.data.key] = html
          this.submit_info[this.data.key] = this.editor.txt.text()
          this.config.onchange && this.config.onchange({
            value: this.submit_data[this.data.key],
            info: this.submit_info[this.data.key]
          })
        }
        this.editor.create()

        console.log(this.editor.txt.html)
        console.log(this.editor.txt.text)
      }
    },
    created () {
      this.initParams()
    },
    mounted () {
      this.initWangEditor()
    },
    watch: {
      submit_data: {
        deep: true,
        handler (v) {
          /* this.submit_data = v;
                    if (this.editor && this.is_init === true) {
                        this.is_init = false;
                        this.editor.txt.html(this.submit_data[this.data.key]);
         } */
        }
      }
    }
  }]
  export default Js
</script>

<style scoped lang="less">

</style>
