<template>
  <div>
    <el-form
      label-width="100px"
      ref="itemPropertyForm"
      label-position="top"
      :model="itemPropertyForm"
    >
      <el-form-item
        label="Property Name"
        prop="name"
        :rules="[
    {required:true, message:'Property Name is required', trigger:'blur'},
      ]"
      >
        <el-input
          v-model="itemPropertyForm.name"
          placeholder="eg. Color, Size, Designs, ..."
          clearable
        ></el-input>
      </el-form-item>
    </el-form>

    <div v-for="i in values" :key="i" style="padding:20px">
      <ItemValueForm ref="itemValueForm" />
      <el-button v-if="i==values" @click="values -= 1" size="mini" type="danger">
        Remove Property Value
        <i class="el-icon-minus"></i>
      </el-button>
    </div>
    
    <el-button @click="values += 1" size="mini" type="primary" style="margin-top:40px">
      Add Property Value
      <i class="el-icon-plus"></i>
    </el-button>
  </div>
</template>

<script>
import ItemValueForm from "./ItemValueForm.vue";

export default {
  components: {
    ItemValueForm
  },
  data() {
    return {
      itemPropertyForm: {
        name: ""
      },
      values: 0
    };
  },
  methods: {
    getData() {
      console.log('getting data');
    },
    uploadImages(){
      
    }
  }
};
</script>