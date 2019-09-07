<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <el-image :src="item.images[0]">
      <div slot="placeholder" class="image-slot block">
        <i class="el-icon-loading"></i>
      </div>
      <div slot="error" class="image-slot block">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <el-divider></el-divider>
    <div>
      <div class="bottom">
        <span>{{item.name}}</span>
      </div>

      <el-divider></el-divider>

      <div class="sbottom clearfix">
        <el-button class="bots" icon="el-icon-star-off" size="small" circle></el-button>
        <el-button class="bots" icon="el-icon-share" size="small" circle></el-button>
        <el-button class="bots" icon="el-icon-more-outline" size="small" circle></el-button>
        <el-button class="bots" icon="el-icon-view" size="small" circle></el-button>
        <el-button class="rbutton bots" size="small" round><MoneySign :price="item.price"/> </el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import MoneySign from "./MoneySign.vue";

export default {
  components: {
    MoneySign
  },
  props: ["mode", "item"]
};
</script>

<style scoped>
.el-card {
  z-index: 1;
  margin-bottom: 10px;
  border-radius: 7px;
  cursor: pointer;
}
.el-card:hover {
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.03);
}
.bots {
  font-weight: bold;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.bots:hover {
  box-shadow: 0 0 0 5px rgba(23, 135, 251, 0.05);
}
.el-divider {
  margin: 0px;
}
.bottom {
  margin: 13px;
  line-height: 12px;
}
.sbottom {
  margin: 8px;
  line-height: 12px;
}
.rbutton {
  /* padding: 0; */
  float: right;
}
.lbutton {
  /* padding: 0; */
  float: left;
}
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #909399;
  font-size: 30px;
}
.block {
  padding: 100px;
  text-align: center;
  border-right: none;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  vertical-align: top;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-divider {
  background-color: rgba(220, 223, 230, 0.3) !important;
}
</style>