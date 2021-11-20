// components/l-goods-item/l-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 接收goods传入的数据,用于渲染
    item:{
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
    toDetail(event){
      let iid=event.currentTarget.dataset.iid
      console.log(iid)
      wx.navigateTo({
        url: '/pages/detail/detail?iid='+iid,
      })
    }
  }
})
