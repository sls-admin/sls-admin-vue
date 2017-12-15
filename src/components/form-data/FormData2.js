// import {wangEditor} from 'libs/wangeditor/wangEditor.js';

import wangEditor from 'wangeditor';
console.log(wangEditor);

export default {
	name   : 'list',
	data() {
		return {
			checkall_temp: '_checkall_temp',

			fields     : this.FieldList,
			editor     : this.Editor || {},
			submit_data: this.DefaultValue,
			rules      : this.Rules || {},

			setting: this.Setting,
			primary_key: this.PrimaryKey,
			wangeditor_update:[],


			/**
			 * 富文本编辑器信息
			 * @type {Object}
			 */
			wangEditor: {
				//存富文本实例的对象，支持多个
				//key为富文本对象ID，value为实例
				editor: {},
				//默认为单个编辑器,如果为多个，此值为true，因为多个编辑器时，地图菜单不可用
				many  : false,
				has   : false,
				//默认显示菜单，支持自定义
				bar   : [
					'head',  // 标题
					'bold',  // 粗体
					'italic',  // 斜体
					'underline',  // 下划线
					'strikeThrough',  // 删除线
					'foreColor',  // 文字颜色
					'backColor',  // 背景颜色
					'link',  // 插入链接
					'list',  // 列表
					'justify',  // 对齐方式
					'quote',  // 引用
					'emoticon',  // 表情
					'image',  // 插入图片
					'table',  // 表格
					'video',  // 插入视频
					'code',  // 插入代码
					'undo',  // 撤销
					'redo'  // 重复
				],
				temp  : {},
			},
		}
	},
	methods: {
		/**
		 * 初始化编辑器
		 * @param  {string} id     编辑器ID属性
		 * @param  {object} config 初始化配置
		 * @return {object}        所有编辑器所在对象，属性已ID为key
		 */
		initEditor(id, config, key) {
			if (id) {
				this.wangEditor.editor[id] = new wangEditor('#' + id);
				this.wangEditor.temp[id]   = {
					html: '',
					text: ''
				};
			}

			// this.eventEditor(id).createEditor(id);

			this.configEditor(id, config, key).eventEditor(id, key).createEditor(id, key);
		},


		/**
		 * 配置编辑器参数
		 * @param  {string} id     编辑器ID
		 * @param  {object} config 编辑器配置信息
		 */
		configEditor(id, config) {
			if (id && config) {
				this.wangEditor.editor[id].customConfig.uploadFileName   = config.name || this.editor.name || 'sls-admin';
				this.wangEditor.editor[id].customConfig.uploadImgServer  = config.url || this.editor.url || '';
				this.wangEditor.editor[id].customConfig.uploadImgParams  = config.params || this.editor.params || {};
				this.wangEditor.editor[id].customConfig.uploadImgHeaders = config.headers || this.editor.headers || {};


				/**
				 * 显示的菜单，分四种情况
				 * 1-只传显示的菜单，直接赋值
				 * 2-只传隐藏的菜单，过滤不需要显示的
				 * 3-显示隐藏都传了,显示优先级高于隐藏优先级
				 * 4-啥都不传，取默认全部显示
				 * @type {object}
				 */
				/*if (Array.isArray(config.show_bar) && config.show_bar.length) {
				 var bar = config.show_bar;
				 } else if (Array.isArray(config.hide_bar) && config.hide_bar.length) {
				 var bar = this.wangEditor.bar.filter((item) => {
				 return config.hide_bar.indexOf(item) === -1;
				 });
				 } else if (Array.isArray(this.editor.show_bar) && this.editor.show_bar.length) {
				 var bar = this.editor.show_bar;
				 } else if (Array.isArray(this.editor.hide_bar) && this.editor.hide_bar.length) {
				 var bar = this.wangEditor.bar.filter((item) => {
				 return this.editor.hide_bar.indexOf(item) === -1;
				 });
				 } else {
				 var bar = this.wangEditor.bar;
				 }*/

				// if (this.wangEditor.many === true && bar.indexOf('location') !== -1) {
				// 	var bar = bar.splice(bar.indexOf('location'), 1);
				// }

				// this.wangEditor.editor[id].config.menus = bar;
			}

			return this;
		},


		/**
		 * 编辑器常用事件
		 * @param  {string} id 编辑器ID
		 */
		eventEditor(id) {
			this.wangEditor.editor[id].customConfig.uploadImgHooks = {
				error       : function(xhr, editor) {
					console.log('error');
					this.$message.error('上传错误信息：上传错误！');
				},
				timeout     : function(xhr, editor) {
					console.log('timeout');
					this.$message.error('上传错误信息：网络超时！');
				},
				customInsert: function(insertImg, data, editor) {
					if (data.status === 200) {
						var url = data.data.fileinfo.getSaveName;
						insertImg(url);
					} else {
						//这里可以判断到token无效时，可以退出登录，让用户重新登录
						if (data.status === 404) {
							this.$message.error('上传错误信息：token无效！');
						} else {
							this.$message.error('上传错误信息：' + data.msg);
						}
					}
				}
			};

			this.wangEditor.editor[id].customConfig.onchange = () => {
				var text = this.wangEditor.editor[id].txt.text().replace(/(^\s*)|(\s*$)/g, ""),
					html = this.wangEditor.editor[id].txt.html();

				this.wangEditor.temp[id].html = html;
				this.wangEditor.temp[id].text = text;

				this.$emit('onEditorChange', {
					id,
					data: {
						html,
						text
					}
				});
			};
			return this;
		},


		/**
		 * 创建编辑器
		 * @param  {string} id 编辑器ID
		 */
		createEditor(id, key) {
			this.wangEditor.editor[id].create();
			this.wangeditor_update.push({
				id,key
			});
		},


		/**
		 * 处理全选全部选
		 * @param  {object} field 字段对象
		 */
		initCheckall(field) {
			var temp            = {};
			temp.text           = field.checkall.text;
			temp.value          = field.checkall.value;
			temp.indeterminate  = field.checkall.indeterminate;
			temp.checkbox_list  = field.value.list;
			temp.checkbox_value = field.value.default;
			this.$set(this.submit_data, field.key + this.checkall_temp, temp);
		},


		/**
		 * 日期时间空间增加改变回掉
		 * @param  {array} fields 字段数组
		 * @param  {number} i      当前对象索引
		 */
		onDateTimeChange(fields, i, type) {
			//如果没有传改变事件回调，需要补回调
			if (!fields[i].change || typeof fields[i].change !== 'function') {
				this.$set(fields[i], 'change', v => {
					switch (type) {
						case 'range':
							var temp                        = v.split(' - ');
							this.submit_data[fields[i].key] = temp;
							break;
						default:
							this.submit_data[fields[i].key] = v;
					}
				});
			}
		},


		/**
		 * 日期时间设置一些参数
		 * @param  {array} fields 字段数组
		 * @param  {number} i      [当前对象索引]
		 */
		onDateOptions(fields, i, type) {
			var field = fields[i];

			if (!field.options) {
				var options      = {},

					//默认快捷方式
					shortcuts    = [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}],
					//默认禁止今天以前的日期
					disabledDate = function(time) {
						return time.getTime() < Date.now() - 8.64e7;
					};


				if (field.shortcuts === true) {
					options.shortcuts = shortcuts;
				}
				if (field.disabledDate === true) {
					options.disabledDate = disabledDate;
				}

				if (field.disabledDate && field.disabledDate.constructor === Function) {
					options.disabledDate = field.disabledDate;
				}
				if (field.shortcuts && field.shortcuts.constructor === Array) {
					options.shortcuts = field.shortcuts;
				}


				this.$set(fields[i], 'options', options);
			}
		},


		/**
		 * 设置时间参数
		 * @param fields    字段数组
		 * @param i            当前索引
		 * @param type        类型
		 */
		onTimeOptions(fields, i, type) {
			var field = fields[i];

			if (!field.options) {
				var options = {};


				this.$set(fields[i], 'options', options);
			}
		},


		/**
		 * 处理日期
		 * @param  {array} fields 字段数组
		 * @param  {number} i      当前日期对象的索引
		 */
		initDate(fields, i, type) {
			//设置回调
			this.onDateTimeChange(fields, i, type);

			//设置日期参数
			this.onDateOptions(fields, i, type);
		},


		/**
		 * 处理时间
		 * @param  {array} fields 字段数组
		 * @param  {number} i      当前日期对象的索引
		 */
		initTime(fields, i, type) {
			//设置回调
			this.onDateTimeChange(fields, i, type);

			//设置日期参数
			this.onTimeOptions(fields, i, type);
		},


		initYear(fields, i) {
			//设置回调
			this.onDateTimeChange(fields, i);
		},

		initMonth(fields, i) {
			//设置回调
			this.onDateTimeChange(fields, i);
		},

		initWeek(fields, i) {
			//设置回调
			this.onDateTimeChange(fields, i);

			if (!fields[i].format) {
				this.$set(fields[i], 'format', 'yyyy 第 WW 周');
			}
		},


		/**
		 * 从字段列表中提取出来表单字段
		 * @return {object} [表单需要的字段]
		 */
		deepObj() {

			if (this.fields) {
				var fields = this.fields,
					k      = 0,
					update = this.submit_data.id ? true : false;
				for (var i = 0; i < fields.length; i++) {
					var field = fields[i];

					if (field.value && field.value.constructor === Object) {
						if (field.checkall && typeof field.checkall === 'object') {
							this.initCheckall(field);
						} else {
							// this.$set(this.submit_data, field.key, field.value.default);
						}
					} else {
						// this.$set(this.submit_data, field.key, field.value);
					}



					if (field.type) {
						switch (field.type) {
							case 'editor':
								k++;
								this.initEditor(field.id, field.config || {}, field.key);
								if (k == 2) {
									this.wangEditor.many = true;
								}
								if (k == 1) {
									this.wangEditor.has = true;
								}
								break;

							case 'date':
								this.initDate(fields, i);
								break;

							case 'daterange':
								this.initDate(fields, i, 'range');
								break;

							case 'year':
								this.initYear(fields, i);
								break;

							case 'month':
								this.initMonth(fields, i);
								break;

							case 'week':
								this.initWeek(fields, i);
								break;

							case 'time':
								this.initTime(fields, i);
								break;

							case 'datetime':
								this.initDate(fields, i);
								break;

							case 'datetimerange':
								this.initDate(fields, i, 'range');
								break;

						}
					}
				}

				// console.log(this.submit_data);

			}
		},


		/**
		 * 表单提交事件
		 */
		onSubmit(ref) {

			var data = {
				data: this.submit_data,
			};
			if (this.wangEditor.has === true) {
				data.editor_temp_data = this.wangEditor.temp;
			}


			if (this.rules) {
				this.$refs[ref].validate((valid) => {
					if (valid) {
						this.$emit('onSubmit', data);
					}
				});
			} else {
				this.$emit('onSubmit', data);
			}
		},


		/**
		 * checkbox改变时触发
		 * @param  {string} key 当前元素的key
		 */
		onCheckboxChange(key) {
			var checkall_temp = this.submit_data[key + this.checkall_temp];

			if (checkall_temp.checkbox_value.length > 0 && checkall_temp.checkbox_value.length < checkall_temp.checkbox_list.length) {
				checkall_temp.indeterminate = true;
			} else {
				checkall_temp.indeterminate = false;
			}

			checkall_temp.value = checkall_temp.checkbox_value.length === checkall_temp.checkbox_list.length;
		},


		/**
		 * checkallbox改变时触发
		 * @param  {string} key 当前元素的key
		 */
		onCheckallChange(key) {
			var checkall_temp           = this.submit_data[key + this.checkall_temp];
			checkall_temp.indeterminate = false;

			var value = [];
			if (checkall_temp.value == true) {
				for (var i = 0; i < checkall_temp.checkbox_list.length; i++) {
					value.push(checkall_temp.checkbox_list[i].value);
				}
			}

			checkall_temp.checkbox_value = value;
		},


		onCascaderItemChange(value) {
			// console.log(value);
		},


		onChangeDateTime(v) {
			console.log(v + 'formdata');
		}
	},


	created() {
		// this.deepObj();
		if(this.fields){
			this.fields.forEach(item=>{
				if(!item.change){
					item.change=(function(){
						return function() {
							console.log('fdf');
						}
					})();
				}
			});
		}
	},


	/**
	 * ready
	 */
	mounted() {
		this.deepObj();
	},


	/**
	 * 接收参数
	 * @type {Object}
	 */
	props: {
		FieldList   : {
			type    : Array,
			required: true,
			default(){
				return [];
			}
		},
		Editor      : {
			type: Object,
			default(){
				return {};
			}
		},
		Rules       : {
			type: Object,
			default(){
				return {};
			}
		},
		DefaultValue: {
			type: Object,
			default(){
				return {};
			}
		},
		Setting     : {
			type: Object,
			default(){
				return {};
			}
		},
		PrimaryKey  : {
			type   : String,
			default: 'id'
		}
	},


	/**
	 * 监控参数
	 * @type {Object}
	 */
	watch: {
		FieldList   : {
			deep: true,
			handler(v){
				if (v) {
					this.fields = v;
				}
			}
		},
		submit_data: {
			deep: true,
			handler(v){
				if (v) {
					this.wangeditor_update.forEach(item=>{
						this.wangEditor.editor[item.id].txt.html(v[item.key]);
					});
				}
			}
		},
		DefaultValue(v){
			this.submit_data=v;
		},
		wangeditor_update(v){

		},
		Setting(v){
			this.setting = v;
		},
		PrimaryKey(v){
			this.primary_key = v;
		}
	}
}