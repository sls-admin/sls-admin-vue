export default {
  components: {
    // FormData
  },
  data () {
    return {
      fields: [{
        label: '级联选择器',
        type: 'cascader',
        key: 'cascader',
        desc: '请选择城市',
        options: [{
          id: 1,
          city: '北京',
          children: [{
            city: '朝阳区',
            id: 11,
            children: [{
              city: '6号线',
              id: 111,
              children: [{
                city: '朝阳门',
                id: 1111
              }, {
                city: '金台路',
                id: 1112
              }, {
                city: '草房',
                id: 1113
              }]
            }]
          }, {
            city: '海淀区',
            id: 12
          }]
        }, {
          id: 2,
          city: '上海',
          children: [{
            city: '浦东',
            id: 21
          }]
        }],
        cascader_attrs: {
          props: {
            label: 'city',
            value: 'id',
            children: 'children'
          }
        },
        events: {
          change: ({value, info}) => {
            this.$message('所有的值选完时触发：当前选中的值：' + value + '；当前选中的值对应的文本是：' + info)
          },
          'active-item-change': ({value, info}) => {
            this.$message('每个选项改变时触发：当前选中的值：' + value + '；当前选中的值对应的文本是：' + info)
          }
        }

      }]
    }
  },
  methods: {
    onSubmit (data) {
      this.$emit('onTest', data)
    }
  }
}
