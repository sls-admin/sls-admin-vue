export default {
  components: {
    // FormData
  },
  data () {
    return {
      default_value: {
        editor: '<p>hello word</p>'
      },
      fields: [{
        label: '文本框',
        key: 'editor',
        type: 'editor',
        desc: '请输入内容',
        config: {
          // 需要隐藏的tab
          // hide_menus:[
          // 'head',
          // 'bold',
          // ],

          // 需要显示的tab
          // show_menus:[
          // 'head',
          // 'bold',
          // ],

          // 如果以上两个共存，那么显示的tab优先级高于隐藏的tab。也就是说，都存在时，采取显示的

          // 属性
          attrs: {
            uploadImgServer: '/slsAdminApi/Article/editUpload',
            uploadFileName: 'article',
            uploadImgHeaders: {
              token: this.$store.state.user.userinfo.token
            }
          },

          // 上传自定义事件
          events: {
            customInsert: (insertImg, result, editor) => {
              if (result.status === 404) {
                this.$store.dispatch('remove_userinfo').then(() => {
                  this.$alert(result.status + ',' + result.msg + '！', '登录错误', {
                    confirmButtonText: '确定',
                    callback: action => {
                      this.$router.push('/login')
                    }
                  })
                })
              } else {
                if (result.status !== 200) {
                  this.$alert(result.status + ',' + result.msg + '！', '登录错误', {
                    confirmButtonText: '确定',
                    callback: action => {
                      this.$router.push('/login')
                    }
                  })
                } else {
                  insertImg(result.data.fileinfo.getSaveName)
                }
              }
            }
          },

          // change改变事件
          onchange: ({value, info}) => {
            console.log(value)
            console.log(info)
          }
        }
      }]
    }
  },
  methods: {
    onSubmit (data) {
      this.$emit('onTest', data)
    }
  }
}
