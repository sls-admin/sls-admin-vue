module.exports = {
	/**
	 * 更新地区数据
	 */
	onUpdateArea(fn) {
		var self = this;

		function unlimitedForLayer(cate, pid) {
			var arr = [];
			for (var i = 0; i < cate.length; i++) {
				self.$delete(cate[i], 'children');
				if (cate[i].parentId == pid) {
					var child = unlimitedForLayer(cate, cate[i].id);
					if (child.length > 0) {
						cate[i]['childs'] = child;
					}
					arr.push(cate[i]);
				}
			}
			return arr;
		}
		this.$$getAreaList({}, data => {
			var citys = unlimitedForLayer(data, 0);
			this.$store.dispatch('update_citys',citys).then(()=>{
				fn && fn();
			});
		});
	},
};