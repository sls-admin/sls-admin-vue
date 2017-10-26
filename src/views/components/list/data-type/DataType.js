export default {
  name: 'article-list',
  components: {},
  data () {
    return {
      list: [{
        id: 1,
        name: '赛',
        image: 'https://sailengsi.com/Public/home/2016/images/logo.png',
        url: 'https://sailengsi.com',
        github: 'https://github.com',
        slsadmin: 'https://github.com/sailengsi/sls-admin'
      }, {
        id: 2,
        name: '冷',
        image: 'https://sailengsi.com/Public/home/2016/images/logo.png',
        url: 'https://sailengsi.com',
        github: 'https://github.com',
        slsadmin: 'https://github.com/sailengsi/sls-admin'
      }, {
        id: 3,
        name: '思',
        image: 'https://sailengsi.com/Public/home/2016/images/logo.png',
        url: 'https://sailengsi.com',
        github: 'https://github.com',
        slsadmin: 'https://github.com/sailengsi/sls-admin'
      }],
      fields: [{
        type: 'image',
        key: 'image',
        label: '图片',
        host: '',
        width: '100',
        height: '100'
      }, {
        key: 'name',
        label: '姓名'
      }, {
        key: 'url',
        label: '网址(链接)',
        type: 'link',
        link_text: '官方网址(新开窗口打开)',
        link_target: '_blank'
      }, {
        key: 'github',
        label: 'Github(链接)',
        type: 'link',
        link_text: 'github(当前窗口打开)'
      }, {
        key: 'slsadmin',
        label: 'slsadmin(默认显示连接)',
        type: 'link'
      }]
    }
  },
  methods: {
    onClickBtn (opts) {
      console.log(opts)
    },

    onClickBtnAdd () {
      this.$message('点击的是添加按钮')
    },
    onClickBtnUpdate () {
      this.$message('点击的是修改按钮')
    },
    onClickBtnSelect () {
      this.$message('点击的是查看按钮')
    },
    onClickBtnDelete () {
      this.$message('点击的是删除按钮')
    }
  },
  mounted () {

  },
  watch: {
    $route (to, from) {

    }
  }

}
