<template>
    <div class='bread'>
        <strong>{{$route.matched.length ? $route.matched[$route.matched.length-1].name : '首页'}}</strong>
        <el-breadcrumb separator="/" class='el-bread'>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for='(item,index) in $route.matched'>{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'bread',
        data () {
            return {
                
            }
        },
        methods:{
            
        },
        mounted(){

        },
        created(){
            // console.log(this.$route);
        }
    }
</script>

<style scoped lang='less'>
    .bread{
        height: 40px;
        line-height: 26px;
        .el-bread{
            display: inline-block;
            float: right;
            text-align: right;
            line-height: 26px;
        }
    }
</style>
