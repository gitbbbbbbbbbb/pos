import request from '@/utils/request'

/**
* 门店信息分页查询
* @param {查询条件} data
*/
export function listTEnterprise(query) {
  return request({
    url: 'Enterprise/TEnterprise/list',
    method: 'get',
    params: query,
  })
}



// 导出门店信息
export function exportTEnterprise(query) {
  return request({
    url: 'Enterprise/TEnterprise/export',
    method: 'get',
    params: query
  })
}


// 省份查询
export function ProvinceQuery(query) {
  return request({
    url: 'api/TEnterprise/SelectProvince',
    method: 'post',
   // params: query
   data: query
  })
}

// 省份新增
export function apiAddProvince(parm) {
  return request({
    url: 'api/TEnterprise/AddProvince',
    method: 'post',
   // params: query
   data: parm
  })
}
  // 省份更新
  export function apiUpdateProvince(parm) {
    return request({
      url: 'api/TEnterprise/UpdateProvince',
      method: 'post',
     // params: query
     data: parm
    })
}

 // 省份删除
  export function apiDelProvince(parm) {
    return request({
      url: 'api/TEnterprise/DelProvince',
      method: 'post',
     // params: query
     data: parm
    })
}



// 城市查询
export function CityQuery(query) {
  return request({
    url: 'api/TEnterprise/SelectCity',
    method: 'post',
   // params: query
   data: query
  })
}

// 城市新增
export function apiAddCity(parm) {
  return request({
    url: 'api/TEnterprise/AddCity',
    method: 'post',
   // params: query
   data: parm
  })
}

// 城市更新
export function apiUpdateCity(parm) {
  return request({
    url: 'api/TEnterprise/UpdateCity',
    method: 'post',
   // params: query
   data: parm
  })
}

// 城市删除
export function apiDeleteCity(parm) {
  return request({
    url: 'api/TEnterprise/DeleteCity',
    method: 'post',
   // params: query
   data: parm
  })
}

// 区县查询
export function AreaQuery(query) {
  return request({
    url: 'api/TEnterprise/SelectArea',
    method: 'post',
   // params: query
   data: query
  })
}

// 区县 新增
export function apiAddArea(parm) {
  return request({
    url: 'api/TEnterprise/AddArea',
    method: 'post',
   // params: query
   data: parm
  })
}

// 区县 更新
export function apiUpdateArea(parm) {
  return request({
    url: 'api/TEnterprise/UpdateArea',
    method: 'post',
   // params: query
   data: parm
  })
}

// 区县 删除
export function apiDeleteArea(parm) {
  return request({
    url: 'api/TEnterprise/DeleteArea',
    method: 'post',
   // params: query
   data: parm
  })
}



// 门店查询
export function EnterpriseQuery(query) {
  return request({
    url: 'api/TEnterprise/SelectEnterprise',
    method: 'post',
   // params: query
   data: query
  })
}


// 门店 新增
export function apiAddEnterprise(parm) {
  return request({
    url: 'api/TEnterprise/AddEnterprise',
    method: 'post',
   // params: query
   data: parm
  })
}


// 门店 更新
export function apiUpdateEnterprise(parm) {
  return request({
    url: 'api/TEnterprise/UpdateEnterprise',
    method: 'post',
   // params: query
   data: parm
  })
}


// 门店 删除
export function apiDeleteEnterprise(parm) {
  return request({
    url: 'api/TEnterprise/DeleteEnterprise',
    method: 'post',
   // params: query
   data: parm
  })
}


//导出省份


export function exportProvince(parm) {
  return request({
    url: 'api/TEnterprise/ExportProvince',
    method: 'post',

   data: parm
  })
}


//导出城市


export function exportCity(parm) {
  return request({
    url: 'api/TEnterprise/ExportCity',
    method: 'post',

   data: parm
  })
}


//导出区县

export function exportArea(parm) {
  return request({
    url: 'api/TEnterprise/ExportArea',
    method: 'post',

   data: parm
  })
}


//导出门店

export function exportEnterprise(parm) {
  return request({
    url: 'api/TEnterprise/ExportEnterprise',
    method: 'post',

   data: parm
  })
}
