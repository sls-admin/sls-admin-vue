/**
 * 用户模块
 * @type {Object}
 */
export default [
  {
    name: '测试restful方式API',
    method: 'getArticle',
    path: function (pathParams) {
      return `/article/${pathParams.id}/`
    },
    type: 'post'
  }
]
