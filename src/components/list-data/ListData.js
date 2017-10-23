import SlsTableHead from './SlsTableHead.vue'

export default {
  name: 'list-data',
  components: {SlsTableHead},
  data () {
    return {
      batch_flag: true, // 符合批量删除为true,否则为false
      batch_datas: [],
      batch_ids: [],

      batch: {
        flag: true,
        datas: [],
        ids: []
      },

      list: this.List, // 列表数组
      fields: this.FieldList, // 字段数组
      expand: this.Expand, // 折叠
      btn_info: this.BtnInfo, // 按钮信息

      pagination: this.Pagination, // 分页

      search: this.Search// 搜索
    }
  },
  methods: {
    /**
     * 表格列表触发CheckBox的事件
     * @param  {array} val 当前选中的用户信息数组，每个元素是用户信息对象
     */
    onSelectionChange (val) {
      this.batch.datas = val

      this.batch.ids = []
      if (val.length) {
        this.batch.flag = false
        for (var i = 0; i < val.length; i++) {
          this.batch.ids.push(val[i].id)
        }
      } else {
        this.batch.flag = true
      }

      /**
       * 改变CheckBox事件，第一个参数是ID数组，第二个参数二维数组，每个数组是选中的对象
       */
      this.$emit('onSelectionChange', {
        ids: this.batch.ids,
        datas: this.batch.datas
      })
      this.$emit('onSelectionChangeObj', {
        ids: this.batch.ids,
        datas: this.batch.datas
      })
    },

    /**
     * 搜索事件
     * @param data    搜索表单的值
     */
    onSearch (opts) {
      this.$emit('onSearch', opts)
    },

    /**
     * 删除事件
     * @param  {object || boolean} user  当前信息对象或者为布尔值,为布尔值时，代表是批量删除
     * @param  {number} index 当前列表索引
     */
    onBatchDelete () {
      this.$emit('onClickBtnBatchDelete', {
        ids: this.batch.ids,
        datas: this.batch.datas
      })
    },

    /**
     * 点击按钮事件
     * @param opts  组装的返回参数
     * @param.attr  opts.type   string      按钮类型，内置四个(添加，查看，修改，删除)
     * @param.attr  opts.index  number      当点击列表中的按钮时，此值为当前行的索引
     * @param.attr  opts.data   object      当点击列表中的按钮时，此值为当前行数据
     * @param.attr  opts.list   array       当点击列别中的按钮时，此值为当前列表数据
     */
    onBtnEvent (opts) {
      switch (opts.type) {
        case 'Add':
          this.$emit('onClickBtnAdd', opts)
          break
        case 'Update':
          this.$emit('onClickBtnUpdate', opts)
          break
        case 'Delete':
          this.$emit('onClickBtnDelete', opts)
          break
        case 'BatchDelete':
          this.onBatchDelete()
          break
        case 'Select':
          this.$emit('onClickBtnSelect', opts)
          break
        default:
          this.$emit('onClickBtn', opts)
      }
    },

    /**
     * 自定义按钮事件
     * @param opts
     */
    onCustomBtnEvent (opts) {
      if (opts.btn.fn) {
        opts.btn.fn(opts)
      } else {
        this.$emit('onClickBtn', opts)
      }
    },

    /**
     * 改变当前页码事件
     * @param  {number} page 当前页面
     */
    onChangeCurrentPage (page) {
      this.$emit('onChangeCurrentPage', page)
    },

    /**
     * 改变每页显示的数量事件
     * @param  {number} page_size 每页显示的数量
     */
    onChangePageSize (pageSize) {
      this.$emit('onChangePageSize', pageSize)
    }
  },

  mounted () {
    // console.log(this.list);
  },

  /**
   * 接收参数
   * @type {Object}
   */
  props: {
    List: {
      type: Array,
      required: true
    },
    FieldList: {
      type: Array,
      required: true
    },
    BtnInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    Selection: {
      type: Boolean,
      default: false
    },
    Expand: {
      type: Object,
      default () {
        return {
          show: false,
          position: 'left'
        }
      }
    },
    Pagination: {
      type: Object,
      default () {
        return {}
      }
    },
    Search: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  /**
   * 监控参数
   * @type {Object}
   */
  watch: {
    List (v) {
      if (v) {
        this.list = v
      }
    },
    FieldList (v) {
      if (v) {
        this.fields = v
      }
    },
    Selection (v) {
      this.selection = v
    },
    Expand (v) {
      this.expand = v
    },
    BtnInfo (v) {
      this.btn_info = v
    },
    Pagination (v) {
      this.pagination = v
    },
    Search (v) {
      this.search = v
    }
  }
}
