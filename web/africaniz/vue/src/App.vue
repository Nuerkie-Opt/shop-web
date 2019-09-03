<template>
  <div id="app">
    <el-container>

      <el-header>
        <HeaderBar/>
      </el-header>

      <el-main>
        <ItemDisplay/>
      </el-main>
      
    </el-container>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import ItemDisplay from "./components/ItemDisplay.vue"

export default {
  components: {
    ItemDisplay,
    HeaderBar
  }
};
</script>

<style>
.el-header,
.el-container,
.el-main {
  margin: 0;
  padding: 0;
}
.el-header {
  position: fixed;
  width: 100%;
  z-index:999
}
.el-card {
  position: relative;
}
.el-card__body {
  padding: 10px;
}
.el-main {
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
