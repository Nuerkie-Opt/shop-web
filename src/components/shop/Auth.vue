<template>
  <el-card>
    <router-view></router-view>
    <div style="padding-left:100px">
      <el-button type="text" @click="goTo('login')">Login</el-button>
      <el-button type="text" @click="goTo('register')">Register</el-button>
      <el-button type="text" @click="goTo('reset')">Forgot Password?</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  methods:{
    goTo(r){
      this.$router.push(`/auth/${r}`);
    }
  }
}
</script>

<style scoped>
.el-card {
  position: relative;
  border: 1px solid #acc2f4;
  margin-top: 90px;
}
@media only screen and (max-width: 768px) {
  .el-card {
    left: 0%;
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .el-card {
    left: 20%;
    width: 60%;
  }
}
@media only screen and (min-width: 992px) {
  .el-card {
    left: 30%;
    width: 40%;
  }
}
</style>
