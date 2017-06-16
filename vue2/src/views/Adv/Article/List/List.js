export default {
    name: 'adv-article-list',
    components: {

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
            }]

        }
    },
    methods: {
        onGetList(){
            this.$$api_article_selectArticle({
                fn:data=>{
                    console.log(data);
                    this.list=data.list.data;
                }
            });
        },

        init() {
            this.onGetList();
        }
    },
    mounted() {
        this.init();
    },
    watch:{
		$route (to, from) {
            this.init();
		}
    }

}