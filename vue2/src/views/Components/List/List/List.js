import {
    ListData
} from 'components/';


module.exports = {
    name: 'article-list',
    components: {
        ListData
    },
    data() {
        return {
            types:{
                'A':'顶级',
                'B':'一级',
                'C':'二级',
                'D':'三级'
            },
            list: [{
                id:1,
                name:'赛',
                type:'A',
                image:'afdf',
                create_time:'2016-2-23',
                status:1
            },{
                id:2,
                name:'冷',
                type:'B',
                image:'fdfdf',
                create_time:'2016-3-23',
                status:2
            },{
                id:3,
                name:'思',
                type:'C',
                image:'dsds',
                create_time:'2016-4-23',
                status:1
            },{
                id:3,
                name:'赛冷思',
                type:'D',
                image:'dsds',
                create_time:'2016-4-23',
                status:2
            }],
            fields: [{
                type:'image',
                key: 'image',
                label: '图片'
            },{
                key: 'name',
                label: '姓名'
            },{
                key: 'create_time',
                label: '创建时间'
            }, {
                key: 'type',
                label: '级别',
                formatter: (item)=> {
                    return this.types[item.type];
                },
                filter_list: [{
                    text: '顶级',
                    value: 'A'
                }, {
                    text: '一级',
                    value: 'B'
                }, {
                    text: '二级',
                    value: 'C'
                }, {
                    text: '三级',
                    value: 'D'
                }],
                filter_method: function(value, item) {
                    return item.type == value;
                },
                filter_multiple: true,
            },  {
                key: 'status',
                label: '状态',
                formatter: (item)=> {
                    return item.status == 1 ? '启用' : '禁用';
                },
                filter_list: [{
                    text: '启用',
                    value: 1
                }, {
                    text: '禁用',
                    value: 2
                }],
                filter_method: function(value, item) {
                    return item.status == value;
                },
                filter_multiple: false,
            }],
            // btn_info: {
            //     show: false
            // },
            // expand:{
            //     show:true,
            //     position:'right'
            // }
        }
    },
    methods: {
        
    },
    mounted() {

    },
    '$route' (to, from) {

    }
}
