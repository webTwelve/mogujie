import {getmultidata,getControl} from '../../service/index.js'
const list=['pop','new','sell']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommend:[],
    list:['流行','新款','精选'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    //作为标识,当tabControl点击后改变对应的值
    currentType:'pop',
    //返回顶部是否显示
    isShow:false,
    isFix:false,
    controlTop:0
  },
  handleClick(event){
    this.setData({
      // 点击时改变相应的currentType
      currentType:list[event.detail]
    })
  },
  handleLoad(){
    //获取某个元素距离上面的距离
    //引入这个在页面显示时就会执行 所以会造成图片没加载完时 就执行  所以需要当上面的图片记载完之后再执行
    this.createSelectorQuery().select('#control').boundingClientRect(rect=>{
     this.data.controlTop=rect.top
    }).exec()
  },
  _getmultidata(){
    getmultidata().then((res)=>{
      const banners =res.data.data.banner.list
      const recommend =res.data.data.recommend.list
      this.setData({
        banners,
        recommend
      })
    })
  },
  _getControl(type){
    const page =this.data.goods[type].page+1
    //每次请求时页码数加1
    const oldlist=this.data.goods[type].list
    //获取当前类型的数组
    const typekey=`goods.${type}.list`
    //获取当前类型的page
    const pagekey=`goods.${type}.page`
    //定义一个变量存入当前请求的类型
    getControl(type,page).then((res)=>{
      const list =res.data.data.list
      //获取请求到的数据
      oldlist.push(...list)
        //添加到数组中用于渲染
        //使用...可以直接把原数组拆开后push到数组中
        //不在会造成数组中添加多个数组
      this.setData({
        //将数据更新
        [typekey]:oldlist,
        //将页码数更新
        [pagekey]:page
          //如果键名是变量的话 那么需要加上[]
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getmultidata()
    this._getControl('pop')
    this._getControl('new')
    this._getControl('sell')
    //传入参数请求不同的数据
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //滑到底加载新数据
    this._getControl(this.data.currentType)
  },
  onPageScroll(options){
    let flag=options.scrollTop>1500
    // 如果当前的flag不等于isShow就说明到达显示距离 则显示 否则不显示
    //因为官方不推荐在滚动时频繁 调用setData  所以当isShow不等于flag时在调用 setData
    if(this.data.isShow!=flag){
      this.setData({
        isShow:flag
      })
    }
    let flag2=options.scrollTop>=this.data.controlTop

    if(this.data.isFix!=flag2){
      this.setData({
        isFix:flag2
      })
    }
  },
  //分享
  onShareAppMessage: function () {

  }
})