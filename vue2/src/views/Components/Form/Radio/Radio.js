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
                label: '单选',
                key: 'radio',
                type: 'radio',
                desc: 'radio',
                value: {
                    default: '2',
                    list: [{
                        text: '不限',
                        value: '1'
                    }, {
                        text: '男',
                        value: '2'
                    }, {
                        text: '女',
                        value: '3'
                    }]
                }
            }]
        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}