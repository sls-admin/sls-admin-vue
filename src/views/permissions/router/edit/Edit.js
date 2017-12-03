export default {
    name: 'permissions-router-edit',
    components: {},
    data () {
        return {
            fields: [{
                key: 'name',
                desc: '请输入路由名称',
                label: '路由名称'
            }],
            default_value: {
                username: ''
            },
            rules: {
                name: [{
                    required: true, message: '请输入路由名称', trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        onSubmit ({data, info}) {
            console.log(data, info)
        }
    },
    watch: { }
}
