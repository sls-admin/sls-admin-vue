export default {
    components: {
        // FormData
    },
    data() {
        return {
            fields: [{
                label: 'Checkbox',
                type: 'checkbox',
                key: 'checkbox',
                value: true,
            }, {
                label: 'Checkbox-multiple',
                type: 'checkbox',
                key: 'checkbox-multiple',
                multiple: true,
                checkall: {
                    value: true,
                    indeterminate: true,
                    text: '全选吧我曹',
                },
                value: {
                    default: [1, 3],
                    list: [{
                        text: 'one',
                        value: 1
                    }, {
                        text: 'two',
                        value: 2
                    }, {
                        text: 'three',
                        value: 3
                    }]
                },
            }],

        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}