import {
    ListData,
    DialogInfo
} from 'common/';


module.exports = {
    name: 'article-list',
    components: {
        ListData,
        DialogInfo
    },
    data() {
        return {
            list: [],
            fields: [{
                key: 'create_time',
                label: '创建时间'
            }, {
                key: 'title',
                label: '标题'
            }, {
                key: 'status',
                label: '状态',
                formatter: function(item) {
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
            btn_info: {
                // show: false,
                label: '操作',
                width: 300,
                // delete: false,
                // select: false,
                // update: false
            },

            pagination: {
                current_page: 1,
                total: 0,
                page_size: 3,
                page_sizes: [3, 9, 12, 24],
                layout: "total, sizes, prev, pager, next, jumper"
            },


            apis: {
                method: {
                    get_list: '$$selectArticle',
                    delete_data: '$$deleteArticle'
                },
                route: {
                    update_path: '/adv/article/edit'
                }
            }

        }
    },
    methods: {
        init() {
            this.getDataList();
        }
    },
    mounted() {
        this.init();
    },
    '$route' (to, from) {

    }
}