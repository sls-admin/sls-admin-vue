import {
  gbs
} from 'config/'

class Store {
  constructor () {
    this.store = window.localStorage
    this.prefix = gbs.db_prefix
  }

  set (key, value, fn) {
    try {
      value = JSON.stringify(value)
    } catch (e) {
    }

    this.store.setItem(this.prefix + key, value)

    fn && fn()
  }

  get (key, fn) {
    if (!key) {
      throw new Error('没有找到key。')
    }
    if (typeof key === 'object') {
      throw new Error('key不能是一个对象。')
    }
    var value = this.store.getItem(this.prefix + key)
    if (value !== null) {
      try {
        value = JSON.parse(value)
      } catch (e) {
      }
    }

    return value
  }

  remove (key) {
    this.store.removeItem(this.prefix + key)
  }
}

export default new Store()
