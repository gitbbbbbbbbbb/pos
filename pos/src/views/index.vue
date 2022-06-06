<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <PosHeader />
      </el-header>
      <el-container>
        <el-aside width="280px">
          <PosAside />
        </el-aside>
        <el-container>
          <el-main class="rightMain">
            <RightMain />
          </el-main>
          <el-footer class="rightFooter">
            <RightFooter />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup name="home">
import { reactive } from 'vue'
import PosHeader from '@/views/pos/PosHeader'
import PosAside from '@/views/pos/PosAside'
import RightMain from '@/views/pos/PosMain'
import RightFooter from '@/views/pos/PosFooter'
</script>
<style scoped lang="scss">
.el-header,
.el-footer {
  color: #fff;
  width: 100%;
  padding: 0;
  text-align: center;
  height: 70px;
  line-height: 70px;
}
.el-header {
  background-color: #0099cc;
  height: 40px;
  line-height: 40px;
}

.rightMain {
  background: #fff;
  text-align: center;
  padding: 0;
  height: calc(100vh - 110px);
}
.rightFooter {
  background-color: #0099cc;
  color: #fff;
  width: 100%;
  padding: 0;
  text-align: center;
  height: 70px;
  line-height: 70px;
}
.el-aside {
  text-align: center;
  height: calc(100vh - 40px);
}
.el-main {
  text-align: center;
  padding: 0;
  height: calc(100vh - 110px);
}
</style>
