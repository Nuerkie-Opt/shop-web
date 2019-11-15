<template>
  <el-container :style="{height: hh+'px',border: '1px solid #eee'}">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <SideBar />
    </el-aside>

    <el-container>
      <el-header>
        <HeaderBar />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { isLoggedIn } from "../utils.js";
import SideBar from "../components/admin/elements/SideBar.vue";
import HeaderBar from "../components/admin/elements/HeaderBar.vue";

export default {
  components: {
    HeaderBar,
    SideBar
  },
  data() {
    return {
      hh: window.innerHeight,
      loggedIn: false
    };
  },
  async beforeRouteEnter(to, from, next) {
    const logged_in = await isLoggedIn();

    if (logged_in) {
      next(vm => {
        vm.loggedIn = logged_in;
      });
    } else {
      next(vm=>vm.$router.push('/auth/login'));
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
  background-color: #ffffff;
}
</style>

