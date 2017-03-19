import {
    Login,
    Home,
    NotFound,
    Content,
    Modules
} from '../components/';

console.log(Modules);

module.exports = [{
    path: '/',
    redirect: to => {
        return 'login';
    },
    hidden: true
}, {
    path: '/login',
    component: Login,
    hidden: true
}, {
    path: '/404',
    component: Home,
    hidden: true,
    children: [{
        path: '',
        component: NotFound
    }]
}, {
    path: '/function',
    name: '功能模块',
    icon: 'inbox',
    component: Home,
    children: [{
        hidden: true,
        path: '',
        redirect: to => {
            return 'open'
        }
    }, {
        path: 'open',
        name: '公共内容',
        icon: 'inbox',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'echarts'
            }
        }, {
            path: 'echarts',
            name: '图表',
            icon: 'bar-chart',
            component: Modules.Function.Open.Echarts
        }, {
            path: 'list',
            name: '列表',
            icon: 'reorder',
            component: Modules.Function.Open.List
        }, {
            path: 'form',
            name: '表单',
            icon: 'edit',
            component: Modules.Function.Open.Form
        }, {
            path: 'vuex',
            name: 'Vuex',
            icon: 'window-restore',
            component: Modules.Function.Open.Vuex
        }, {
            path: 'test404',
            name: '测试404',
            icon: 'window-restore',
            component: Modules.Function.Open.Test404
        }]
    }]
}, {
    path: '/demo',
    name: '演示模块',
    icon: 'inbox',
    component: Home,
    children: [{
        hidden: true,
        path: '',
        redirect: to => {
            return 'user'
        }
    }, {
        path: 'user',
        name: '用户管理',
        icon: 'inbox',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'list'
            }
        }, {
            path: 'list',
            name: '用户列表',
            icon: 'reorder',
            component: Modules.Demo.User.List
        }, {
            path: 'edit',
            name: '编辑用户',
            icon: 'edit',
            component: Modules.Demo.User.Edit
        }]
    }, {
        path: 'article',
        name: '文章管理',
        icon: 'inbox',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'list'
            }
        }, {
            path: 'list',
            name: '文章列表',
            icon: 'reorder',
            component: Modules.Demo.Article.List
        }, {
            path: 'edit',
            name: '编辑文章',
            icon: 'edit',
            component: Modules.Demo.Article.Edit
        }]
    }, {
        path: 'order',
        name: '订单管理',
        icon: 'inbox',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'list'
            }
        }, {
            path: 'list',
            name: '订单列表',
            icon: 'reorder',
            component: Modules.Demo.Order.List
        }, {
            path: 'edit',
            name: '编辑订单',
            icon: 'edit',
            component: Modules.Demo.Order.Edit
        }]
    }, {
        path: 'orderstatis',
        name: '订单统计',
        icon: 'inbox',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'bar'
            }
        }, {
            path: 'bar',
            name: '柱状图',
            icon: 'reorder',
            component: Modules.Demo.OrderStatis.Bar
        }, {
            path: 'pie',
            name: '饼状图',
            icon: 'edit',
            component: Modules.Demo.OrderStatis.Pie
        }]
    }]
}, {
    path: '/adv',
    name: '再次封装',
    icon: 'inbox',
    component: Home,
    children: [{
        hidden: true,
        path: '',
        redirect: to => {
            return 'article'
        }
    }, {
        path: 'components',
        name: '高级示例',
        icon: 'inbox',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'list'
            }
        }, {
            path: 'list',
            name: '列表组件',
            icon: 'reorder',
            component: Modules.Adv.Components.List
        }, {
            path: 'edit',
            name: '表单组件',
            icon: 'edit',
            component: Modules.Adv.Components.Edit
        }]
    }, {
        path: 'article',
        name: '文章管理',
        icon: 'inbox',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'list'
            }
        }, {
            path: 'list',
            name: '文章列表',
            icon: 'reorder',
            component: Modules.Adv.Article.List
        }, {
            path: 'edit',
            name: '编辑文章',
            icon: 'edit',
            component: Modules.Adv.Article.Edit
        }]
    }, {
        path: 'wangeditor',
        name: 'wangeditor富文本',
        icon: 'inbox',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'one'
            }
        }, {
            path: 'one',
            name: '单个',
            icon: 'reorder',
            component: Modules.Adv.Wangeditor.One
        }, {
            path: 'many',
            name: '多个',
            icon: 'edit',
            component: Modules.Adv.Wangeditor.Many
        }]
    }]
}];