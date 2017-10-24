export default {
  name: 'article-list',
  components: {
    // ListData
  },
  data () {
    return {
      list: [{
        id: 1,
        name: '赛'
      }, {
        id: 2,
        name: '冷'
      }, {
        id: 3,
        name: '思'
      }],
      fields: [{
        key: 'id',
        label: 'ID'
      }, {
        key: 'name',
        label: '姓名'
      }]
    }
  },
  methods: {
    // {type,data,dataIndex,list,btn,btnIndex}
    onClickBtn (opts) {
      // console.log(opts);
    },

    onClickBtnAdd (opts) {
      // console.log(opts);
      this.$message('点击的是添加按钮')
    },
    onClickBtnUpdate (opts) {
      // console.log(opts);
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
