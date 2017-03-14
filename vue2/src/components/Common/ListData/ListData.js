module.exports = {
    name: 'list-data',
    data() {
        return {
            batch_flag: true, //符合批量删除为true,否则为false
            batch_datas: [],
            batch_ids: [],

            list: this.List, //列表数组
            fields: this.FieldList, //字段数组
            selection: this.Selection, //是否需要批量选择
            btn_info: this.BtnInfo,

            pagination: this.Pagination,
        }
    },
    methods: {
        /**
         * 表格列表触发CheckBox的事件
         * @param  {array} val 当前选中的用户信息数组，每个元素是用户信息对象
         */
        onSelectionChange(val) {
            this.batch_datas = val;

            this.batch_ids = [];
            if (val.length) {
                this.batch_flag = false;
                for (var i = 0; i < val.length; i++) {
                    this.batch_ids.push(val[i].id);
                }
            } else {
                this.batch_flag = true;
            }

            /**
             * 改变CheckBox事件，第一个参数是ID数组，第二个参数二维数组，每个数组是选中的对象
             */
            this.$emit('onSelectionChange', this.batch_ids, this.batch_datas);
            this.$emit('onSelectionChangeObj', {
                ids: this.batch_ids,
                datas: this.batch_datas
            });
        },



        /**
         * 删除事件
         * @param  {object || boolean} user  当前信息对象或者为布尔值,为布尔值时，代表是批量删除
         * @param  {number} index 当前列表索引
         */
        onDelete(data, index) {
            var opts = {};
            if (data === true) {
                opts.batch_ids = this.batch_ids;
                opts.batch_datas = this.batch_datas;
            } else {
                opts.data = data;
                opts.index = index;
            }

            /**
             * 删除事件，参数为对象
             * 分两种情况，一种是单个删除，一种是批量删除，属性分别如下
             * 1：单个删除
             *     opts.data 当前要删除的数据对象
             *     opts.index 当前要删除的索引
             *     opts.list 当前列表数组
             * 2：批量删除
             *     opts.batch_ids 一维数组，需要删除的ID数组
             *     opts.batch_datas 二维数组，每个元素为对象(需要删除的数据对象)
             */
            this.$emit('onDelete', opts);
        },

        /**
         * 获取行信息事件
         * @param  {object} row   当前行对象
         * @param  {number} index 当前行索引
         * @param  {array} list  当前列表数组
         */
        onGetInfo(row, index, list, type) {
            this.$emit('onGetInfo', {
                row,
                index,
                list,
                type
            });
        },

        /**
         * 内置删除事件执行成功后，更新列表方法
         * 分两种情况，一种是批量删除，一种是单个删除
         * 1：单个删除
         *     row 当前需要删除行的索引
         * 2：批量删除
         *     row 一维数组，需要删除的ID数组
         */
        onUpdateList(row) {
            if (!Array.isArray(row)) {
                this.list.splice(row, 1);
            } else {
                this.list = this.list.filter(function(item, idx) {
                    return row.indexOf(item.id) === -1;
                });
            }
        },

        onChangeCurrentPage(page) {
            this.$emit('onChangeCurrentPage', page);
        },
        onChangePageSize(page_size) {
            this.$emit('onChangePageSize', page_size);
        }
    },

    mounted() {
        // console.log(this.list);
    },

    /**
     * 接收参数
     * @type {Object}
     */
    props: {
        List: {
            type: Array,
            required: true
        },
        FieldList: {
            type: Array,
            required: true
        },
        BtnInfo: {
            type: Object,
            default: {}
        },
        Selection: {
            type: Boolean,
            default: false
        },
        Pagination: {
            type: Object,
            default: {}
        }
    },


    /**
     * 监控参数
     * @type {Object}
     */
    watch: {
        List(v) {
            if (v) {
                this.list = v;
            }
        },
        FieldList(v) {
            if (v) {
                this.fields = v;
            }
        },
        Selection(v) {
            this.selection = v;
        },
        BtnInfo(v) {
            this.btn_info = v;
        },
        Pagination(v) {
            this.pagination = v;
        }
    }
}