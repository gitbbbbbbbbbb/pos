<template>
  <div style="width: 100%; display: flex; padding: 0 15px">
    <div style="display: flex; align-items: center"><House class="icons_class" style="margin-right: 6px"></House>生鲜收银台</div>
    <div style="margin-left: auto">
      {{ state.nowDate }}
      <Avatar class="icons_class" style="margin-left: 6px" />
      <span @click="logout" style="margin-left: 6px; cursor: pointer">退出登录</span>
    </div>
  </div>
</template>
<script setup name="PosRightFooter">
import { reactive, onMounted, getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'
import { House, Avatar } from '@element-plus/icons-vue'
const { proxy } = getCurrentInstance()
const store = useStore()
const state = reactive({
  nowDate: '',
})
onMounted(() => {
  setInterval(() => {
    state.nowDate = FormatDate(new Date())
  }, 1000 * 60)
})
const FormatDate = (cellValue) => {
  if (cellValue == null || cellValue == '') return ''
  var date = new Date(cellValue)
  var year = date.getFullYear()
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes
}
const logout = () => {
  ElMessageBox.confirm(proxy.$t('layout.logOutConfirm'), proxy.$t('common.tips'), {
    confirmButtonText: proxy.$t('common.ok'),
    cancelButtonText: proxy.$t('common.cancel'),
    type: 'warning',
  })
    .then(() => {
      store.dispatch('LogOut').then(() => {
        location.href = '/index'
      })
    })
    .catch(() => {})
}
// init dom
state.nowDate = FormatDate(new Date())
</script>
<style scoped lang="scss">
.icons_class {
  width: 1em;
  height: 1em;
}
</style>
