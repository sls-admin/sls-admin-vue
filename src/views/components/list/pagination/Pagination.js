export default {
  name: 'article-list',
  components: {},
  data () {
    return {
      list: [],
      fields: [{
        key: 'name',
        label: '姓名'
      }, {
        key: 'age',
        label: '年龄'
      }],
      pagination: {
        current_page: 1,
        total: 30,
        'page-count': 0,
        page_size: 12,
        page_sizes: [3, 9, 12, 24],
        layout: 'total, sizes, prev, pager, next, jumper'
      }
    }
  },
  created () {

  },
  methods: {
    onChangeCurPage (page) {
      this.$message('当前页是第' + page + '页')
    },
    onChangeCurPageSize (pageSize) {
      this.$message('当前每页显示 ' + pageSize + ' 条')
    },
    init () {

    }
  },
  mounted () {
    this.init()
  },
  watch: {
    $route (to, from) {

    }
  }

}
