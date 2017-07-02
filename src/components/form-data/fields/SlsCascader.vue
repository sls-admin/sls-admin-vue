<template>
    <div>
        <el-cascader
                v-model="submit_data[data.key]"
                :placeholder="data.desc"
                @change="onChange"
                @active-item-change="onActiveItemChange"
                v-bind="cascader_attrs"
                :options="data.options"></el-cascader>
    </div>
</template>
<script>
	import Common from './js/Common';
	var Js=Common('sls-cascader');
	Js.mixins=[{
		data(){

        },
		computed:{
			cascader_attrs(){
				return this.Data.cascader_attrs || {};
			}
		},
		methods:{
			/**
			 * 根据数组的长度，来决定需要递归几次，最终取出需要的结果，我曹，没法解释，解释不清的玩意。
			 * @param  {array} 	areas 地区列表，无线分类结构
			 * @param  {array} 	temps 一维数组,如果只有一个，代表取顶级;如果两个，取顶级的子级；如果三个，顶级的子级的子级....以此类推
			 * @param  {number} k     递归次数，当这个值等于temps的长度时，就代表结束了
			 * @return {string}       地区名称
			 */
			onDeepGetCityName(list, temps, k) {
				for (var i = 0; i < list.length; i++) {
					if (list[i].id + '' === temps[k] + "") {
						if (k < temps.length - 1) {
							k = k + 1;
							this.temp_field_obj[this.data.key].push(list[i].city);
							this.onDeepGetCityName(list[i].children, temps, k);
						} else {
							// console.log(list[i]);
							this.temp_field_obj[this.data.key].push(list[i].city);
							return;
						}
					}
				}
			},

			onChange(v){
				this.temp_field_obj[this.data.key]=[];
				this.onDeepGetCityName(this.data.options,v,0);
				this.submit_info[this.data.key]=this.temp_field_obj[this.data.key];

				this.events.change && this.events.change({value:v,info:this.submit_info[this.data.key]});
			},

			onActiveItemChange(v){
				this.temp_field_obj[this.data.key]=[];
				this.onDeepGetCityName(this.data.options,v,0);
				this.submit_info[this.data.key]=this.temp_field_obj[this.data.key];
				this.events['active-item-change'] && this.events['active-item-change']({value:v,info:this.submit_info[this.data.key]});
            }
		},
        mounted(){
			this.temp_field_obj[this.data.key]=[];
        }
	}];
	export default Js;
</script>