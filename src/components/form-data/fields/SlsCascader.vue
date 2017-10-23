<template>
  <div>
    <el-cascader
      v-model="submit_data[data.key]"
      :placeholder="data.desc"
      @change="onChange"
      @active-item-change="onActiveItemChange"
      v-bind="cascader_attrs"
      :options="data.options"></el-cascader>
  </div>
</template>
<script>
  import Common from './js/Common'

  var Js = Common('sls-cascader')
  Js.mixins = [{
    data () {
      return {}
    },
    computed: {
      cascader_attrs () {
        return this.Data.cascader_attrs || {}
      }
    },
    methods: {
      /**
       * 根据数组的长度，来决定需要递归几次，最终取出需要的结果，我曹，没法解释，解释不清的玩意。
       * @param  {array}  areas 地区列表，无线分类结构
       * @param  {array}  temps 一维数组,如果只有一个，代表取顶级;如果两个，取顶级的子级；如果三个，顶级的子级的子级....以此类推
       * @param  {number} k     递归次数，当这个值等于temps的长度时，就代表结束了
       * @return {string}       地区名称
       */
      onDeepGetCityName (list, temps, k) {
        for (var i = 0; i < list.length; i++) {
          if (list[i].id + '' === temps[k] + '') {
            if (k < temps.length - 1) {
              k = k + 1
              this.temp_field_obj[this.data.key].push(list[i].city)
              this.onDeepGetCityName(list[i].children, temps, k)
            } else {
              // console.log(list[i]);
              this.temp_field_obj[this.data.key].push(list[i].city)
              return
            }
          }
        }
      },

      /**
       * 最后一级选择完后触发
       * @param v 选中的值数组，根据这个数组取出对应的文本
       */
      onChange (v) {
        this.temp_field_obj[this.data.key] = []
        this.onDeepGetCityName(this.data.options, v, 0)
        this.submit_info[this.data.key] = this.temp_field_obj[this.data.key]

        this.events.change && this.events.change({value: v, info: this.submit_info[this.data.key]})
      },

      /**
       * 每选择一项时就触发这个
       * 场景：当选择的条件不允许继续选择时，可以使用这个事件
       * @param v 选中的值数组，根据这个数组取出对应的文本
       */
      onActiveItemChange (v) {
        this.temp_field_obj[this.data.key] = []
        this.onDeepGetCityName(this.data.options, v, 0)
        this.submit_info[this.data.key] = this.temp_field_obj[this.data.key]
        this.events['active-item-change'] && this.events['active-item-change']({
          value: v,
          info: this.submit_info[this.data.key]
        })
      }
    },
    created () {
      if (!this.submit_data[this.data.key] || !Array.isArray(this.submit_data[this.data.key])) {
        this.submit_data[this.data.key] = []
      }
      this.temp_field_obj[this.data.key] = []
    },
    mounted () {

    }
  }]
  export default Js
</script>
