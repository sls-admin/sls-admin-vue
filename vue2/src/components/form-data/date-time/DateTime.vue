<template>
    <div>

    </div>
</template>

<script>
	export default {
		data(){
			return {};
		},
		methods: {
			init(){

			}
		},
		mounted(){
			this.init();
		},
		watch  : {
			$route(){
				this.init();
			}
		}
	};
</script>

<style scoped lang="less">

</style>