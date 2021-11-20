import request from './network.js'

export function getmultidata(){
  return request({
    url:"/home/multidata"
  })
}

export function getControl(type,page){
  return request({
    url:"/home/data",
    data:{
      type,
      page
    }
  })
}