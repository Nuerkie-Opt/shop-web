<template>
  <div>
    <el-form
      label-width="100px"
      ref="itemValueBasicForm"
      label-position="top"
      :model="itemValueBasicForm"
      @submit.native.prevent
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
            label="Days to Complete Order (Single Order) for this variant of your product."
            prop="days"
          >
            <el-input-number
              v-model="itemValueBasicForm.days"
              style="width:100%"
              :min="1"
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
      itemValueBasicForm: {
        name: "qwertyuiop",
        price: "",
        days: ""
      }
    };
  },
  methods: {
    getData() {
      let isValid;
      this.$refs["itemValueBasicForm"].validate(valid => (isValid = valid));

      if (isValid) {
        return this.itemValueBasicForm;
      } else {
        const error = "Please provide all the required info.";
        this.$notify.error({
          title: "Error",
          message: error
        });
        return false;
      }
    }
  }
};
</script>
