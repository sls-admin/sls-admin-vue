/**
 * Created by sailengsi on 2017/7/2.
 */

export default function(name) {
	return {
		name    : name,
		data(){
			return {};
		},
		computed: {
			data(){
				return this.Data;
			},
			events(){
				return this.Data.events || {};
			},
			group_attrs(){
				return this.Data.group_attrs || {};
			},
			submit_data(){
				return this.SubmitData;
			},
			submit_info(){
				return this.SubmitInfo;
			},
			temp_field_obj(){
				return this.TempFieldObj;
			}
		},
		props   : {
			Data        : {
				type: Object,
				default(){
					return {};
				}
			},
			SubmitData  : {
				type: Object,
				default(){
					return {};
				}
			},
			SubmitInfo  : {
				type: Object,
				default(){
					return {};
				}
			},
			TempFieldObj: {
				type: Object,
				default(){
					return {};
				}
			}
		},
		methods : {
			/**
			 * 处理表单控件值复数类型，比如，获取的值和显示的文本不同时，除了返回需要提交表单的value值，还需要返回显示的文本，以防不时之需
			 * @author    赛冷思
			 * @date    2017-7-2
			 */
			setArrayValue(){
				//把存储value和text的数组转成对象格式，有利于提高根据值取文本的效率
				this.temp_field_obj[this.data.key] = {};

				//当存在value和text数组时，才可调用
				if (this.data.list && Array.isArray(this.data.list)) {

					//遍历value和text数组，组装成对象格式
					this.data.list.forEach(item => {
						this.temp_field_obj[this.data.key][item.value!==undefined ? item.value : item.text] = item.text!==undefined ? item.text : item.value;
					});

					//如果当前默认值为真，默认先提取一下默认值对应的文本
					if (this.submit_data[this.data.key]!==undefined) {
						//默认值分两种：数组(多选)，字符串或整形(单选)
						if (Array.isArray(this.submit_data[this.data.key])) {
							//循环数组值，把每个对应的文本取出来
							this.submit_info[this.data.key] = [];
							this.submit_data[this.data.key].forEach(item => {
								if (this.temp_field_obj[this.data.key][item]) {
									this.submit_info[this.data.key].push(this.temp_field_obj[this.data.key][item]);
								}
							});
						} else {
							//不是数组，直接提取对应的值得文本
							this.submit_info[this.data.key] = '';
							if (this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]) {
								this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][this.submit_data[this.data.key]];
							}
						}
					}
				}
			},
			init(){
			}
		},
		created(){
			this.setArrayValue();
		},
		mounted(){
			this.init();
		},
		watch   : {
			$route(){
				this.init();
			}
		}
	}
}


/*
 export default {
 name    : name,
 data(){
 return {};
 },
 computed: {
 data(){
 return this.Data;
 },
 events(){
 return this.Data.events || {};
 },
 group_attrs(){
 return this.Data.group_attrs || {};
 },
 submit_data(){
 return this.SubmitData;
 },
 submit_info(){
 return this.SubmitInfo;
 },
 temp_field_obj(){
 return this.TempFieldObj;
 }
 },
 props   : {
 Data        : {
 type: Object,
 default(){
 return {};
 }
 },
 SubmitData  : {
 type: Object,
 default(){
 return {};
 }
 },
 SubmitInfo  : {
 type: Object,
 default(){
 return {};
 }
 },
 TempFieldObj: {
 type: Object,
 default(){
 return {};
 }
 }
 },
 methods : {
 /!**
 * 处理表单控件值复数类型，比如，获取的值和显示的文本不同时，除了返回需要提交表单的value值，还需要返回显示的文本，以防不时之需
 * @author    赛冷思
 * @date    2017-7-2
 *!/
 setArrayValue(){
 //把存储value和text的数组转成对象格式，有利于提高根据值取文本的效率
 this.temp_field_obj[this.data.key] = {};

 //当存在value和text数组时，才可调用
 if (this.data.list && Array.isArray(this.data.list)) {

 //遍历value和text数组，组装成对象格式
 this.data.list.forEach(item => {
 this.temp_field_obj[this.data.key][item.value || item.text] = item.text || item.value;
 });

 //如果当前默认值为真，默认先提取一下默认值对应的文本
 if (this.submit_data[this.data.key]) {
 //默认值分两种：数组(多选)，字符串或整形(单选)
 if (Array.isArray(this.submit_data[this.data.key])) {
 //循环数组值，把每个对应的文本取出来
 this.submit_info[this.data.key] = [];
 this.submit_data[this.data.key].forEach(item => {
 if (this.temp_field_obj[this.data.key][item]) {
 this.submit_info[this.data.key].push(this.temp_field_obj[this.data.key][item]);
 }
 });
 } else {
 //不是数组，直接提取对应的值得文本
 this.submit_info[this.data.key] = '';
 if (this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]) {
 this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][this.submit_data[this.data.key]];
 }
 }
 }
 }
 },
 init(){
 }
 },
 created(){
 this.setArrayValue();
 console.log(this.submit_info);
 },
 mounted(){
 this.init();
 },
 watch   : {
 $route(){
 this.init();
 }
 }
 }*/
