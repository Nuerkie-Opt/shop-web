<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-image
      :src="image"
    >
      <div slot="placeholder" class="image-slot block">
        <i class="el-icon-loading"></i>
      </div>
      <div slot="error" class="image-slot block">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>    
  </el-card>
</template>

<script>
export default {
  props:['image']
}
</script>

<style scoped>
.el-card {
  z-index: 1;
  margin-bottom: 10px;
  border-radius: 7px;
  cursor: pointer;
}
.el-card:hover {
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
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
</style>