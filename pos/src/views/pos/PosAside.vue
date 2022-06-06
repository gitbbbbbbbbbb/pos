<template>
  <div>
    <el-container>
      <el-main class="leftMain">left Main</el-main>
      <el-footer class="leftFooter">left Footer</el-footer>
    </el-container>
  </div>
</template>
<script setup lang="tsx" name="PosAside"></script>
<style scoped lang="scss">
.leftMain {
  background: #fff;
  text-align: center;
  padding: 0;
  height: calc(100vh - 110px);
}
.leftFooter {
  background-color: #ff5555;
  color: #fff;
  width: 100%;
  padding: 0;
  text-align: center;
  height: 70px;
  line-height: 70px;
}
</style>
