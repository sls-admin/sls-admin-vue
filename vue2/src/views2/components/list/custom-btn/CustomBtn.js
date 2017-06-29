export default {
    name: 'custom-btn',
    components: {

    },
    data() {
        return {
            list: [],
            fields: [{
                key: 'name',
                label: '姓名'
            }, {
                key: 'address',
                label: '地址'
            }],


            btn_info:{
                update_default :{
                    width:300,

                    // all:false,//false:不显示按钮操作列

                    // default:false,//false:不显示默认所有按钮(查看，修改，删除)

                    // select:false,//false:不显示查看按钮
					// update:false,//false:不显示修改按钮
					// delete:false,//false:不显示删除按钮

                    //增加自定义按钮，默认会排到默认按钮的右边
                    list:[{
                        text:'同步',//按钮文本
                        type:'warning',//按钮类型，遵循elementUI的几种按钮类型
                        //如果不传按钮，默认会触发onClickBtn方法，传了则不会调用onClickBtn方法
                        fn:(opts)=>{
                            console.log('custom btn cb');
                            console.log(opts);
                        }
                    },{
						text:'刷新',
                        type:'primary'
					}],
                    // list_position:'before'//默认不传或者为after在默认按钮的后边,before则在前边。
                }
            },
        }
    },
	created(){
		for(let i=1;i<=3;i++){
			this.list.push({
				name:'赛冷思'+i,
				address:'北京上海第 '+i+" 区",
			});
		}
	},
    methods: {
		onClickBtn(opts){
	        console.log(opts);
        },
		onClickBtnAdd(opts){
			console.log(opts);
		},
		onClickBtnSelect(opts){
			console.log(opts);
		},
        init() {

        }
    },
    mounted() {
        this.init();
    },
    watch:{
        $route(){

        }
    }
}