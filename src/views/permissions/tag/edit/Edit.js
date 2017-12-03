export default {
    name: 'permissions-tag-edit',
    components: {},
    data () {
        return {
            fields: [{
                key: 'name',
                desc: '请输入标签名',
                label: '标签名称'
            }],
            default_value: {
                username: ''
            },
            rules: {
                name: [{
                    required: true, message: '请输入标签名', trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        onSubmit ({data, info}) {
            console.log(data, info)
        }
    },
    watch: {
        default_value: {
            deep: true,
            handler (v) {
                this.default_value = v
            }
        }
    }
}
