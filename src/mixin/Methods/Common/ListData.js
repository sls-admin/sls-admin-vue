module.exports = {
	getDataList() {
		var query = this.$route.query;
		var params = Object.assign({}, {
			page_size: this.pagination.page_size,
			page: this.pagination.current_page
		}, query);


		this[this.apis.method.get_list](params, (data) => {
			this.list = data.list.data;
			this.pagination.total = data.list.total;
		});
	},

	onChangeCurrentPage(page) {
		this.setRoutePath({
			page
		});
	},
	onChangePageSize(page_size) {
		this.setRoutePath({
			page_size
		});
	},

	setRoutePath(q) {
		var query = this.$route.query;
		var params = Object.assign({}, query, q);
		var path = this.$route.path;

		this.$router.push({
			path,
			query: params
		});

		this.getDataList();

	},

	/**
	 * 点击按钮通用事件
	 * @param  {object} opts 返回参数
	 */
	onGetInfo(opts) {
		console.log('on-get-info');
		console.log(opts);
		switch (opts.type) {
			case 'select':
				console.log('select');
				break;
			case 'update':
				this.$router.push({
					path: this.apis.route.update_path,
					query: {
						id: opts.row.id
					}
				});
				break;
		}
	},


	/**
	 * 点击删除按钮事件
	 * @param  {object} opts 返回参数
	 */
	onDelete(opts) {
		console.log('on-delete');
		console.log(opts);


		if (opts.index >= 0) {
			var batch = false;
			var id = opts.data.id;
		} else {
			var batch = true;
			var id = opts.batch_ids.join(',');
		}

		this[this.apis.method.delete_data]({
			id: id
		}, data => {
			if (batch === true) {
				this.list = this.list.filter((item) => {
					return opts.batch_ids.indexOf(item.id) === -1;
				});
			} else {
				this.list.splice(opts.index, 1);
			}
		});
	},

	onSelectionChange(ids, datas) {
		console.log('on-selection-change');
	},

	onSelectionChangeObj({
		ids,
		datas
	}) {
		console.log('on-selection-change-obj');
	},
};