<template>
  <el-tabs type="border-card" :stretch="true">
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-s-grid"></i> Product Details
      </span>
      Product Details
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-video-camera-solid"></i> Product Videos
      </span>
      Product Videos
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-s-shop"></i> More from Seller
      </span>
      More from Seller
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-s-goods"></i> Similar Products
      </span>
      Similar Products
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-s-claim"></i> Recommended for you
      </span>
      Recommended for you
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-star-on"></i> Product Reviews
      </span>
      Product Reviews
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-thumb"></i> FAQs
      </span>
      FAQs
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-tabs__nav {
    z-index: none;
}
</style>
