export default {
  name: 'adv-article-list',
  components: {},
  data () {
    return {
      list: [],
      fields: [{
        key: 'id',
        label: '文章ID'
      }, {
        key: 'create_time',
        label: '创建时间'
      }, {
        key: 'title',
        label: '标题'
      }, {
        width: '160',
        key: 'status',
        label: '状态',
        formatter: function (item) {
          return item.status === 1 ? '启用' : '禁用'
        },
        filter_list: [{
          text: '启用',
          value: 1
        }, {
          text: '禁用',
          value: 2

        }],
        filter_method: function (value, item) {
          return item.status === value
        },
        filter_multiple: false
      }],

      // 需要给分页组件传的信息
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 9,
        page_sizes: [3, 9, 12, 24],
        layout: 'total, sizes, prev, pager, next, jumper'
      },

      // 搜索配置
      search_data: {
        fields: [{
          key: 'title',
          label: '标题'
        }],
        default_value: {
          title: ''
        }
      },

      // 按钮配置
      btn_info: {
        // batch:false,
        // batch_delete:false,
        width: 300,
        add_text: '添加文章',
        select_text: '查看',
        update_text: '修改',
        delete_text: '删除文章',
        batch_delete_text: '批量删除文章'
      }

    }
  },
  methods: {
    /**
     * 获取文章列表
     */
    onGetList () {
      this.$$api_article_selectArticle({
        data: {
          page: this.paginations.current_page,
          page_size: this.paginations.page_size,
          title: this.search_data.default_value.title
        },
        fn: data => {
          console.log(data)
          this.paginations.total = data.list.total
          this.list = data.list.data
        }
      })
    },

    /**
     * 点击删除按钮
     */
    onClickBtnDelete (opts) {
      this.$confirm('删除后不可恢复', '确认删除？').then(() => {
        this.$$api_article_deleteArticle({
          data: {
            id: opts.data.id
          },
          fn: data => {
            this.onGetList()
          }
        })
      })
    },

    /**
     * 添加文章
     */
    onClickBtnAdd () {
      this.$router.push('/adv/article/edit')
    },

    onClickBtnSelect (opts) {
      console.log(opts)
      this.$message('查看自己处理吧')
    },

    /**
     * 修改按钮
     * @param opts
     */
    onClickBtnUpdate (opts) {
      this.$router.push({
        path: '/adv/article/edit',
        query: {
          id: opts.data.id
        }
      })
    },

    /**
     * 改变页码事件
     * @param current_page    当前页码
     */
    onChangeCurPage (currentPage) {
      var path = this.$route.path
      var query = Object.assign({}, this.$route.query)
      query.current_page = currentPage
      this.$router.push({
        path,
        query
      })
    },

    /**
     * 改变每页显示数量事件
     * @param page_size    每页显示的数量
     */
    onChangePageSize (pageSize) {
      var path = this.$route.path
      var query = Object.assign({}, this.$route.query)
      query.page_size = pageSize
      this.$router.push({
        path,
        query
      })
    },

    /**
     * 更新参数
     */
    onUpdateParams () {
      if (this.$route.query.current_page) {
        this.paginations.current_page = parseInt(this.$route.query.current_page)
      }
      if (this.$route.query.page_size) {
        this.paginations.page_size = parseInt(this.$route.query.page_size)
      }

      this.search_data.default_value.title = this.$route.query.title
    },

    /**
     * 搜索事件
     * @param data    表单数据
     * @param info    其他有用的数据
     */
    onSearch ({data, info}) {
      console.log(data)
      console.log(info)

      var path = this.$route.path
      var query = Object.assign({}, this.$route.query, data)

      this.$router.push({
        path,
        query
      })
    },

    // 批量选择改变CheckBox事件
    onSelectionChange ({ids, datas}) {
      // console.log(ids);
      // console.log(datas);
    },

    /**
     * 批量删除
     * @param ids 选中的ids
     * @param datas  选中的数据集合
     */
    onClickBtnBatchDelete ({ids, datas}) {
      this.$confirm('删除的数据：' + ids.join(','), '确认删除？').then(() => {
        this.$$api_article_deleteArticle({
          data: {
            id: ids.join(',')
          },
          fn: data => {
            this.onGetList()
          }
        })
      })
    },

    /**
     * 初始化
     */
    init () {
      this.onUpdateParams()
      this.onGetList()
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    $route (to, from) {
      this.init()
    }
  }

}
