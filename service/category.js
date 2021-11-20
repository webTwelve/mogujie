import request from './network.js'

export function getcategory(){
  return request({
    url:"/category"
  })
}

export function getSubcategory(maitKey){
  return request({
    url:"/subcategory",
    data:{
      maitKey:maitKey
    }
  })
}

export function getCategroyDetail(miniWallkey){
  return request({
    url:"/subcategory/detail",
    data:{
      miniWallkey
    }
  })
}