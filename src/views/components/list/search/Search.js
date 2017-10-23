export default {
  name: 'article-list',
  components: {},
  data () {
    return {
      list: [],
      fields: [{
        key: 'create_time',
        label: '创建时间'
      }, {
        key: 'title',
        label: '标题'
      }],
      search_data: {
        setting: {
          inline: true
        },
        fields: [{
          key: 'cate',
          type: 'select',
          multiple: false,
          list: [{
            value: 'jishu',
            text: '技术'
          }, {
            value: 'sanwen',
            text: '散文'
          }, {
            value: 'qita',
            text: '其他'
          }],
          desc: '请选择分类',
          label: ''
        }, {
          label: '',
          key: 'input',
          desc: '请输入标题'
        }]
      }
    }
  },
  methods: {
    onSearch (data) {
      this.$message('搜索结果：' + JSON.stringify(data))
    },
    init () {

    }
  },
  mounted () {
    this.init()
  }
}
