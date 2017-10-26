export default {
  name: 'form',
  data () {
    return {
      form: {
        name: '',
        region: '',
        region2: [],
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        disk_size: 6
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleRemove (file) {},
    handlePreview (file) {
      console.log(file)
    }
  }
}
