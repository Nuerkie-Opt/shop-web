<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <SideBar />
    </el-aside>

    <el-container>
      <HeaderBar />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from '../components/admin/elements/SideBar.vue';
import HeaderBar from '../components/admin/elements/HeaderBar.vue';

export default {
  components:{
    HeaderBar,
    SideBar
  }
};
</script>

<style scoped>

.el-main {
  margin-top: 60px;
}
.el-aside {
  color: #333;
  background-color: #ffffff;
}
</style>

