<template>
  <div class="block">
    <el-carousel trigger="click" height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        <JumboImage />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import JumboImage from "./JumboImage.vue";

export default {
  components:{
    JumboImage
  },
  props:["images"]
}
</script>

<style scoped>

.block {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>