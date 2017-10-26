export default {
  data () {
    return {
      default_value: {
        input: '111'
      },
      fields: [{
        label: 'Input',
        key: 'input',
        desc: '请输入标题...'
      }]
    }
  },
  methods: {
    onSubmit (data) {
      this.$emit('onTest', data)
    }
  },
  created () {
    console.log('input')
    // console.log('created input')
  },
  mounted () {
    // console.log('mountd input')
  }
}
