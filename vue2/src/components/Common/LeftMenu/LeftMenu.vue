<template>
    <div class="left" :style="{'height':win_size.height,'width':$store.state.leftmenu.width}" id='admin-left'>
        <div id='left-menu'>
            <el-row class='tac'
                v-for="(route,index) in $router.options.routes" 
                v-if='!route.hidden && $route.matched.length && $route.matched[0].path===route.path'>
                <el-col :span="24">
                    <el-menu 
                        class="el-menu-vertical-demo" 
                        theme="dark"
                        :default-active="$route.path"
                        unique-opened 
                        router>
                        <!-- v-if="!item.hidden && $store.state.user.userinfo.access.indexOf(route.path+'/'+item.path)===-1" -->
                        <template 
                            v-for="(item,index) in route.children" 
                            v-if="!item.hidden">
                            <el-submenu 
                                :index="item.path">
                                <template 
                                    slot="title">
                                    <el-tooltip 
                                        class="item" 
                                        effect="dark"
                                        placement="right"
                                        :disabled="$store.state.leftmenu.menu_flag" 
                                        :content="item.name">
                                       <i :class="'fa fa-'+item.icon"></i>
                                    </el-tooltip>
                                    <span 
                                        class='menu-name' 
                                        v-if="$store.state.leftmenu.menu_flag">{{item.name}}<!-- {{route.path+'/'+item.path}} --></span>
                                </template>

                                <!-- v-if="!child.hidden && $store.state.user.userinfo.access.indexOf(route.path+'/'+item.path+'/'+child.path)===-1" -->
                                <el-menu-item 
                                    v-for='(child,cindex) in item.children' 
                                    v-if="!child.hidden"
                                    :style="{'padding-left':$store.state.leftmenu.menu_flag? '40px' : '23px'}" 
                                    :index='$store.state.router.headerCurRouter+"/"+item.path+"/"+child.path'>
                                    <el-tooltip 
                                        class="item" 
                                        effect="dark" 
                                        placement="right"
                                        :disabled="$store.state.leftmenu.menu_flag" 
                                        :content="child.name">
                                        <i :class="'fa fa-'+child.icon"></i>
                                    </el-tooltip>
                                    <span 
                                        class='menu-name' 
                                        v-if="$store.state.leftmenu.menu_flag">{{child.name}}<!-- {{route.path+'/'+item.path+'/'+child.path}} --></span>
                                </el-menu-item>
                            </el-submenu>
                        </template>
                    </el-menu>
                </el-col>
            </el-row>
            <div class="toggle-menu" @click='toggleMenu'>
                <i class='el-icon-arrow-left'></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'left-menu',
        data () {
            return {
                menu_list:[],

                win_size:{
                    height:'',
                }
            }
        },
        methods:{
            setSize(){
                this.win_size.height=$(window).height()+"px";
            },

            toggleMenu(){
                this.$store.dispatch(this.$store.state.leftmenu.menu_flag?'set_menu_close':'set_menu_open');
            },

            updateCurMenu(route){
                var route=route || this.$route;
                if (route.matched.length) {
                    var rootPath=route.matched[0].path,
                        fullPath=route.path;
                    this.$store.dispatch('set_cur_route',{
                        rootPath,
                        fullPath
                    });
                    var routes=this.$router.options.routes;
                    for (var i = 0; i < routes.length; i++) {
                        if (routes[i].path===rootPath && !routes[i].hidden) {
                            this.menu_list=routes[i].children;
                            break;
                        }
                    }
                }else{
                    this.$router.push('/404');
                }
            }

        },
        created(){
            this.setSize();
            $(window).resize(()=>{
                this.setSize();
            });

            this.updateCurMenu();
        },
        mounted(){
            // console.log(this.$store.state.user.userinfo.access);
        },
        watch:{
            $route(to,from){
                this.updateCurMenu(to);
            }
        }
    }
</script>

<style scoped lang='less'>
    .fa{
        margin-right: 8px;
    }
    .left-fixed-right-auto{
        padding-top: 60px;
    }
    .left{
        position:fixed;
        float:left;
        /*width:190px;
        margin-right:-190px;*/
        top:60px;
    }
    .right-content{
        float:right;
        width:100%;
    }
    #left-menu{
        height: 100%;
        background: #324057;
        position: relative;
        overflow-x: hidden;
        

        .toggle-menu{
            width: 100%;
            height: 50px;
            background: #1f2f3d;
            position: absolute;
            bottom: 50px;
            left: 0px;
            z-index: 1000;
            cursor: pointer;
            line-height: 40px;
            text-align: center;
            color: #fff;
            font-size: 14px;
        }
    }
</style>
