// pages/cart/l-address/address.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    address:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    address(){
      this.triggerEvent('handleAddress')
    }
  }
})
