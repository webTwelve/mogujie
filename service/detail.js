import request from './network.js'
export function getDetail(iid){
  return request({
    url:"/detail",
    data:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:"/recommend"
  })
}