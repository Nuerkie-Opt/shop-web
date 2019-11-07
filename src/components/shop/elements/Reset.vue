<template>
  <div>
  <br/>
  <el-alert
    title="Reset Password"
    type="info"
    description="Please provide your email and check your inbox for reset link."
    :closable="false"
    show-icon>
  </el-alert>
  <br/>
  <el-form :model="formModel" ref="formModel" label-width="120px" class="demo-dynamic">
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: 'blur' }
    ]"
    >
      <el-input size="small" v-model="formModel.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button size="small" type="primary" @click="submitForm('formModel')">Reset</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formModel: {
        email: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.formModel);
          this.$notify.success("Form Valid");
        } else {
          this.$notify.error("Form Invalid");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>