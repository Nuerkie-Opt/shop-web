<template>
<div>
  <el-input placeholder="Find something, or someone" size="small" v-model="search" class="input-with-select">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>
</template>

<script>
export default {
  data(){
      return {
          search:"",
      }
  }
};
</script>

<style scoped>
.el-button {
    width: 90px;
}
</style>