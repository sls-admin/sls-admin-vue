/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 订单管理
 * @type {Object}
 */
export default [
  {
    name: '统计订单',
    method: 'statisOrder',
    path: '/Order/statisOrder',
    type: 'get'
  },
  {
    name: '获取订单列表',
    method: 'selectOrder',
    path: '/Order/selectOrder',
    type: 'get'
  },

  {
    name: '添加订单',
    method: 'saveOrder',
    path: '/Order/saveOrder',
    type: 'post'
  }
]
