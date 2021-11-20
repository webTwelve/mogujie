import {baseURL} from './config.js'

export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    wx.request({
     url:baseURL+options.url,
     data:options.data || {},
     method:options.method || 'get',
     success:function(res){
        wx.hideLoading({
          success: (res) => {},
        })
      resolve(res)
     },
     fail:function(err){
      reject(err)
     }
    })
  })
}