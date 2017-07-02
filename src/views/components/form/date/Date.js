export default {
    components: {
        // FormData
    },
    data() {
        return {
            default_value:{
                create_time:'',
				create_time_range_init:[],
                create_year:'',
                create_month:'',
				create_week:''
            },
            fields: [{
                label: '创建日期',
                type: 'date',
                key: 'create_time',
                placeholder: '开始日期',
                events:{
                    change:(value)=>{
						this.$message('当前选中的值：'+value);
                    }
                }
            }, {
                label: '默认日期范围',
                type: 'daterange',
                key: 'create_time_range_init',
                placeholder: '日期范围-默认',
				events:{
					change:(value)=>{
						this.$message('当前选中的值：'+value);
					}
				}
            }, {
                label: '年',
                type: 'year',
                key: 'create_year',
                placeholder: '选择年份',
				events:{
					change:(value)=>{
						this.$message('当前选中的值：'+value);
					}
				}
            }, {
                label: '月',
                type: 'month',
                key: 'create_month',
                placeholder: '选择月份',
				events:{
					change:(value)=>{
						this.$message('当前选中的值：'+value);
					}
				}
            }, {
                label: '周',
                type: 'week',
                key: 'create_week',
                placeholder: '选择周',
				date_week_attrs:{
					format:"yyyy 第 WW 周"
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