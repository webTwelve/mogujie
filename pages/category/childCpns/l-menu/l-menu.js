// pages/category/childCpns/l-menu/l-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    category:{
      type:Array,
      value:[]
    },
    currentIndex:{
      type:Number,
      value:0
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
    handleIndex(event){
      let index=event.currentTarget.dataset.index
      this.triggerEvent('getIndex',{index})
    }
  }
})
