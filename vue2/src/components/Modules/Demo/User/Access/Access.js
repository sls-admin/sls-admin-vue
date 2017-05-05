import {
    request
} from 'config/';

module.exports = {
    name: 'user',
    components: {

    },
    data() {
        return {
            web_routers: [],
            defaultWebRoutersProps: {
                children: 'children',
                label: 'name'
            },
            api_routers_checkeds: [],

            api_routers: [],
            defaultApiRoutersProps: {
                children: 'list',
                label: 'name'
            },
            web_routers_checkeds: [],

            data:{
                id:'',
                web_routers:'',
                api_routers:''
            }
        };
    },
    methods: {
        /*filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },*/

        checkChangeWebRouters(data, selfIsChecked, childHasChecked) {
            if (selfIsChecked === true && data.access.split('/').length == 4 && this.web_routers_checkeds.indexOf(data.access) === -1) {
                this.web_routers_checkeds.push(data.access);
            } else {
                var index = this.web_routers_checkeds.indexOf(data.access);
                if (index !== -1) {
                    this.web_routers_checkeds.splice(index, 1);
                }
            }
        },

        checkChangeApiRouters(data, selfIsChecked, childHasChecked) {
            /*if (selfIsChecked === true && data.access.split('/').length == 4 && this.web_routers_checkeds.indexOf(data.access) === -1) {
                this.web_routers_checkeds.push(data.access);
            } else {
                var index = this.web_routers_checkeds.indexOf(data.access);
                if (index !== -1) {
                    this.web_routers_checkeds.splice(index, 1);
                }
            }*/
            
            if (selfIsChecked === true && !data.list && this.api_routers_checkeds.indexOf(data.path) === -1) {
                this.api_routers_checkeds.push(data.path);
            }else{
                var index = this.api_routers_checkeds.indexOf(data.path);
                if (index !== -1) {
                    this.api_routers_checkeds.splice(index, 1);
                }
            }
        },


        setUserAccess() {
            var web_routers_flag = false;
            for (var i = 0; i < this.web_routers_checkeds.length; i++) {
                var arr = this.web_routers_checkeds[i].split('/');

                if (arr.length === 4) {
                    web_routers_flag = true;
                    var rootPath = '/' + arr[1],
                        twoPath = rootPath + '/' + arr[2];

                    if (this.web_routers_checkeds.indexOf(rootPath) === -1) {
                        this.web_routers_checkeds.push(rootPath);
                    }
                    if (this.web_routers_checkeds.indexOf(twoPath) === -1) {
                        this.web_routers_checkeds.push(twoPath);
                    }
                }
            }

            //当前所选中的节点
            if (web_routers_flag === false) {
                this.web_routers_checkeds = [];
            }

            // console.log(this.web_routers_checkeds.join(','));
            // console.log(this.user_id.join(','));

            if (this.data.id) {
                this.data.web_routers=this.web_routers_checkeds.join(',');
                this.data.api_routers=this.api_routers_checkeds.join(',');

                this.$$api_user_updateUserAccess(this.data,data=>{
                    console.log(data);
                });
            }else{
                console.log('缺少用户ID');
            }
        },


        /**
         * 初始化组装路由
         * @return {array} 路由数组
         */
        initRouters(){
            var routes = this.$router.options.routes;
            for (var i = 0; i < routes.length; i++) {
                if (routes[i].hidden !== true && routes[i].children && routes[i].children.length) {
                    var tempObj = {},
                        module = routes[i],
                        menus = module.children;
                    tempObj.name = module.name;
                    tempObj.path = module.path;
                    tempObj.access = module.path;
                    tempObj.children = [];
                    for (var j = 0; j < menus.length; j++) {
                        if (menus[j].hidden !== true && menus[j].children && menus[j].children.length) {
                            var tempChildObj = {},
                                menu = menus[j],
                                pages = menu.children;
                            tempChildObj.name = menu.name;
                            tempChildObj.path = '/' + menu.path;
                            tempChildObj.access = tempObj.path + '/' + menu.path;
                            tempChildObj.children = [];
                            for (var k = 0; k < pages.length; k++) {
                                if (pages[k].hidden !== true) {
                                    var tempPageObj = {},
                                        page = pages[k];
                                    tempPageObj.name = page.name;
                                    tempPageObj.path = '/' + page.path;
                                    tempPageObj.access = tempObj.path + '/' + menu.path + '/' + page.path;
                                    tempChildObj.children.push(tempPageObj);
                                }
                            }
                            tempObj.children.push(tempChildObj);
                        }
                    }
                    this.web_routers.push(tempObj);
                }
            }
            // console.log(this.web_routers);
        },


        /**
         * 初始化组装接口
         * @return {array} 组装好的接口数组
         */
        initApis(){
            this.api_routers=request;
        }
    },
    mounted() {
        this.data.id=this.$route.query.id;

        this.initRouters();

        this.initApis();
    },

    watch: {
        filterText(val) {
            this.$refs.tree2.filter(val);
        }
    }
}