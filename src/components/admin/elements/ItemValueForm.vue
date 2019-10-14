<template>
    <div>
    <ItemValueBasicForm ref="itemValueBasicForm"/>
    <p style="font-size:14px;color:#606266">Upload Images for item</p>
    <ImageUploader ref="imageUploader"/>
    </div>
</template>

<script>
import ItemValueBasicForm from './ItemValueBasicForm.vue';
import ImageUploader from './ImageUploader.vue';
export default {
    components:{
        ItemValueBasicForm,
        ImageUploader
    },
  methods: {
    getData() {
      return this.$refs.imageUploader.getData().then(images => {
        return this.$refs.itemValueBasicForm
          .getData()
          .then(form => {
            form.images = images;
            console.log('itemValueForm');
            console.log(form);
            
            
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