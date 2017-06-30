export default {
    data() {
        return {
            default_value:{
                input:'default value'
            },
            fields: [{
                label: 'Input',
                key: 'input',
                desc: '请输入标题'
            }],
        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    },
    created(){
        // console.log('created input')
    },
    mounted(){
        // console.log('mountd input')
    }
}