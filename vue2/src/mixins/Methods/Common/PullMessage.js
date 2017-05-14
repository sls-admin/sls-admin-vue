/**
 * Created by sailengsi on 2017/5/12.
 */

module.exports = {
	/**
	 * 获取消息列表
	 */
	onPullMessage(fn) {
		this.$$getPushMessage({},data=>{
			console.log('pull message');
			console.log(data);
			var types={
				//所有的消息类型http://showdoc.microfastup.com/index.php?s=/1&page_id=193
				type:[0,1,2,3,11,12,13,14,15,16,17,21,22,23,24,25,26,27,28,100],
				//向导的消息类型
				apply_guide:['0','1'],
				//线路的消息类型
				line:['2','3'],
				//游客消息类型
				order_user:['11','12','13','14','15','16','17'],
				//向导消息类型
				order_guide:['21','22','23','24','25','26','27','28'],
				//系统消息类型
				system:['100'],
			};
			
			var status={
				flag:false,
				apply_guide_flag:false,
				line_flag:false,
				order_user_flag:false,
				order_guide_flag:false,
				system_flag:false
			};
			
			if(data){
		
				if(!data.totalNum){
					status.flag=false;
					status.apply_guide_flag=false;
					status.line_flag=false;
					status.order_user_flag=false;
					status.order_guide_flag=false;
					status.system_flag=false;
				}else{
					
					status.flag=true;
					
					//遍历对象，通过各种类型查找key。效率比较高。
					for(var t in data){
						//申请向导消息
						if(types.apply_guide.indexOf(t)!==-1){
							status.apply_guide_flag=true;
						}else{
							status.apply_guide_flag=false;
						}
						
						//线路消息
						if(types.line.indexOf(t)!==-1){
							status.line_flag_flag=true;
						}else{
							status.line_flag_flag=false;
						}
						
						//游客订单消息
						if(types.order_user.indexOf(t)!==-1){
							status.order_user_flag=true;
						}else{
							status.order_user_flag=false;
						}
						
						//向导订单消息
						if(types.order_guide.indexOf(t)!==-1){
							status.order_guide_flag=true;
						}else{
							status.order_guide_flag=false;
						}
						
						//系统设置
						if(types.system.indexOf(t)!==-1){
							status.system_flag=true;
						}else{
							status.system_flag=false;
						}
					}
					
					console.log(status);
					
					this.$store.dispatch('update_message',status);
				}
			}
			
			
		});
	},
};
