<template>
  <div>
    <el-form
      label-width="100px"
      ref="itemValueBasicForm"
      label-position="top"
      :model="itemValueBasicForm"
    >
      <el-form-item
        label="Value Name"
        prop="name"
        :rules="[
    {required:true, message:'Value Name is required', trigger:'blur'},
      ]"
      >
        <el-input
          v-model="itemValueBasicForm.name"
          placeholder="eg. Red, Blue, Green ..."
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <vue-editor
          :editor-toolbar="toolbar"
          v-model="itemValueBasicForm.description"
          placeholder="You can add a short Description for this variant of your product."
        ></vue-editor>
      </el-form-item>

      <el-form-item
        label="You can provide extra Tags for this variant of your product."
        prop="tags"
      >
        <el-select
          v-model="itemValueBasicForm.tags"
          placeholder="Extra Tags for this variant of your product."
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
            label="You can provide a separate price for this variant of your product."
            prop="price"
          >
            <el-input-number v-model="itemValueBasicForm.price" style="width:100%" :precision="2"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Hours to Complete Order (Single Order) for this variant of your product."
            prop="chours"
          >
            <el-input-number
              v-model="itemValueBasicForm.chours"
              style="width:100%"
              :min="0.1"
              :precision="1"
              :step="0.1"
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
        },
        {
          label: "NGN",
          symbol: "&#8358;"
        }
      ],
      itemValueBasicForm: {
        name: "qwertyuiop",
        description:"qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopvafricaniz",
        tags: ["okay"],
        currency: "GHS",
        price: "",
        chours: ""
      }
    };
  },
  methods: {
    getData() {
      return new Promise((resolve, reject) =>
        this.$refs["itemValueBasicForm"].validate(valid => {
          if (valid) {
            resolve(this.itemValueBasicForm);
          } else {
            reject("Please provide all the required info.");
          }
        })
      );
    }
  }
};
</script>
