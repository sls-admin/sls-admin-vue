<template>
  <div class='bread'>
    <strong>
      {{strong}}
    </strong>
    <el-breadcrumb separator="/" class='el-bread'>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for='(item,index) in $route.matched'
        :key='index'>{{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'bread',
    data () {
      return {
        strong: ''
      }
    },
    methods: {
      getPageText (name) {
        return name.replace('编辑', this.$route.query.id ? '修改' : '添加')
      }
    },
    mounted () {

    },
    created () {
      if (this.$route.matched.length) {
        var name = this.$route.matched[this.$route.matched.length - 1].name
        this.strong = this.getPageText(name)
      }
    },
    watch: {
      $route (to, from) {
        this.strong = this.getPageText(to.name)
      }
    }
  }
</script>

<style scoped lang='less'>
  .bread {
    height: 40px;
    line-height: 26px;
    .el-bread {
      display: inline-block;
      float: right;
      text-align: right;
      line-height: 26px;
    }
  }
</style>
