module.exports = {
	/**
	 * 检测富文本内容
	 * @param  {object} 			object 						富文本对象集
	 * @param  {object} 			object.editor_temp_data 	富文本对象集
	 * @param  {object} 			object.field_infos      	富文本对象说明
	 * @param  {boolean} 			object.type             	是否返回boolean值
	 * @return {object or boolean}                  			如果传了type返回Boolean，否则返回验证信息
	 */
	onCheckEditor({
		editor_temp_data,
		field_infos,
		type
	}) {
		var obj = {
			status: 200
		};
		for (var id in editor_temp_data) {
			if (!editor_temp_data[id].text) {
				if ((editor_temp_data[id].html.indexOf('<iframe') == -1 || editor_temp_data[id].html.indexOf('</iframe>') == -1) && (editor_temp_data[id].html.indexOf('<img') == -1)) {
					if (field_infos && field_infos[id]) {
						this.$message.error(field_infos[id].msg);
					}
					obj.status = 1;
					obj.id = id;
					break;
				}
			}
		}
		return type === true ? obj.status === 200 : obj;
	},

	onSubmit({
		data,
		editor_temp_data
	}) {
		if (editor_temp_data) {
			var check = this.onCheckEditor({
				editor_temp_data,
				field_infos: this.tips,
				type: true
			});
			if (check) {
				for (var f in this.tips) {
					data[this.tips[f].field] = editor_temp_data[f].html;
				}
				this.onSubmitFn && this.onSubmitFn(data);
			}
		} else {
			this.onSubmitFn && this.onSubmitFn(data);
		}
	}
};