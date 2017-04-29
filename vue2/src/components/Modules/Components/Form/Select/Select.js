import {
	FormData
} from 'common/';

module.exports = {
	name      : 'edit-article',
	components: {
		FormData
	},
	data() {
		return {
			fields: [{
				key  : 'cate',
				type : 'select',
				multiple: false,
				value: {
					default: '',
					list   : [{
						value: 'jishu',
						text : '技术'
					}, {
						value: 'sanwen',
						text : '散文'
					}, {
						value: 'qita',
						text : '其他'
					}]
				},
				desc : '请选择文章分类',
				label: '单选下拉框'
			}, {
				key     : 'tabs',
				type    : 'select',
				multiple: true,
				value   : {
					default: ['javascript', 'html'],
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
					}]
				},
				desc    : '请选择文章标签',
				label   : '多选下拉框'
			}],
		}
	},
	methods   : {
		onSubmit(data) {
			this.$emit('onTest', data);
		}
	},
	mounted(){
		// this.fields[0].value.list.push({
		// 	text:'测试',
		// 	value:'test'
		// });

		// this.fields[0].value.list=[{
		// 	text:'测试',
		// 	value:'test'
		// }];
	}
}