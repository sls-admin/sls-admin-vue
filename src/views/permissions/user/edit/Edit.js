export default {
    name: 'permission-user-edit',
    components: {},
    data () {
        return {
            fields: [{
                key: 'username',
                desc: '请输入用户名',
                label: '用户名'
            }],
            default_value: {
                username: ''
            },
            rules: {
                username: [{
                    required: true, message: '请输入用户名', trigger: 'blur'
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
