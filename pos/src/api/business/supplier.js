import request from '@/utils/request'

/**
* 供应商管理2分页查询
* @param {查询条件} data
*/
export function listSupplier(query) {
  return request({
    url: 'business/Supplier/list',
    method: 'get',
    params: query,
  })
}


/**
* 新增供应商管理2
* @param data
*/
export function addSupplier(data) {
  return request({
    url: 'business/Supplier',
    method: 'post',
    data: data,
  })
}

/**
* 修改供应商管理2
* @param data
*/
export function updateSupplier(data) {
  return request({
    url: 'business/Supplier',
    method: 'PUT',
    data: data,
  })
}

/**
* 获取供应商管理2详情
* @param {Id}
*/
export function getSupplier(id) {
  return request({
    url: 'business/Supplier/' + id,
    method: 'get'
  })
}

/**
* 删除供应商管理2
* @param {主键} pid
*/
export function delSupplier(pid) {
  return request({
    url: 'business/Supplier/' + pid,
    method: 'delete'
  })
}

// 导出供应商管理2
export function exportSupplier(query) {
  return request({
    url: 'business/Supplier/export',
    method: 'get',
    params: query
  })
}

