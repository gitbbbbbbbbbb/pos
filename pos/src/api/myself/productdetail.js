import request from '@/utils/request' //导入请求操作类

//商品规格新增/编辑接口
export function SpecificationAddOrEdit(form) {

  return request({
      url: 'api/ProductDetail/SpecificationAddOrEdit',//请求路径
      method: 'POST',//请求方法
      data: form,//请求的数据
  })
}


//商品规格查询接口
export function SpecificationQuery(SpecificationNameQuery) {

  return request({
      url: 'api/ProductDetail/SpecificationQuery',//请求路径
      method: 'post',//请求方法
      //请求的数据
	  //params: query
	  data:SpecificationNameQuery
  })
}


//商品规格查询接口
export function SpecificationDel(SpecificationId) {

  return request({
      url: 'api/ProductDetail/SpecificationDel/'+ SpecificationId,//请求路径
      method: 'delete',//请求方法
      //请求的数据
	  //params: query
	  // data:SpecificationId
  })
}

