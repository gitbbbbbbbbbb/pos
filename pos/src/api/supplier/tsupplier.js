import request from '@/utils/request'

/**
* 供应商档案表分页查询
* @param {查询条件} data
*/
export function listTSupplier(query) {
  return request({
    url: 'Supplier/TSupplier/list',
    method: 'get',
    params: query,
  })
}


/**
* 新增供应商档案表
* @param data
*/
export function addTSupplier(data) {
  return request({
    url: 'Supplier/TSupplier',
    method: 'post',
    data: data,
  })
}

/**
* 修改供应商档案表
* @param data
*/
export function updateTSupplier(data) {
  return request({
    url: 'Supplier/TSupplier',
    method: 'PUT',
    data: data,
  })
}

/**
* 获取供应商档案表详情
* @param {Id}
*/
export function getTSupplier(id) {
  return request({
    url: 'Supplier/TSupplier/' + id,
    method: 'get'
  })
}

/**
* 删除供应商档案表
* @param {主键} pid
*/
export function delTSupplier(pid) {
  return request({
    url: 'Supplier/TSupplier/' + pid,
    method: 'delete'
  })
}

// 导出供应商档案表
export function exportTSupplier(query) {
  return request({
    url: 'Supplier/TSupplier/export',
    method: 'get',
    params: query
  })
}




// 传参查询供应商
export function SupplierQuery(query) {
  return request({
    url: 'api/TSupplier/SelectSupplier',
    method: 'post',
   // params: query
   data: query
  })
}


// 新增供应商
export function AddSupplier(query) {
  return request({
    url: 'api/TSupplier/AddSupplier',
    method: 'post',
   // params: query
   data: query
  })
}


// 更新供应商
export function UpdateSupplier(query) {
  return request({
    url: 'api/TSupplier/UpdateSupplier',
    method: 'post',
   // params: query
   data: query
  })
}


// 删除供应商
export function DeleteSupplier(query) {
  return request({
    url: 'api/TSupplier/DeleteSupplier',
    method: 'post',
   // params: query
   data: query
  })
}


//导出供应商

export function ExportSupplier(parm) {
  return request({
    url: 'api/TSupplier/ExportSupplier',
    method: 'post',

   data: parm
  })
}
