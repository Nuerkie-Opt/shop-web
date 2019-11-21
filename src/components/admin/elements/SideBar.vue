<template>
  <el-menu  :router="true">
    <el-menu-item index="/a/dashboard">
      <i class="el-icon-s-management"></i>Dashboard
    </el-menu-item>
    <el-submenu index="items" >
      <template slot="title">
        <i class="el-icon-s-shop"></i>Items
      </template>
      <el-menu-item index="/a/items">
        <i class="el-icon-shopping-bag-1"></i>Items
      </el-menu-item>
      <el-menu-item index="/a/items/plus" v-if="currentSeller">
        <i class="el-icon-circle-plus-outline"></i>Add Item
      </el-menu-item>
    </el-submenu>
    <el-submenu index="orders">
      <template slot="title">
        <i class="el-icon-s-promotion"></i>Orders
      </template>
      <el-menu-item index="/a/orders">
        <i class="el-icon-takeaway-box"></i>Orders
      </el-menu-item>
      <el-menu-item index="/a/orders/items">
        <i class="el-icon-present"></i>Order Items
      </el-menu-item>
    </el-submenu>
    <el-submenu index="analytics">
      <template slot="title">
        <i class="el-icon-s-marketing"></i>Analytics
      </template>
      <el-menu-item index="/a/analytics/desc">
        <i class="el-icon-pie-chart"></i>Descriptive
      </el-menu-item>
      <el-menu-item index="/a/analytics/pred">
        <i class="el-icon-data-line"></i>Predictive
      </el-menu-item>
    </el-submenu>
    <el-submenu index="settings">
      <template slot="title">
        <i class="el-icon-s-tools"></i>Settings
      </template>
      <el-menu-item index="/a/users">
        <i class="el-icon-user"></i>Users
    </el-menu-item>
    <el-menu-item index="/a/users/new" v-if="currentUser.user.level === 'root'">
        <i class="el-icon-circle-plus-outline"></i>New User
    </el-menu-item>
    <el-menu-item index="/profile/settings">
        <i class="el-icon-setting"></i>Profile Settings
    </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentUser','currentSeller']),

  },  
};
</script>