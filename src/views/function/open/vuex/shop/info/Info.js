export default {
  name: 'shop-info',
  computed: {
    cartInfos () {
      return this.$store.getters.getInfos
    }
  },
  methods: {
    clear_db () {
      this.$store.dispatch('clear_local')
    }
  }
}
