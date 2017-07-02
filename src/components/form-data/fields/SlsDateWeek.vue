<template>
    <div>
        <el-date-picker
                @change="onChange"
                v-model="submit_data[data.key]"
                v-bind="date_week_attrs"
                type="week"
                :placeholder="data.desc">
        </el-date-picker>
    </div>
</template>
<script>
	import Common from './js/Common';
	var Js=Common('sls-date-week');
	Js.mixins=[{
		computed:{
			date_week_attrs(){
				return this.Data.date_week_attrs || {};
			}
		},
		methods:{
			onChange(v){
				console.log(v);
				this.events.change && this.events.change(v);
			}
		}
	}];
	export default Js;
</script>