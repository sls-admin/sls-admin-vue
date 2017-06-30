/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 第三方接入
 * @type {Object}
 */
export default [
    {
        name:'上传七牛图片',
        method:'uploadQiniuFile',
        path:'',
        type:'post',
    },
    {
        name:'获取七牛上传图片token',
        method:'getQiniuToken',
        path:'/Open/getQiniuToken',
        type:'get',
    },

    {
        name:'获取七牛图片列表',
        method:'getQiniuFileList',
        path:'/Open/getQiniuFileList',
        type:'get',
    },
    {
        name:'删除七牛文件',
        method:'deleteQiniuFile',
        path:'/Open/deleteQiniuFile',
        type:'post',
    }
];