<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-card class="box-card">
        Logo | Search Bar | Register | Login | Home | Cart Icon | User Icon
        <div><el-divider content-position="left">Africaniz</el-divider></div>
        Menu | | About | Blog | Country ( Currency ) Indicator
        </el-card>
      </el-header>
      <el-main>
        Items List
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.el-header, .el-container, .el-main {
  margin:0;
  padding:0
}
.el-header {
  position:fixed;
  width:100%
}
.el-card {
  position:relative;
}
.el-main {
  margin-top: 120px;
  margin-left: 30px;
  margin-right: 3px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px
}
</style>
