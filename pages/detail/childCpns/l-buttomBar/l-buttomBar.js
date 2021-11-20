// pages/detail/childCpns/l-buttomBar/l-buttomBar.js
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
    addCart(){
      console.log(1)
      this.triggerEvent('AddCart',{},{})
    }
  }
})
