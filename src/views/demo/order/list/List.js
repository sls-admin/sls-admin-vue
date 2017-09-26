export default {
  name: 'order-list',
  data () {
    return {
      article_list: [],

      format_status_list: {
        1: '待支付',
        2: '待配送',
        3: '待收货',
        4: '已完成',
        5: '已取消',
        6: '退单'
      },

      batch_id: '', // 批量删除时这是多个用逗号隔开的id字符串
      batch_flag: true, // 符合批量删除为true,否则为false

      // 需要给分页组件传的信息
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 12,
        page_sizes: [3, 9, 12, 24],
        layout: 'total, sizes, prev, pager, next, jumper'
      },

      fields: {
        status: {
          info: {
            prop: 'status',
            label: '订单状态',
            sortable: true
          },
          filter: {
            list: [{
              text: '待支付',
              value: 1
            }, {
              text: '待配送',
              value: 2
            }, {
              text: '待收货',
              value: 3
            }, {
              text: '已完成',
              value: 4
            }, {
              text: '已取消',
              value: 5
            }, {
              text: '退单',
              value: 6
            }],
            multiple: false
          },
          style: {
            width: '180',
            align: 'center'
          }
        },
        create_time: {
          info: {
            prop: 'create_time',
            label: '日期',
            sortable: true
          },
          filter: {},
          style: {
            width: '260',
            align: 'center'
          }
        },
        name: {
          info: {
            prop: 'name',
            label: '订单名称',
            sortable: true
          },
          filter: {},
          style: {
            width: '150',
            align: 'center'
          }
        }
      }
    }
  },
  methods: {

    /**
     * 格式化状态
     */
    formatterStatus (item) {
      return this.format_status_list[item.status]
    },
    filterStatus (value, item) {
      return this.format_status_list[value] === this.format_status_list[item.status]
    },

    /**
     * 改变页码和当前页时需要拼装的路径方法
     * @param {string} field 参数字段名
     * @param {string} value 参数字段值
     */
    setPath (field, value) {
      var path = this.$route.path
      var query = Object.assign({}, this.$route.query)

      if (typeof field === 'object') {
        query = field
      } else {
        query[field] = value
      }

      this.$router.push({
        path,
        query
      })
    },

    /**
     * 改变当前页事件
     * @param  {number} page 当前页码
     */
    onChangeCurrentPage (page) {
      this.getList({
        page,
        fn: () => {
          this.setPath('page', page)
        }
      })
    },

    /**
     * 改变每页显示数量事件
     * @param  {number} size 当前每页显示数量
     */
    onChangePageSize (pageSize) {
      this.getList({
        pageSize,
        fn: () => {
          this.setPath('page_size', pageSize)
        }
      })
    },

    /**
     * 获取订单列表
     * @param  {number} options.page      当前页码，切换页码时用
     * @param  {number} options.page_size 每页显示数量，改变每页数量时用
     * @param  {function} options.fn                            } 获取列表后的回调函数
     */
    getList ({
               page,
               pageSize,
               where,
               fn
             } = {}) {
      var query = this.$route.query

      this.paginations.current_page = page || parseInt(query.page) || 1
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size

      var data = {
        page: this.paginations.current_page,
        page_size: this.paginations.page_size
      }

      if (where) {
        data = Object.assign(data, where || {})
      }

      this.$$api_order_selectOrder({
        data,
        fn: articleData => {
          this.article_list = articleData.list.data
          this.paginations.total = articleData.list.total

          fn && fn()
        }
      })
    }
  },
  mounted () {
    this.getList({
      fn: () => {
        // this.onSelectArticle(this.article_list[1]);
      }
    })
  },
  '$route' (to, from) {

  }
}
