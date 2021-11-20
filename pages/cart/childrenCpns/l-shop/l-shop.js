// pages/cart/childrenCpns/l-shop/l-shop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartList:{
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
   rad(e){
     let iid=e.currentTarget.dataset.id
     this.triggerEvent('handleRad',{iid})
   }
    
  }
})
