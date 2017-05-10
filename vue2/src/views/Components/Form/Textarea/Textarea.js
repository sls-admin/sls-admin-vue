import {
    FormData
} from 'components/';

module.exports = {
    components: {
        FormData
    },
    data() {
        return {
            fields: [{
                label: '文本框',
                key: 'textarea',
                type: 'textarea',
                value: 'textarea',
                desc: '请输入内容',
            }],
        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}