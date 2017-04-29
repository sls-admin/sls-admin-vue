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
                label: '时间',
                type: 'time',
                key: 'create_time',
                placeholder: '创建时间',
                value: '18:00',
                options: {
                    start: '10:00',
                    step: '01:00',
                    end: '21:00'
                }
            }],

        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}