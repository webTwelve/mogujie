// pages/index/childCpns/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLoad(){
      if(!this.data.isLoad){
        //如果isLoad是false的执行
        //引入有4个图片所以要执行4次 这样做判断是让他只执行一次
        this.data.isLoad=true
        this.triggerEvent('imgLoad')
      }
    }
  }
})
