<template>
  <el-menu :default-openeds="['items', 'orders', 'analytics']" :router="true">
    <el-menu-item index="/admin/dashboard">
      <i class="el-icon-s-management"></i>Dashboard
    </el-menu-item>
    <el-submenu index="items">
      <template slot="title">
        <i class="el-icon-s-shop"></i>Items
      </template>
      <el-menu-item index="/admin/items">
        <i class="el-icon-shopping-bag-1"></i>Items
      </el-menu-item>
      <el-menu-item index="/admin/items/plus">
        <i class="el-icon-circle-plus-outline"></i>Add Item
      </el-menu-item>
    </el-submenu>
    <el-submenu index="orders">
      <template slot="title">
        <i class="el-icon-s-promotion"></i>Orders
      </template>
      <el-menu-item index="/admin/orders">
        <i class="el-icon-takeaway-box"></i>Orders
      </el-menu-item>
      <el-menu-item index="/admin/orders/items">
        <i class="el-icon-present"></i>Order Items
      </el-menu-item>
      <el-menu-item index="/admin/orders/money">
        <i class="el-icon-money"></i>Money
      </el-menu-item>
    </el-submenu>
    <el-submenu index="analytics">
      <template slot="title">
        <i class="el-icon-s-marketing"></i>Analytics
      </template>
      <el-menu-item index="/admin/analytics/desc">
        <i class="el-icon-pie-chart"></i>Descriptive
      </el-menu-item>
      <el-menu-item index="/admin/analytics/pred">
        <i class="el-icon-data-line"></i>Predictive
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="/admin/settings">
      <template slot="title">
        <i class="el-icon-s-tools"></i>Settings
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  
};
</script>