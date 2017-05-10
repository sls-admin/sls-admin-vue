<template>
    <div class="form">
        <router-view
        	@onTest='onTest'></router-view>
    </div>
</template>
<script>
    export default {
        name: 'form-content',
        components: {
            
        },
        data() {
            return {
                
            }
        },
        methods: {
        	onTest(data){
        		console.log(data.data);
        	}
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style scoped>
    
</style>
