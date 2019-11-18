<template>
  <el-container :style="{height: hh+'px',border: '1px solid #eee'}">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <SideBar />
    </el-aside>

    <el-container>
      <el-header>
        <HeaderBar />
      </el-header>
      <el-main style="margin-top:20px">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Notification } from 'element-ui';
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
    };
  },
  async beforeRouteEnter(to, from, next) {
    const user = await isLoggedIn();

    if (user) {
      if(user.user.level === 'customer'){
        Notification.error('Unauthorized Access.')
        next(vm=>vm.$router.push('/'));
      }else{
        next();
      }
      
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

