<template>
<div>
  <el-input placeholder="Find something, or someone" size="small" v-model="search" class="input-with-select" disabled>
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>
</template>

<script>
export default {
  data(){
      return {
          search:"Search not available, scroll to bottom.",
      }
  }
};
</script>

<style scoped>
.el-button {
    width: 90px;
}
</style>