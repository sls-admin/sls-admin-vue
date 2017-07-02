export default {
	name      : 'form-select',
	components: {

	},
	data() {
		return {
			default_value:{
				cate:'sanwen',
				tabs:['javascript','html']
			},
			fields: [{
				key  : 'cate',
				type : 'select',
				desc : '请选择文章分类',
				label: '单选下拉框',
				list   : [{
					value: 'jishu',
					text : '技术'
				}, {
					value: 'sanwen',
					text : '散文'
				}, {
					value: 'qita',
					text : '其他'
				}],
				events:{
					change:({value,info})=>{
						this.$message('当前选中的值：'+value+'；当前选中的值对应的文本是：'+info);
					}
				}
			}, {
				key     : 'tabs',
				type    : 'select',
				desc    : '请选择文章标签',
				label   : '多选下拉框',
				multiple: true,
				list   : [{
					value: 'html',
					text : '前端HTML'
				}, {
					value: 'css',
					text : '前端CSS'
				}, {
					value: 'javascript',
					text : '前端JavaScript'
				}, {
					value: 'jquery',
					text : '前端query'
				}],
				events:{
					change:({value,info})=>{
						this.$message('当前选中的值：'+value.join(',')+'；当前选中的值对应的文本是：'+info.join(','));
					}
				}
			}],
		}
	},
	methods   : {
		onSubmit(data) {
			this.$emit('onTest', data);
		}
	},
	mounted(){

	}
}