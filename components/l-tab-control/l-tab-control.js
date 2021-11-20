// components/l-tab-control/l-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currindex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hover(event){
      let index= event.currentTarget.dataset.index
      //获取当前传入的index
      this.setData({
        //设置index
        currindex:index
      })
      let data = this.data.currindex
      this.triggerEvent('tabClick',data,{})
      //子组件绑定父组件方法将对应下标传入父组件
    }
  }
})
