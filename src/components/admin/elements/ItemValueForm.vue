<template>
  <div>
    <ItemValueBasicForm ref="itemValueBasicForm" />
    <p style="font-size:14px;color:#606266">Upload Images for item</p>
    <ImageUploader ref="imageUploader" />
  </div>
</template>

<script>
import ItemValueBasicForm from "./ItemValueBasicForm.vue";
import ImageUploader from "./ImageUploader.vue";
export default {
  components: {
    ItemValueBasicForm,
    ImageUploader
  },
  methods: {
    getData() {
      let imgs = this.$refs.imageUploader.getData();

      let formData = this.$refs.itemValueBasicForm.getData();

      if(!formData){
        return false;
      }
      
      formData.images = imgs;
      
      return formData;
    }
  }
};
</script>