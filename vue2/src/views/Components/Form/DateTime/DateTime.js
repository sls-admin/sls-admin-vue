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
				label: '日期时间',
				type: 'datetime',
				key: 'date_time',
				placeholder: '请选择日期时间',
				value: '',
			}, {
				label: '日期时间范围',
				type: 'datetimerange',
				key: 'date_time_range_init',
				placeholder: '日期范围',
				value: {
					default: []
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