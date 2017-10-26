/**
 * Created by sailengsi on 2017/5/11.
 */

/**
 * 把字符串驼峰转用特殊符号隔开
 * @param string
 * @returns {string}
 * @constructor
 */
export default function (string, type) {
  var arr = string.split('')
  var tempArr = string.split('')
  type = type || '-'
  var name = ''

  for (var i = 0; i < tempArr.length; i++) {
    if (/[A-Z]/.test(tempArr[i]) && i > 0) {
      arr.splice(i, 0, type)
    }
  }
  name = arr.join('')
  return name.toLowerCase()
}
