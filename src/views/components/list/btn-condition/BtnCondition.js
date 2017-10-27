export default {
  name: 'btn-condition',
  components: {},
  data () {
    return {
      list: [{
        status: 1
      }, {
        status: 2
      }, {
        status: 3
      }],
      fields: [{
        key: 'status',
        label: '状态',
        formatter (data) {
          var status = ''
          switch (data.status) {
            case 1:
              status = '启用时，只能禁用'
              break
            case 2:
              status = '禁用时，能启用和删除'
              break
            case 3:
              status = '已删除时，只能禁用'
              break
          }
          return status
        }
      }],

      btn_info: {
        condition: {
          batch: false,
          add: false,
          select: false,
          update: false,
          delete ({data}) {
            return data.status === 2
          },
          list: [{
            text: '启用',
            condition ({data}) {
              return data.status === 2
            },
            fn ({data}) {
              data.status = 1
            }
          }, {
            text: '禁用',
            type: 'warning',
            condition ({data}) {
              return data.status === 1 || data.status === 3
            },
            fn ({data}) {
              data.status = 2
            }
          }]
        }
      }
    }
  },
  created () {
  },
  methods: {
    onClickBtnDelete ({dataIndex, data}) {
      this.$message('点击索引：' + dataIndex)

      // 此种方式只会改变数据显示，不会更新按钮状态
      // this.list[dataIndex].status = 3//

      // 这种方式才会连数据和按钮一块显示
      data.status = 3
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
