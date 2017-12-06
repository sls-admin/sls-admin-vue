<template v-loading.fullscreen.lock="$store.state.global.ajax_loading">
  <div class="home">
    <head-nav></head-nav>
    <div class="left-fixed-right-auto">
      <left-menu></left-menu>
      <div class="right-content">
        <div class="content" :style="{marginLeft:$store.state.leftmenu.width}">
          <tabs></tabs>
          <bread></bread>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import HeadNav from '../head-nav/HeadNav.vue'
  import LeftMenu from '../left-menu/LeftMenu.vue'
  import Bread from '../bread/Bread.vue'
  import Tabs from '../tabs/Tabs.vue';

  export default {
    name: 'home',
    components: {
      HeadNav, LeftMenu, Bread, Tabs
    }
  }
</script>
<style scoped lang='less'>
  .content {
    margin-top: 44px;
    /*background: #f1f2f7;*/
    background: #FFF;
    padding: 16px;
  }

  .right-content {
    margin-bottom: 60px;
  }
</style>
