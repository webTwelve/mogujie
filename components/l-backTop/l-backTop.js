// components/l-backTop/l-backTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    handleBackTop(){
      wx.pageScrollTo({
        scrollTop:0
      })
    }
  }
})
