<template>
  <div>
    <ItemFormBasic ref="itemFormBasic" :mode="mode"/>
    <p style="font-size:14px;color:#606266">Upload at most 5 Images for item</p>
    <ImageUploader ref="imageUploader" :mode="mode"/>
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
  props:{
    mode:{
      type:String,
      default:'create'
    },
    dat: Object
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
