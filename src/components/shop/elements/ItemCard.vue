<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <el-image
      :src="$urlTo(item.item.images[0].url,'g')"
      @click="itemDetails"
      lazy
    >
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
        <span>{{item.item.name}}</span>
      </div>

      <el-divider></el-divider>

      <div class="sbottom clearfix">
          <ActionBtns :item="item.item" />
      </div>
    </div>
  </el-card>
</template>

<script>
import ActionBtns from "./ActionBtns.vue";

export default {
  components: {
    ActionBtns
  },
  props: ["mode", "item", "row", "col"],
  methods: {
    itemDetails(){
      this.$router.push({ path:`/items/${this.item.id}`});
    }
  }
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