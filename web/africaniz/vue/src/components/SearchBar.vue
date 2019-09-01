<template>
<div>
  <el-input placeholder="Find something, or someone" size="medium" v-model="search" class="input-with-select">
    <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
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