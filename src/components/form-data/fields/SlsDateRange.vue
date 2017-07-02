<template>
    <div>
        <el-date-picker
                @change="onChange"
                v-model="submit_data[data.key]"
                v-bind="date_range_attrs"
                type="daterange"
                :placeholder="data.desc">
        </el-date-picker>
    </div>
</template>
<script>
	import Common from './js/Common';
	var Js=Common('sls-date-range');
	Js.mixins=[{
		computed:{
			date_range_attrs(){
				return this.Data.date_range_attrs || {};
			}
		},
		methods:{
			onChange(v){
				this.events.change && this.events.change(v);
			}
		}
	}];
	export default Js;
</script>