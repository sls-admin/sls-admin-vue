<template>
  <div class='tabs'>
    <el-tabs
      v-model="$store.state.tabs.tabs_cur"
      type="card"
      closable
      @tab-click="onTabClick"
      @tab-remove="onRemoveTab">
      <el-tab-pane
        v-for="(route, index) in $store.state.tabs.list"
        :key="route.path"
        :label="route.name"
        :name="route.path">{{route.name}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'sls-tabs',
    data() {
      return {}
    },
    methods: {
      onTabClick(Tabs) {
        console.log(Tabs.name);
        var index=this.$store.state.tabs.pathList.indexOf(Tabs.name);
        if(index!==-1){
          this.$router.push(this.$store.state.tabs.list[index]);
        }
      },
      onRemoveTab(targetName) {
//        console.log(targetName);
        this.$store.dispatch('remove_tabs', {
          path: targetName
        }).then(() => {
          if (this.$route.path === targetName) {
            if (this.$store.state.tabs.list.length) {
              this.$router.push({
                path: this.$store.state.tabs.list[0].path,
                params: this.$store.state.tabs.list[0].params,
                query: this.$store.state.tabs.list[0].query
              });
            } else {
              this.$router.push('/');
            }
          }
        });
      }
    },
    mounted() {
//      console.log('this.$store.state.tabs.list', this.$store.state.tabs.list);
//      console.log('this.$store.state.tabs.pathList', this.$store.state.tabs.pathList);
//      console.log('this.$store.state.tabs.tabs_cur', this.$store.state.tabs.tabs_cur);
    },
    created() {
    },
    watch: {
      $route() {

      }
    }
  }
</script>

<style scoped lang='less'>
  .tabs{
    padding: 0px 26px;
  }
</style>
