import apis from 'apis/'

export default {
  name: 'user',
  components: {},
  data () {
    return {
      // 用户名
      username: '',

      // tree选中
      checkeds: {
        // web页面tree选中的节点对象
        web_routers: {},
        // API路由tree选中的节点对象
        api_routers: {}
      },

      // tree数据属性
      props: {
        web_routers: {
          children: 'children',
          label: 'name'
        },
        api_routers: {
          children: 'list',
          label: 'name'
        }
      },

      // tree数据
      datas: {
        // web页面路由数据-tree
        web_routers: [],
        // api路由数据-tree
        api_routers: []
      },

      // 提交给后台的数据
      data: {
        id: '', // 用户ID
        web_routers: '', // web页面路由
        api_routers: '', // API路由
        default_web_routers: '', // 访问没有权限的页面时跳转的路由
        access_status: false// 是否开启权限
      }
    }
  },
  methods: {
    /**
     * 改变web页面选项时触发
     * @param data  当前改变的对象
     * @param selfIsChecked 当前是否选中
     * @param childHasChecked   子元素，没啥卵用
     */
    checkChangeWebRouters (data, selfIsChecked, childHasChecked) {
      if (selfIsChecked === true && data.access.split('/').length === 4 && !this.checkeds.web_routers[data.access]) {
        this.$set(this.checkeds.web_routers, data.access, data.name)
      }

      if (selfIsChecked === false && this.checkeds.web_routers[data.access]) {
        this.$delete(this.checkeds.web_routers, data.access)
        if (data.access === this.data.default_web_routers) {
          this.data.default_web_routers = ''
        }
      }
    },

    /**
     * 改变API路由选项时触发
     */
    checkChangeApiRouters (data, selfIsChecked, childHasChecked) {
      if (selfIsChecked === true && !data.list && !this.checkeds.api_routers[data.path]) {
        this.$set(this.checkeds.api_routers, data.path, data.name)
      }

      if (selfIsChecked === false && this.checkeds.api_routers[data.path]) {
        this.$delete(this.checkeds.api_routers, data.path)
      }
    },

    /**
     * 初始化组装路由
     * @return {array} 路由数组
     */
    initRouters () {
      var routes = this.$router.options.routes
      for (var i = 0; i < routes.length; i++) {
        if (routes[i].hidden !== true && routes[i].children && routes[i].children.length) {
          var tempObj = {}
          var module = routes[i]
          var menus = module.children
          tempObj.name = module.name
          tempObj.path = module.path
          tempObj.access = module.path
          tempObj.children = []
          for (var j = 0; j < menus.length; j++) {
            if (menus[j].hidden !== true && menus[j].children && menus[j].children.length) {
              var tempChildObj = {}
              var menu = menus[j]
              var pages = menu.children
              tempChildObj.name = menu.name
              tempChildObj.path = '/' + menu.path
              tempChildObj.access = tempObj.path + '/' + menu.path
              tempChildObj.children = []
              for (var k = 0; k < pages.length; k++) {
                if (pages[k].hidden !== true) {
                  var tempPageObj = {}
                  var page = pages[k]
                  tempPageObj.name = page.name
                  tempPageObj.path = '/' + page.path
                  tempPageObj.access = tempObj.path + '/' + menu.path + '/' + page.path
                  tempChildObj.children.push(tempPageObj)
                }
              }
              tempObj.children.push(tempChildObj)
            }
          }
          this.datas.web_routers.push(tempObj)
        }
      }
      // console.log(this.web_routers);
    },

    /**
     * 初始化组装接口
     * @return {array} 组装好的接口数组
     */
    initApis () {
      // console.log(apis);

      this.datas.api_routers = []
      this.$$lib__.mapObject(apis, item => {
        console.log(item)
        this.datas.api_routers.concat(item.list)
      })
      console.log(this.datas.api_routers)
      // this.datas.api_routers = request;
    },

    /**
     * 获取用户详情
     */
    getUserinfo () {
      this.$$api_user_findUser({
        data: {
          id: this.data.id
        },
        fn: data => {
          this.username = data.userinfo.username
          this.data.access_status = data.userinfo.access_status === 1
          this.data.default_web_routers = data.userinfo.default_web_routers
          this.data.web_routers = data.userinfo.web_routers
          this.data.api_routers = data.userinfo.api_routers

          if (data.userinfo.web_routers) {
            this.checkeds.web_routers = JSON.parse(data.userinfo.web_routers)
          }
          var keys = Object.keys(this.checkeds.web_routers).filter((item) => {
            return item.split('/').length === 4
          })
          this.$refs.webRouters.setCheckedKeys(keys)

          if (data.userinfo.api_routers) {
            this.checkeds.api_routers = JSON.parse(data.userinfo.api_routers)
          }
          this.$refs.apiRouters.setCheckedKeys(Object.keys(this.checkeds.api_routers))

          console.log(this.checkeds.web_routers)
        }
      })
    },

    /**
     * 设置用户权限事件
     */
    setUserAccess () {
      var webRoutersFlag = false
      for (var p in this.checkeds.web_routers) {
        var arr = p.split('/')

        if (arr.length === 4) {
          webRoutersFlag = true
          var rootPath = '/' + arr[1]
          var twoPath = rootPath + '/' + arr[2]

          if (!this.checkeds.web_routers[rootPath]) {
            this.checkeds.web_routers[rootPath] = rootPath
          }
          if (!this.checkeds.web_routers[twoPath]) {
            this.checkeds.web_routers[twoPath] = twoPath
          }
        }
      }

      // 当前所选中的节点
      if (webRoutersFlag === false) {
        this.checkeds.web_routers = {}
      }

      this.data.web_routers = JSON.stringify(this.checkeds.web_routers)
      this.data.api_routers = JSON.stringify(this.checkeds.api_routers)

      this.data.access_status = this.data.access_status === true ? 1 : 2

      // console.log(this.data);
      // return;

      if (this.data.id) {
        if (this.data.access_status === 1 && !this.data.default_web_routers) {
          this.$message.error('开启权限时必须设置默认页面')
        } else {
          this.$$api_user_updateUserAccess({
            data: this.data,
            fn: data => {
              this.data.access_status = this.data.access_status === 1
              this.$message.success('设置成功')
            }
          })
        }
      } else {
        this.$message.error('缺少用户ID')
      }
    }
  },
  mounted () {
    this.data.id = this.$route.query.id

    this.initRouters()

    this.initApis()

    this.getUserinfo()
  },

  watch: {}
}
