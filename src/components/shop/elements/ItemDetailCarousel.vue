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
      <ItemDetailImage :image="$urlTo(image.url,'f')" ref="im" />
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
      width: window.innerWidth
    }
  },
  computed: {
    height() {
     if (this.width > 768) {
        return `${this.width / 2.2}px`
      } else{
        return `${this.width / 1.2}px`
      }
      
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
  },
  created(){
    window.addEventListener('resize', () => this.width = window.innerWidth)
  }
};
</script>

<style>
.el-carousel__arrow {
  background-color: rgba(31, 45, 61, 0.4);
}
</style>