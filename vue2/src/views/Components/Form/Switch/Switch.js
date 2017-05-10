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
                key: 'status',
                type: 'switch',
                value: {
                    default: true,
                    on: '启用',
                    off: '禁用'
                },
                desc: '',
                label: 'Switch'
            }],
        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}