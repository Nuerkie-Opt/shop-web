<template>
  <el-form ref="itemForm" :model="itemForm" label-position="top" label-width="120px" size="mini">
    <el-row>
      <el-col :xs="24" :sm="12" v-for="(opt,i) in this.options" :key="i">
        <el-form-item :label="opt.name" :prop="opt.name" :required="opt.required">
          <el-select
            v-model="itemForm[opt.name]"
            size="mini"
            :placeholder="opt.name"
            @change="chOpt"
            clearable
          >
            <el-option v-for="(val,j) in opt.values" :key="j" :label="val.name" :value="j"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      itemForm: {}
    };
  },
  methods: {
    chOpt(index) {
      let opts = {};
      const object = this.itemForm;
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          if(object[key] !== ""){
            const opt = this.options.filter(op=>op.name===key);
            opts[key] = opt[0]['values'][object[key]];
          }
          
        }
      }
      this.$eventBus.$emit("chopt", opts);
    },
    getData() {
      return new Promise((resolve, reject) =>
        this.$refs["itemForm"].validate(valid => {

          if (valid) {
            resolve();
          } else {
            reject("Please specify your preferences.");
          }
        })
      );
    }
  },
  beforeMount() {
    this.options.forEach(option => {
      this.$set(this.itemForm, option.name, "");
    });
  }
};
</script>