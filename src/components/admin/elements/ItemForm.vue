<template>
  <div>
    <ItemFormBasic ref="itemFormBasic" />
    <p style="font-size:14px;color:#606266">Upload Images for item</p>
    <ImageUploader ref="imageUploader" />
  </div>
</template>

<script>
import ItemFormBasic from "./ItemFormBasic.vue";
import ImageUploader from "./ImageUploader.vue";

export default {
  components: {
    ItemFormBasic,
    ImageUploader
  },
  methods: {
    getData() {
      let imgs = this.$refs.imageUploader.getData();

      let formData = this.$refs.itemFormBasic.getData();

      if(!formData){
        return false;
      }
      
      formData.images = imgs;
      
      return formData;
    }
  }
};
</script>
