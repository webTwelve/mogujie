// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    cartList:{},
    allChecked:false,
    totalPrice:0,
    totalNum:0
  },
  handleAddress() {
          // 调取用户地址信息
          wx.chooseAddress({
            success: (result) => {
              wx.setStorageSync('address', result)
              this.setData({
                address:result
              })
            },
          })
  },
  handleRad(e){
    let iid = e.detail.iid
    // 获取点击的ID
    let cartList = this.data.cartList
    // 获取购物车的数据
    console.log(cartList)
    let index = cartList.findIndex(v=>iid===v.iid)
    // 找到点击的商品的下标
    cartList[index].checked=!cartList[index].checked


    //取反当前点击的下标
    
    wx.setStorageSync('cart', cartList)

    let allChecked=true
    let totalPrice=0
    let totalNum=0
    cartList.forEach(v=>{
      if(v.checked){
        totalPrice+=v.count*v.result.itemInfo.lowNowPrice
        totalNum+=v.count
      }else{
        allChecked=false
      }
    })
    allChecked=cartList.length?cartList.every(v=>v.checked):false
    this.setData({
      cartList,
      totalPrice,
      totalNum,
      allChecked
    })
    // 修改购物车的checked属性
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    const cartList=wx.getStorageSync('cart')||[]
    console.log(cartList)
    let allChecked=true
    let totalPrice=0
    let totalNum=0
    cartList.forEach(v=>{
      if(v.checked){
        totalPrice+=v.count*v.result.itemInfo.lowNowPrice
        totalNum+=v.count
      }else{
        allChecked=false
      }
    })
    allChecked=cartList.length?cartList.every(v=>v.checked):false

    this.setData({
      cartList,
      allChecked,
      totalPrice,
      totalNum
    })
   
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