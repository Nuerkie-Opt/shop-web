<template>
  <div>
    <br />
    <el-alert
      title="Reset Password"
      type="info"
      description="Please provide your email and check your inbox for reset code."
      :closable="false"
      show-icon
    ></el-alert>
    <br />
    <el-form :model="formModel" ref="formModel" label-width="120px" class="demo-dynamic" @submit.native.prevent>
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
      <el-form-item
        prop="ecode"
        label="Activation Code"
        :rules="[
      { required: true, message: 'Please input code sent to your email', trigger: 'blur' }
    ]"
        v-if="generated"
      >
        <el-input size="small" v-model="formModel.ecode"></el-input>
      </el-form-item>
      <el-form-item
        prop="password"
        label="Password"
        :rules="[
      { required: true, message: 'Password Required.', trigger: 'blur' },
      { min: 6, message: 'Password must be at least 6 characters.', trigger: 'blur' },
      { pattern: /^\S*$/, message: 'No spaces allowed.'}
    ]"
        v-if="generated"
      >
        <el-input type="password" size="small" v-model="formModel.password"></el-input>
      </el-form-item>
      <el-form-item
        prop="confirm"
        label="Confirm"
        :rules="[
      { required: true, message: 'Confirm Password Required.', trigger: 'blur' },
      { min: 6, message: 'Password must be at least 6 characters.', trigger: 'blur' },
      { pattern: /^\S*$/, message: 'No spaces allowed.'}
    ]"
        v-if="generated"
      >
        <el-input type="password" size="small" v-model="formModel.confirm"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="submitForm('formModel')">{{btnText}}</el-button>
        <el-button size="small" type="danger" @click="generated = false" v-if="generated"> Resend Code. </el-button>
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
        ecode: "",
        password: "",
        confirm: "",
      },
      generated: false
    };
  },
  computed: {
    btnText() {
      return this.generated ? "Reset." : "Send Code.";
    }
  },
  methods: {
    async resetPassword(phase, email, password = "", code = 0) {
      const loading = this.$loading({
        lock: true,
        text: "🤓...",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.5)"
      });
      const payload = {
        "111": {
          reset_password: {
            phase: phase,
            email: email,
            code: code,
            password: password
          },
          "000": ["reset_password"]
        },
        "000": ["111"]
      };
      let verify = new Promise((resolve, reject) => {
        this.$actions
          .post("/action", payload)
          .then(response => {
            // handle success
            const resp = response.data["111"].reset_password;

            if (resp.status) {
              this.$notify.success({
                title: "Success",
                message: resp.msg
              });
              resolve(response);
            } else {
              this.$notify.error({
                title: "Error",
                message: resp.msg
              });
              reject(response);
            }
          })
          .catch(error => {
            // handle error
            reject();
            this.$notify.error({
              title: "Error",
              message: "Poor Internet."
            });
          }).finally(() => {
          loading.close();
          // always executed
          // remove loader
        });;
      });
      return verify;
    },
    activatePassword() {
      if (this.generated) {
        if (this.formModel.password != this.formModel.confirm) {
          this.$notify.error("Passwords Don't match ");
          return;
        }
        this.resetPassword("reset", this.formModel.email, this.formModel.password, this.formModel.ecode).then(
          res => {
            const msg =
              "Password reset successfull, now login with your new password.";
            this.$notify.success({
              title: "Success",
              message: msg
            });
            this.$router.push("/auth/login");
            return;
          }
        );
      } else {
        this.resetPassword("generate", this.formModel.email).then(res => {
          this.generated = true;
          return;
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.activatePassword();
        } else {
          this.$notify.error("Kindly provide all the neccessary info.");
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