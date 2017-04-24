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
            }, {
                label: '默认日期范围',
                type: 'daterange',
                key: 'create_time_range_init',
                placeholder: '日期范围-默认',
                value: {
                    default: []
                },
            }, {
                label: '年',
                type: 'year',
                key: 'create_year',
                placeholder: '选择年份',
                value: '',
            }, {
                label: '月',
                type: 'month',
                key: 'create_month',
                placeholder: '选择月份',
                value: '',
            }, {
                label: '周',
                type: 'week',
                key: 'create_week',
                placeholder: '选择周',
                value: '',
            }],

        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}