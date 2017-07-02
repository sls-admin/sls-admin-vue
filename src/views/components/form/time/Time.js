export default {
    components: {
        // FormData
    },
    data() {
        return {
            default_value:{
                create_time:''
            },
            fields: [{
                label: '时间',
                type: 'time',
                key: 'create_time',
                placeholder: '创建时间',
                time_attrs:{
					'picker-options': {
						start: '13:00',
						step: '01:00',
						end: '21:00'
					},
                },
				events:{
					change:(value)=>{
						this.$message('当前选中的值：'+value);
					}
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