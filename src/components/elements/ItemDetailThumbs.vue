<template>
    <el-row :gutter="10">
        <el-col v-for="(image, i) in images" :key="i" :xs="6" :sm="4" :md="4" :lg="4">
            <ItemDetailImage :image="image" @click.native="emitThumb(i)" mouse="pointer"/>
        </el-col>
    </el-row>
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