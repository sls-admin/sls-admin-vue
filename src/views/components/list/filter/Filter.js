export default {
  name: 'article-list',
  components: {
    // ListData
  },
  data () {
    return {
      types: {
        'A': '顶级',
        'B': '一级',
        'C': '二级',
        'D': '三级'
      },
      list: [{
        id: 1,
        name: '赛',
        type: 'A',
        status: 1
      }, {
        id: 2,
        name: '冷',
        type: 'B',
        status: 2
      }, {
        id: 3,
        name: '思',
        type: 'C',
        status: 1
      }, {
        id: 3,
        name: '赛冷思',
        type: 'D',
        status: 1
      }],
      fields: [{
        key: 'name',
        label: '姓名'
      }, {
        key: 'type',
        label: '级别(批量筛选)',
        width: '260',
        filter_list: [{
          text: '级别A',
          value: 'A'
        }, {
          text: '级别B',
          value: 'B'
        }, {
          text: '级别C',
          value: 'C'
        }, {
          text: '级别D',
          value: 'D'
        }],
        filter_method: (value, item) => {
          return item.type === value
        },
        filter_multiple: true
      }, {
        key: 'status',
        label: '状态(单个筛选)',
        width: '260',
        filter_list: [{
          text: '状态1',
          value: 1
        }, {
          text: '状态2',
          value: 2
        }],
        filter_method: function (value, item) {
          return item.status === value
        },
        filter_multiple: false
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
