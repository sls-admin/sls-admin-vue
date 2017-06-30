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
                width:'160',
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
		/**
         * 获取文章列表
		 */
		onGetList(){
            this.$$api_article_selectArticle({
                fn:data=>{
                    console.log(data);
                    this.list=data.list.data;
                }
            });
        },


		/**
         * 点击删除按钮
		 */
		onClickBtnDelete(opts){
            this.$confirm('删除后不可恢复','确认删除？').then(()=>{
				this.$$api_article_deleteArticle({
					data:{
						id: opts.data.id
					},
					fn:data=>{
						this.onGetList();
					}
				});
            });
        },


        /**
         * 添加文章
		 */
		onClickBtnAdd(){
            this.$router.push('/adv/article/edit');
        },


		/**
         * 修改按钮
		 * @param opts
		 */
		onClickBtnUpdate(opts){
            this.$router.push({
                path:'/adv/article/edit',
                query:{
                    id:opts.data.id
                }
            });
        },


		/**
         * 初始化
		 */
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