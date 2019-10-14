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
      options: [],
      itemPropertyForm: {
        name: ""
      },
      values: 0
    };
  },
  methods: {
    async collectValues() {
      this.options = [];
      if (!this.$refs.itemValueForm) {
        return Promise.resolve();
      }

        await this.$refs.itemValueForm.forEach(value => {
          value.getData().then(form => {
            this.options.push(form);
            console.log('collectValues');
            
          });
        });
    },
    getData() {
      return new Promise((resolve, reject) =>
        this.$refs["itemPropertyForm"].validate(valid => {
          if (valid) {
            let property = { name: this.itemPropertyForm.name };
            this.collectValues().then(() => {
              property.values = this.options;
              console.log("itemPropertyForm");

              console.log(property);
              resolve(property);
            });
          } else {
            reject("Please provide all the required info.");
          }
        })
      );
    }
  }
};
</script>