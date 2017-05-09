<template v-loading.fullscreen.lock="$store.state.global.ajax_loading">
    <div class="home">
        <head-nav></head-nav>
        <div class="left-fixed-right-auto">
            <left-menu></left-menu>
            <div class="right-content">
                <div class="content" :style="{marginLeft:$store.state.leftmenu.width}">
                    <bread></bread>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Layout from './';
    export default {
        name: 'home',
        components:Layout
    }
</script>
<style scoped lang='less'>
    .content{
        margin-top: 60px;
        /*background: #f1f2f7;*/
        background: #FFF;
        padding: 16px;
    }
    .right-content{
        margin-bottom: 60px;
    }
</style>
