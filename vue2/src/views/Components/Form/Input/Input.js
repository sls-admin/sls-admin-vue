export default {
    components: {

    },
    data() {
        return {
            default_value:{
                input:'default value'
            },
            fields: [{
                label: 'Input',
                key: 'input',
                value: 'sailengsi',
                desc: '请输入标题'
            }],
        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}