export default {
  name: 'form-select',
  components: {},
  data () {
    return {
      default_value: {
        cate: 'sanwen',
        tabs: ['javascript', 'html'],
        custom_attr: 'C'
      },
      fields: [{
        key: 'cate',
        type: 'select',
        desc: '请选择文章分类',
        label: '单选下拉框',
        list: [{
          value: 'jishu',
          text: '技术'
        }, {
          value: 'sanwen',
          text: '散文'
        }, {
          value: 'qita',
          text: '其他'
        }],
        events: {
          change: ({value, info}) => {
            this.$message('当前选中的值：' + value + '；当前选中的值对应的文本是：' + info)
          }
        }
      }, {
        key: 'tabs',
        type: 'select',
        desc: '请选择文章标签',
        label: '多选下拉框',
        multiple: true,
        list: [{
          value: 'html',
          text: '前端HTML'
        }, {
          value: 'css',
          text: '前端CSS'
        }, {
          value: 'javascript',
          text: '前端JavaScript'
        }, {
          value: 'jquery',
          text: '前端query'
        }],
        events: {
          change: ({value, info}) => {
            this.$message('当前选中的值：' + value.join(',') + '；当前选中的值对应的文本是：' + info.join(','))
          }
        }
      }, {
        key: 'custom_attr',
        type: 'select',
        desc: '自定义属性',
        label: '自定义属性',
        list: [{
          v: 'H',
          t: 'HTML'
        }, {
          v: 'C',
          t: 'Css'
        }, {
          v: 'J',
          t: 'Javascript'
        }],
        custom_attrs: {
          label: 't',
          value: 'v'
        },
        events: {
          change: ({value, info}) => {
            this.$message('当前选中的值：' + value + '；当前选中的值对应的文本是：' + info)
          }
        }
      }]
    }
  },
  methods: {
    onSubmit (data) {
      this.$emit('onTest', data)
    }
  },
  mounted () {

  }
}
