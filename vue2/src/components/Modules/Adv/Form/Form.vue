<template>
    <div class="form">
        <router-view
        	@onTest='onTest'></router-view>
    </div>
</template>
<script>
    module.exports = {
        name: 'form-content',
        components: {
            
        },
        data() {
            return {
                
            }
        },
        methods: {
        	onTest(data){
        		console.log(data);
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
