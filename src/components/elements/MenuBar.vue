<template>
<el-row type="flex" align="middle" justify="start">
<el-col v-for="menu in menus" :key="menu">
<el-dropdown size="medium">
  <span class="el-dropdown-link">
    Category
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</el-col>
</el-row>
</template>

<script>
export default {
    data(){
        return {
            menus:[1,2,3,4,5,6,7]
        }
    }
}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    font-size: 16px
    
  }
  .el-dropdown-link:hover{
      color: #E6A23C;
      border-bottom:1px
  }
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #fff7ea;
    color: #E6A23C;
}
</style>