<template>
  <div>
    <ItemValueBasicForm ref="itemValueBasicForm" :dat="cdat" :mode="mode"/>
    <p style="font-size:14px;color:#606266">Upload at most 5 Images for item</p>
    <ImageUploader ref="imageUploader" :dat="cdat.images" :mode="mode"/>
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
  props:{
    mode:{
      type:String,
      default:'create'
    },
    dat: Object
  },
  computed: {
    cdat(){
      if (this.mode === 'create') {
        return {images:[]};
      }

      return this.dat;
    }
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