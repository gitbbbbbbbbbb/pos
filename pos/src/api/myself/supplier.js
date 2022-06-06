import request from '@/utils/request' //导入请求操作类

//供应商新增接口
export function supplieradd(form) {

  return request({
      url: 'api/Supplier/SupplierAdd',//请求路径
      method: 'POST',//请求方法
      data: form,//请求的数据
  })
}
