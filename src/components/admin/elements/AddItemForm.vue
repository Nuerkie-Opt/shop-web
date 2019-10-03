<template>
  <el-form label-width="100px" ref="addItemForm" label-position="left" :model="addItemForm">
    <el-form-item
      label="Name"
      prop="name"
      :rules="[
    {required:true, message:'Name is required', trigger:'blur'},
    {min:10, max:128, message:'Name must be between 10 and 128 characters.', trigger:'blur'}
      ]"
    >
      <el-input
        v-model="addItemForm.name"
        placeholder="Name your product"
        maxlength="128"
        minlength="10"
        show-word-limit
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item
      label="Description"
      prop="description"
      :rules="[
    {required:true, message:'Description is required', trigger:'blur'},
    {min:128, message:'Minimum of 128 characters', trigger:'blur'}
      ]"
    >
      <el-input
        v-model="addItemForm.description"
        type="textarea"
        :rows="10"
        placeholder="Describe your product and it's usage. It can be as long as possible but not too long since you might bore readers. Try to go straigt to the point."
        minlength="128"
      ></el-input>
    </el-form-item>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12">
        <el-form-item
          label="Department"
          prop="department"
          :rules="[
    {required:true, message:'Department is required', trigger:'blur'},
      ]"
        >
          <el-select
            v-model="addItemForm.department"
            placeholder="Department of Item"
            style="width:100%"
            filterable
            default-first-option
            clearable
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-form-item
          label="Category"
          prop="category"
          :rules="[
    {required:true, message:'Category is required', trigger:'blur'},
      ]"
        >
          <el-select
            v-model="addItemForm.category"
            placeholder="Category of Item"
            style="width:100%"
            filterable
            default-first-option
            clearable
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item
      label="Tags"
      prop="tags"
      :rules="[
    {required:true, message:'Tags are required', trigger:'blur'},
      ]"
    >
      <el-select
        v-model="addItemForm.tags"
        placeholder="Tags for your item"
        style="width:100%"
        :multiple-limit="10"
        multiple
        filterable
        allow-create
        default-first-option
        clearable
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12">
        <el-form-item
          label="Currency"
          prop="currency"
          :rules="[
    {required:true, message:'Price is required', trigger:'blur'},
      ]"
        >
          <el-select v-model="addItemForm.currency" style="width:100%" placeholder="Currency" clearable>
            <el-option
              v-for="item in currencies"
              :key="item.label"
              :label="item.label"
              :value="item.label"
            >
              <span style="float: left">{{ item.label }}</span>
              <span v-html="item.symbol" style="float: right; color: #8492a6; font-size: 13px"></span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-form-item
          label="Price"
          prop="price"
          :rules="[
    {required:true, message:'Price is required', trigger:'blur'},
        {type:'number', min:1, message:'1 is minimum.', trigger:'blur'}
      ]"
        >
          <el-input-number
            v-model="addItemForm.price"
            style="width:100%"
            controls-position="right"
            :min="1"
            :precision="2"
          ></el-input-number>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "africaniz",
          label: "africaniz"
        }
      ],
      currencies: [
        {
          label: "GHS",
          symbol: "&#8373;"
        },
        {
          label: "NGN",
          symbol: "&#8358;"
        }
      ],
      addItemForm: {
        name: "",
        description: "",
        department: "",
        category: "",
        tags: "",
        currency: "",
        price: "",
        images: "",
        videos: ""
      }
    };
  },
  methods: {
    getData() {
      return new Promise((resolve, reject) =>
        this.$refs["addItemForm"].validate(valid => {
          if (valid) {
            resolve(this.addItemForm);
          } else {
            reject("Please provide all the required info.");
          }
        })
      );
    }
  }
};
</script>
