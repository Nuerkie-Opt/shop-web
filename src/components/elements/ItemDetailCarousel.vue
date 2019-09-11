<template>
  <el-carousel
    @change="changed"
    ref="rousel"
    arrow="always"
    :initial-index="0"
    :autoplay="false"
    indicator-position="none"
    :height="height"
  >
    <el-carousel-item v-for="(image, i) in images" :key="i">
      <ItemDetailImage :image="image" ref="im"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import ItemDetailImage from "./ItemDetailImage.vue";

export default {
  components: {
    ItemDetailImage
  },
  props: ["images"],
  data(){
    return{
      height:'400px'
    }
  },
  methods: {
    changed(i, j) {
      this.$eventBus.$emit("item-changed", i);
    }
  },
  mounted() {
    this.$eventBus.$on("thumbed", key => {
      this.$refs.rousel.setActiveItem(key);
    });
  }
};
</script>

<style>
.el-carousel__arrow {
  background-color: rgba(31, 45, 61, 0.4);
}
/* .el-carousel {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
} */
</style>