<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" :router="true">
        <el-menu-item index="/admin/dashboard">
          <i class="el-icon-s-management"></i>Dashboard
        </el-menu-item>
        <el-submenu index="items">
          <template slot="title">
            <i class="el-icon-s-shop"></i>Items
          </template>
          <el-menu-item index="1-1"><i class="el-icon-takeaway-box"></i>Items</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-circle-plus-outline"></i>Add Item</el-menu-item>
        </el-submenu>
        <el-submenu index="orders">
          <template slot="title">
            <i class="el-icon-takeaway-box"></i>Orders
          </template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-submenu>
        <el-submenu index="analytics">
          <template slot="title">
            <i class="el-icon-s-marketing"></i>Analytics
          </template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-submenu>
        <el-menu-item index="/admin/settings">
          <template slot="title">
            <i class="el-icon-s-operation"></i>Settings
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="8">1</el-col>
          <el-col :span="8">2</el-col>
          <el-col :span="8" style="text-align: right">Hello, User</el-col>
        </el-row>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-main {
  margin-top: 60px;
}
.el-aside {
  color: #333;
  background-color: #ffffff;
}
</style>

