// pages/category/category.js
import {getcategory,getSubcategory,getCategroyDetail} from '../../service/category.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    category:[],
    categoryData:[],
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData()
  },
  _getData(){
    getcategory().then((res)=>{
     const category=res.data.data.category.list
     const categoryData=[]
     //初始化右边的 内容为空数组
     for(let i =0;i<category.length;i++){
       categoryData[i]={
         subcategroy:[],
         categoryDetail:[]
       }
     }
     //初始化右边的 内容为空数组
     this.setData({
       category:res.data.data.category.list,
       categoryData
     })
     this._getSubgroy(0)
     // 获取默认的第0个的数据
     this._getCategoryDetail(0)
    })
    
  },
  _getSubgroy(currentIndex){  
    // 获取默认的第0个的数据
    const maitKey=this.data.category[currentIndex].maitKey
    //获取当前下标的subcategory数组
    let subcate=`categoryData[${currentIndex}].subcategroy`
    getSubcategory(maitKey).then((res)=>{
    // 给当前类别的 subcate设置值
    this.setData({
      [subcate]:res.data.data.list
    })
    })
  },
  _getCategoryDetail(currentIndex){
    // 获取默认的第0个的数据
    const miniWallkey =this.data.category[currentIndex].miniWallkey
    //获取当前下标的categoryDetail数组
    let categoryDetail=`categoryData.[${currentIndex}].categoryDetail`
    getCategroyDetail(miniWallkey).then((res)=>{
      this.setData({
        [categoryDetail]:res.data
    // 给当前类别的 subcate设置值
      })
    })
  },
  handleIndex(event){
    let index=event.detail.index
    this._getSubgroy(index)
    this._getCategoryDetail(index)
    this.setData({
      currentIndex:index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})