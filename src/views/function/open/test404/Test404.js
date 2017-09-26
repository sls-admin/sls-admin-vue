export default {
  name: 'form',
  data () {
    return {}
  },
  methods: {
    routeRoot () {
      this.$router.push('/')
    },
    routeNotRoot () {
      this.$router.push('/opens')
    },
    routeNotTwo () {
      this.$router.push('/open/abcd')
    },
    routeNotThree () {
      this.$router.push('/open/form/test')
    }
  }
}
