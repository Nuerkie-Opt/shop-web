<template>
  <div>
    <br />
    <el-alert
      title="Login"
      type="info"
      description="Please provide your credentials to login."
      :closable="false"
      show-icon
    ></el-alert>
    <br />
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
import { mapMutations } from 'vuex';
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
    ...mapMutations(['set_login']),
    async submit() {
      const loading = this.$loading({
        lock: true,
        text: "Login...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });

      const fp = await this.$browser();
      const payload = {
        "111": {
          login: {
            email: this.formModel.email.trim(),
            password: this.formModel.pass.trim(),
            device_hash: fp.deviceHash,
            device_data: fp.deviceData
          },
          "000": ["login"]
        },
        "000": ["111"]
      };

      this.$actions
        .post("/action", payload)
        .then(response => {
          // console.log(response);
          const resp = response.data["111"].login;

          if (resp.status) {
            this.$notify.success(resp.msg);
            localStorage.user = JSON.stringify(resp.data);
            this.set_login(true);
            if (this.$route.query.next) {
              this.$router.push(this.$route.query.next);
            } else {
              this.$router.push("/");
            }
          } else {
            this.$notify.error(resp.msg);
          }
        })
        .catch(error => {
          // console.log(error);
        })
        .finally(() => {
          loading.close();
          // always executed
          // remove loader
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submit();
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