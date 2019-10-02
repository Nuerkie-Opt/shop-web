<template>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="8">
        <i v-if="collapsed" class="el-icon-right" @click="toggle"></i>
        <i v-else class="el-icon-back" @click="toggle"></i>
      </el-col>
      <el-col :span="8">2</el-col>
      <el-col :span="8" style="text-align: right">Hello, User</el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      this.$eventBus.$emit("collapsed", this.collapsed);
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  width: 100%;
}
[class*="el-icon"]:hover {
  cursor: pointer;
  color: #ffffff;
}
</style>
