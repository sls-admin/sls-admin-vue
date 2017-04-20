import {
    FormData
} from 'common/';

module.exports = {
    components: {
        FormData
    },
    data() {
        return {
            fields: [{
                label: '日期',
                type: 'date',
                key: 'create_time',
                placeholder: '开始日期',
                value: '',
                // shortcuts: false,
                // disabledDate: false,
                /*change(v) {
                    console.log(v);
                }*/
            }],

        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}