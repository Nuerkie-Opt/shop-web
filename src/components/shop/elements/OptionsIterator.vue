<template>
  <el-form ref="itemForm" :model="itemForm" label-position="top" label-width="120px" size="mini">
    <el-row>
      <el-col :xs="24" :sm="12" v-for="(val,key,i) in optionsData" :key="i">
        <el-form-item :label="key" :prop="key" required>
          <el-select v-model="itemForm[key]" size="mini" :placeholder="key" clearable>
            <el-option
              v-for="item in val"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :xs="24">
        <el-form-item label="Extra requests for seller.">
          <el-input
            type="textarea"
            v-model="itemForm.request"
            placeholder="Do you have any extra requests for the seller? Type it here..."
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import optionsData from "../../../data/optionsData.js";

export default {
  props: ["item"],
  data() {
    return {
      optionsData: optionsData,
      itemForm: {
        request: ""
      }
    };
  },
  methods: {
    getData() {
      return new Promise((resolve, reject) =>
        this.$refs["itemForm"].validate(valid => {
          console.log(valid);
          
          if (valid) {
            resolve(this.itemForm);
          } else {
            reject("Please specify your preferences.");
          }
        })
      );
    }
  },
  beforeMount() {
    for (const key in this.optionsData) {
      if (this.optionsData.hasOwnProperty(key)) {
        this.$set(this.itemForm, key, "");
      }
    }
  }
};
</script>