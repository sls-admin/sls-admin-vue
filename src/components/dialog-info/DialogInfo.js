export default {
  name: 'dialog-info',
  data () {
    return {
      dialog: this.Dialog || {}
    }
  },
  methods: {
    onClose () {
      this.dialog.show = false
    }
  },

  computed: {
    show () {
      return this.dialog.show
    }
  },

  mounted () {
    // console.log(this.Show);
  },

  /**
   * 接收参数
   * @type {Object}
   */
  props: {
    Dialog: {
      type: Object,
      validator: (v) => {
        return true
      }
    }
  },

  /**
   * 监控参数
   * @type {Object}
   */
  watch: {}
}
