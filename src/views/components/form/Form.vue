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

        	}
        },
        created() {

        },
        mounted() {
            console.log('form');
        }
    }
</script>
<style scoped>
    
</style>
