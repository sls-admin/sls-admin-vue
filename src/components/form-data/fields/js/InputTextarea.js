/**
 * Created by sailengsi on 2017/7/2.
 */

export default {
  name: '',
  computed: {
    attrs () {
      return this.Data.attrs || {}
    }
  },

  methods: {
    onClick (e) {
      this.events.click && this.events.click(e)
    },
    onBlur (e) {
      this.events.blur && this.events.blur(e)
    },
    onFocus (e) {
      this.events.focus && this.events.focus(e)
    },
    onChange (value) {
      this.events.change && this.events.change(value)
    }
  }
}
