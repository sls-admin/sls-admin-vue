/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 文章管理
 * @type {Object}
 */
export default [
  {
    name: '获取文章列表',
    method: 'selectArticle',
    path: '/Article/selectArticle',
    type: 'get'
  },
  {
    name: '添加/修改文章',
    method: 'saveArticle',
    path: '/Article/saveArticle',
    type: 'post'
  },

  {
    name: '删除文章',
    method: 'deleteArticle',
    path: '/Article/deleteArticle',
    type: 'post'
  },
  {
    name: '查看文章详情',
    method: 'findArticle',
    path: '/Article/findArticle',
    type: 'get'
  }
]
