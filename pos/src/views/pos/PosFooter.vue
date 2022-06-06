<template>
  <div style="width: 100%; display: flex; align-items: center; padding: 0 10px">
    <div style="height: 100%; display: flex; align-items: center">
      <el-button type="success" size="large"> 去皮 </el-button>
      <el-button style="margin-left: 10px" type="success" size="large"> 置零 </el-button>
    </div>
    <div style="height: 100%; margin-left: 10px; display: flex; align-items: center">
      <div style="height: auto; margin: auto 6px; background-color: pink" v-for="(item, idx) in state.rightFooterMenu" :key="idx">
        <div></div>
        <div style="font-size: 13px; color: #fff">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="tsx" name="PosFooter">
import { reactive } from 'vue'
const state = reactive({
  rightFooterMenu: [
    {
      icon: '',
      title: '交接班',
    },
    {
      icon: '',
      title: '新增会员',
    },
    {
      icon: '',
      title: '销售单据',
    },
    {
      icon: '',
      title: '查库存',
    },
    {
      icon: '',
      title: '消息中心',
    },
    {
      icon: '',
      title: '全部菜单',
    },
  ],
})
</script>
