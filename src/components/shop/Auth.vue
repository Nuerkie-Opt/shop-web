<template>
<el-card>
  <router-view></router-view>
  <router-link to="login">Login</router-link>
  <router-link to="register">Register</router-link>
  <router-link to="reset">Forgot Password?</router-link>
</el-card>
</template>

<style scoped>
  .el-card{
    position: relative;
    border: 1px solid #acc2f4;
  }
@media only screen and (max-width: 768px) {
  .el-card{
    left: 0%;
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .el-card{
    left: 20%;
    width: 60%;
  }
}
@media only screen and (min-width: 992px) {
  .el-card{
    left: 30%;
    width: 40%;
  }
}
</style>
