export default {
  name: 'components-list-data-expand',
  components: {},
  data () {
    return {
      list: [],
      fields: [{
        key: 'name',
        label: '标题'
      }],
      expand: {
        show: true
        // position:'right'
      }
    }
  },
  created () {
    for (let i = 1; i <= 3; i++) {
      this.list.push({
        name: '赛冷思' + i,
        address: '北京上海第 ' + i + ' 区'
      })
    }
  },
  methods: {
    init () {

    }
  },
  mounted () {
    this.init()
  },
  watch: {
    $route () {

    }
  }
}
