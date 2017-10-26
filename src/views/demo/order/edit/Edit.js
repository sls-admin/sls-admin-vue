// import { gbs } from 'config/settings.js'

export default {
  name: 'edit-order',
  data () {
    return {
      form_data: {
        name: '',
        status: '1'
      },
      form_rules: {
        name: [{
          required: true,
          message: '订单名称不能为空！',
          trigger: 'blur'
        }],
        status: [{
          required: true,
          message: '文章分类不能为空！',
          trigger: 'change'
        }]
      }
    }
  },
  methods: {
    /**
     * 提交表单
     * @param  {string} formName 表单名称
     */
    onSubmit (formName) {
      var ref = this.$refs[formName]
      ref.validate((valid) => {
        if (valid) {
          // console.log(this.form_data);
          this.$$api_order_saveOrder({
            data: this.form_data,
            fn: data => {
              // console.log(data);
              this.$router.push('/demo/order/list')
            }
          })
        }
      })
    },
    reset_form (form) {
      this.$refs[form].resetFields()
    }
  },
  created () {},
  mounted () {

  }
}
