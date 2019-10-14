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
      return this.$refs.imageUploader.getData().then(images => {
        return this.$refs.itemFormBasic
          .getData()
          .then(form => {
            form.images = images;
            return Promise.resolve(form);
          })
          .catch(error => {
            return Promise.reject(error);
          });
      });
    }
  }
};
</script>
