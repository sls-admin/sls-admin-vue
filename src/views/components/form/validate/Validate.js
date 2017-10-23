export default {
  data () {
    return {
      default_value: {},
      fields: [
        {
          label: 'Input',
          key: 'input',
          desc: '请输入标题...'
        },
        {
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
          }]
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
          }]
        },
        {
          label: '性别',
          key: 'sex',
          type: 'radio',
          desc: 'radio',
          list: [{
            text: '不限',
            value: 0
          }, {
            text: '男',
            value: 2
          }, {
            text: '女',
            value: 3
          }]
        },
        {
          key: 'status',
          type: 'switch',
          value: {
            on: '启用',
            off: '禁用'
          },
          desc: '',
          label: '状态'
        },
        {
          label: '爱好',
          type: 'checkbox',
          key: 'love',
          list: [{
            text: '吃',
            value: 'chi'
          }, {
            text: '喝',
            value: 'he'
          }, {
            text: '玩',
            value: 'wan'
          }]
        }
      ],
      rules: {
        input: [{
          required: true, message: '请输入标题', trigger: 'blur'
        }],
        cate: [{
          required: true, message: '请选择分类', trigger: 'blur'
        }],
        sex: [{
          required: true, message: '请选择性别', trigger: 'blur'
        }],
        tabs: [{
          type: 'array', required: true, message: '至少选择一个标签', trigger: 'blur'
        }],
        love: [{
          type: 'array', required: true, message: '至少选择喜好', trigger: 'blur'
        }]
      }

    }
  },
  methods: {
    onSubmit (data) {
      this.$emit('onTest', data)
    }
  }
}
