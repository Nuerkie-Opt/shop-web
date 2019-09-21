<template>
  <el-card>
    <el-row>
      <el-col :xs="12" :sm="10" :md="8">
        <el-image
          style="width:80%;"
          :src="item.images[0]"
          :preview-src-list="item.images"
        ></el-image>
      </el-col>
      <el-col :xs="6" :sm="7" :md="8"></el-col>
      <el-col :xs="6" :sm="7" :md="8"></el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
}
</style>