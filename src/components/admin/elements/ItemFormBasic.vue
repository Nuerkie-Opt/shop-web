<template>
  <div>
    <el-form label-width="100px" ref="itemFormBasic" label-position="top" :model="itemFormBasic">
      <el-form-item
        label="Name"
        prop="name"
        :rules="[
    {required:true, message:'Name is required', trigger:'blur'},
    {min:10, max:128, message:'Name must be between 10 and 128 characters.', trigger:'blur'}
      ]"
      @submit.native.prevent
      >
        <el-input
          v-model="itemFormBasic.name"
          placeholder="Name your product"
          maxlength="128"
          minlength="10"
          show-word-limit
          clearable
          :disabled="mode === 'show'"
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
        <vue-editor
          :editor-toolbar="toolbar"
          v-model="itemFormBasic.description"
          placeholder="Describe your product and it's usage. It can be as long as possible but not too long since you might bore readers. Try to go straigt to the point."
          :disabled="mode === 'show'"
        ></vue-editor>
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
              v-model="itemFormBasic.department"
              placeholder="Department of Item"
              style="width:100%"
              filterable
              default-first-option
              clearable
              :disabled="mode === 'show'"
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
              v-model="itemFormBasic.category"
              placeholder="Category of Item"
              style="width:100%"
              filterable
              default-first-option
              clearable
              :disabled="mode === 'show'"
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
          v-model="itemFormBasic.tags"
          placeholder="Tags for your item"
          style="width:100%"
          :multiple-limit="10"
          multiple
          filterable
          allow-create
          default-first-option
          clearable
          :disabled="mode === 'show'"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="8">
          <el-form-item
            label="Currency"
            prop="currency"
            :rules="[
    {required:true, message:'Price is required', trigger:'blur'},
      ]"
          >
            <el-select
              v-model="itemFormBasic.currency"
              style="width:100%"
              placeholder="Currency"
              clearable
              :disabled="mode === 'show'"
            >
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
        <el-col :xs="24" :sm="8">
          <el-form-item
            label="Price"
            prop="price"
            :rules="[
    {required:true, message:'Price is required', trigger:'blur'},
        {type:'number', min:1, message:'1 is minimum.', trigger:'blur'}
      ]"
          >
            <el-input-number
              v-model="itemFormBasic.price"
              style="width:100%"
              :min="1"
              :precision="2"
              :disabled="mode === 'show'"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8">
          <el-form-item
            label="Days to Complete Order (Single Order)"
            prop="days"
            :rules="[
    {required:true, message:'Days to Complete Order is required', trigger:'blur'},
        {type:'number', min:0.1, message:'0.1 hours is minimum.', trigger:'blur'}
      ]"
          >
            <el-input-number
              v-model="itemFormBasic.days"
              style="width:100%"
              :min="1"
              :disabled="mode === 'show'"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
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
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        ["bold", "italic", "underline", "strike"], // toggled buttons
        [{ align: [] }, "blockquote"],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }] // superscript/subscript
      ],
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
        }
      ],
      itemFormBasic: {
        name: "qwertyuiop",
        description:
          "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopvafricaniz",
        department: "africaniz",
        category: "africaniz",
        tags: ["okay"],
        currency: "GHS",
        price: "",
        days: ""
      }
    };
  },
  methods: {
    getData() {
      let isValid;
      this.$refs["itemFormBasic"].validate(valid => isValid = valid);

      if (isValid) {
        return this.itemFormBasic;
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
      this.itemFormBasic = {
        name: this.dat.name,
        description: this.dat.description,
        department: this.dat.department,
        category: this.dat.category,
        tags: this.dat.tags,
        currency: this.dat.currency,
        price: this.dat.price,
        days: this.dat.days
      };
    }
  }
};
</script>
