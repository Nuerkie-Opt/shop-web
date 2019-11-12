<template>
  <div>
    <el-form
      label-width="100px"
      ref="itemPropertyForm"
      label-position="top"
      :model="itemPropertyForm"
      @submit.native.prevent
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
          :disabled="mode === 'show'"
        ></el-input>
      </el-form-item>
      <el-form-item label="Required" prop="required">
        <el-switch v-model="itemPropertyForm.required" placeholder="eg. Color, Size, Designs, ..." :disabled="mode === 'show'"></el-switch>
      </el-form-item>
    </el-form>
    <template >
    <div v-for="i in values" :key="i" style="padding:20px">
      <ItemValueForm ref="itemValueForm" v-if="added"/>
      <ItemValueForm ref="itemValueForm" v-else :dat="getVal(i)" :mode="mode"/>
      
      <el-button style="margin-top:10px" v-if="i==values" @click="values -= 1" size="mini" type="danger" :disabled="mode === 'show'">
        Remove Property Value
        <i class="el-icon-minus"></i>
      </el-button>
    </div>
    </template>

    <el-button @click="add" size="mini" type="primary" style="margin-top:20px" :disabled="mode === 'show'">
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
  props:{
    mode:{
      type:String,
      default:'create'
    },
    dat: Object
  },
  data() {
    return {
      added:false,
      itemPropertyForm: {
        name: "",
        required: false
      },
      values: 0
    };
  },
  methods: {
    add(){
      this.added = true;
      this.values++;
    },
    getVal(i){
      if(this.mode === 'create'){
        return {};
      }
      return this.dat.values[i];
    },
    collectValues() {
      let options = [];
      if (this.$refs.itemValueForm) {
        this.$refs.itemValueForm.forEach(value => {
          const data = value.getData();
          if(data){
            options.push(data);
          }else{
            return false;
          }
          
        });
      }

      return options;
    },
    getData() {
      let isValid;
      this.$refs["itemPropertyForm"].validate(valid => isValid = valid);

      if (isValid) {
        let property = this.itemPropertyForm;
        let values = this.collectValues();
        if(values){
          property.values = values;
          return property;
        }else{
          return false;
        }
        
      } else {
        const error = "Please provide all the required info.";
        this.$notify.error({
          title: "Error",
          message: error
        });
        return false;
      }
    }
  },
  mounted() {
    if(this.mode !== 'create'){
      this.itemValueBasicForm = {
        name:this.dat.name,
        required: this.dat.required
      };
      this.values = this.dat.values.length;
    }
  }
};
</script>