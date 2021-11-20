// pages/detail/detail.js
import {getDetail,getRecommend} from '../../service/detail.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getData:{},
    recommend:{},
    iid:""
  },
  //添加到购物车
  AddCart(){
    let cart =wx.getStorageSync('cart')||[]
    let index=cart.findIndex(v=>v.iid===this.data.iid)
    if(index===-1){
      this.data.getData.count=1
      this.data.getData.checked=true
      cart.push(this.data.getData)
    }else{
      cart[index].count++
    }
    wx.setStorageSync('cart', cart)
    wx.showToast({
      title: '加入购物成功',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let iid =options.iid
    getDetail(iid).then((res)=>{
      const getData =res.data
      const count='getData.count'
      this.setData({
        getData,
        [count]:0,
        iid
      })
    }),
    getRecommend().then(res=>{
      this.setData({
        recommend:res.data.data.list
      })
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