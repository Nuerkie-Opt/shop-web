<template>
  <div>
    <el-row v-for="(imgs, i) in images" :key="i" :gutter="10">
      <p>{{imgs.name}}</p>
      <el-col v-for="(image, j) in imgs.images" :key="j" :xs="6" :sm="4" :md="4" :lg="4">
        <ItemDetailImage
          :image="$urlTo(image.url,'t')"
          :prev="false"
          @click.native="emitThumb([i,j])"
          mouse="pointer"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ItemDetailImage from "./ItemDetailImage.vue";

export default {
  components: {
    ItemDetailImage
  },
  props: ["images"],
  methods: {
    emitThumb(key) {
      this.$eventBus.$emit("thumbed", key);
    }
  }
};
</script>