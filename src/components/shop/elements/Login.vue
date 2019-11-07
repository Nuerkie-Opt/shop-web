<template>
<div>
  <br/>
  <el-alert
    title="Login"
    type="info"
    description="Please provide your credentials to login."
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
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
    >
      <el-input size="small" v-model="formModel.email"></el-input>
    </el-form-item>
    <el-form-item
      label="Password"
      prop="pass"
      :rules="[
      { required: true, message: 'Password Required.', trigger: 'blur' },
      { min: 6, message: 'Password must be at least 6 characters.', trigger: 'blur' },
      { pattern: /^\S*$/, message: 'No spaces allowed.'}
    ]"
    >
      <el-input size="small" type="password" v-model="formModel.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button size="small" type="primary" @click="submitForm('formModel')">Login</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formModel: {
        email: "",
        pass: ""
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