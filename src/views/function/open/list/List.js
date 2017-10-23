export default {
  name: 'list',
  data () {
    return {
      tableData: [{
        date: '1992-01-26',
        name: '赛冷思',
        sex: 1,
        status: 1,
        address: '北京苏州街'
      }, {
        date: '1996-05-02',
        name: '赛',
        sex: 1,
        status: 1,
        address: '西直河'
      }, {
        date: '1990-05-04',
        name: '冷',
        sex: 2,
        status: 2,
        address: '朝阳区'
      }, {
        date: '1998-05-01',
        name: '思',
        sex: 1,
        status: 1,
        address: '上海滩'
      }],
      selectData: {
        name: '',
        address: '',
        date: ''
      },
      fields: {
        sex: {
          info: {
            prop: 'sex',
            label: '性别',
            sortable: true
          },
          filter: {
            list: [{
              text: '男',
              value: 1
            }, {
              text: '女',
              value: 2
            }],
            multiple: false
          },
          style: {
            width: '130',
            align: 'center'
          }
        },
        status: {
          info: {
            prop: 'status',
            label: '状态',
            sortable: true
          },
          filter: {
            list: [{
              text: '启用',
              value: 1
            }, {
              text: '禁用',
              value: 2
            }],
            multiple: false
          },
          style: {
            width: '130',
            align: 'center'
          }
        },
        address: {
          info: {
            prop: 'address',
            label: '地址'
          },
          filter: {},
          style: {
            align: 'center'
          }
        },
        date: {
          info: {
            prop: 'date',
            label: '日期',
            sortable: true
          },
          filter: {},
          style: {
            width: '180',
            align: 'center'
          }
        },
        name: {
          info: {
            prop: 'name',
            label: '姓名',
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
     * 格式化性别
     */
    formatterSex (item) {
      return item.sex === 1 ? '男' : '女'
    },

    /**
     * 格式化状态
     */
    formatterStatus (item) {
      return item.status === 1 ? '启用' : '禁用'
    },

    filterSex (value, item) {
      return item.sex === value
    },
    filterStatus (value, item) {
      return item.status === value
    },

    onSelectData () {

    }
  }
}
