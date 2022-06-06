import request from '@/utils/request'

/**
* 省份表分页查询
* @param {查询条件} data
*/
export function listTProvince(query) {
  return request({
    url: 'Enterprise/TProvince/list',
    method: 'get',
    params: query,
  })
}


/**
* 新增省份表
* @param data
*/
export function addTProvince(data) {
  return request({
    url: 'Enterprise/TProvince',
    method: 'post',
    data: data,
  })
}

/**
* 修改省份表
* @param data
*/
export function updateTProvince(data) {
  return request({
    url: 'Enterprise/TProvince',
    method: 'PUT',
    data: data,
  })
}

/**
* 获取省份表详情
* @param {Id}
*/
export function getTProvince(id) {
  return request({
    url: 'Enterprise/TProvince/' + id,
    method: 'get'
  })
}

/**
* 删除省份表
* @param {主键} pid
*/
export function delTProvince(pid) {
  return request({
    url: 'Enterprise/TProvince/' + pid,
    method: 'delete'
  })
}

// 导出省份表
export function exportTProvince(query) {
  return request({
    url: 'Enterprise/TProvince/export',
    method: 'get',
    params: query
  })
}

