<template>
  <div class="form">
    <router-view
      @onTest='onTest'></router-view>
  </div>
</template>
<script>
  export default {
    name: 'form-content',
    components: {},
    data () {
      return {}
    },
    methods: {
      onTest ({data, info}) {
        console.log(data)
        console.log(info)
        this.$message('当前提交表单对象：' + JSON.stringify(data) + '；当前提交的表单的值对应的文本是：' + JSON.stringify(info))
      }
    },
    created () {

    },
    mounted () {

    }
  }
</script>
