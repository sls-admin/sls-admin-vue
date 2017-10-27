export default {
  name: 'custom-btn',
  components: {},
  data () {
    return {
      list: [],
      fields: [{
        key: 'name',
        label: '姓名'
      }, {
        key: 'address',
        label: '地址'
      }],

      btn_info: {
        custom: {
          width: 300,
          // all:false,//false:不显示按钮操作列

          // default:false,//false:不显示默认所有按钮(查看，修改，删除)

          // select:false,//false:不显示查看按钮
          select_text: '查看',
          // update:false,//false:不显示修改按钮
          update_text: '修改',
          // delete:false,//false:不显示删除按钮
          delete_text: '删除',
          // add:false,//false：不显示添加按钮
          add_text: '添加功能',

          // batch:false,//false:不显示批量选择功能，同时内置批量删除按钮也不显示
          // batch_delete:false,//false:不显示批量删除按钮
          batch_delete_text: '批量删除功能',

          // 增加自定义按钮，默认会排到默认按钮的右边
          list: [{
            text: '同步', // 按钮文本
            type: 'warning', // 按钮类型，遵循elementUI的几种按钮类型
            // 如果不传按钮，默认会触发onClickBtn方法，传了则不会调用onClickBtn方法
            fn: (opts) => {
              this.$message('自定义的同步按钮')
              console.log(opts)
            }
          }, {
            text: '刷新',
            type: 'primary'
          }]
          // list_position:'before'//默认不传或者为after在默认按钮的后边,before则在前边。
        }
      }
    }
  },
  created () {
    for (let i = 1; i <= 3; i++) {
      this.list.push({
        name: '赛冷思' + i,
        address: '北京上海第 ' + i + ' 区'
      })
    }
  },
  methods: {
    onClickBtn (opts) {
      this.$message('自定义按钮没有定义回调时触发')
      console.log(opts)
    },
    onClickBtnAdd (opts) {
      this.$message('添加按钮')
      console.log(opts)
    },
    onClickBtnSelect (opts) {
      this.$message('查看按钮')
      console.log(opts)
    },
    onClickBtnUpdate (opts) {
      this.$message('修改按钮')
    },
    onClickBtnDelete (opts) {
      this.$message('单个删除按钮')
    },
    onClickBtnBatchDelete (opts) {
      this.$message('批量删除按钮')
    },
    onSearch ({data, info}) {
      this.$message('搜索按钮')
    },
    onSelectionChange (opts) {
      this.$message('批量选择改变事件')
    },
    init () {

    }
  },
  mounted () {
    this.init()
  },
  watch: {
    $route () {

    }
  }
}
