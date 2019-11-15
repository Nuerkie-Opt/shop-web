<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-image :src="$urlTo(image, scale)" :preview-src-list="slist" fit="fill">
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
  props: {
    image:String,
    prev:{
        type:Boolean,
        default:false
    },
    scale:{
        type:String,
        default:"f"
    },
  },
  computed: {
    slist() {
      return this.prev ? [this.$urlTo(this.image, this.scale)] : [];
    }
  }
};
</script>

<style scoped>

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