export default {
  components: {
    // FormData
  },
  data () {
    return {
      default_value: {
        content: 'hello word'
      },
      fields: [{
        label: '文本框',
        key: 'content',
        type: 'textarea',
        desc: '请输入内容',
        attrs: {
          rows: 4
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
