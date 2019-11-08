<template>
  <el-card>
    <el-form :model="accountInfo" ref="accountInfo" label-position="top">
      <el-form-item label="Your Handle" prop="name" required>
        <el-input v-model="accountInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="Your Email" prop="email">
        <el-input v-model="accountInfo.email" disabled></el-input>
      </el-form-item>
      <el-form-item label="Your Status" prop="level">
        <el-input v-model="accountInfo.level" disabled></el-input>
      </el-form-item>
      <el-button @click="activate" type="info" :disabled="is_active">{{ activeText }}</el-button>
      <el-form-item label="Activation Code" v-if="active">
        <el-input v-model="code" placeholder="Enter pin sent to your email." :disabled="is_active"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="save" size="small" style="width:100%;margin-top:15px">Save</el-button>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      is_active: false,
      active: false,
      activeText: "Activate Account.",
      code: "",
      accountInfo: {
        name: "",
        email: "",
        level: ""
      }
    };
  },
  methods: {
    activate() {
      if (this.active) {
        if (this.code) {
            this.active = false;
            this.activeText = "Account Activated.";
            this.is_active = true;
            return;
        }
        const error = "Please provide activation code.";
        this.$notify.error({
          title: "Error",
          message: error
        });
        return;
      }

      this.active = true;
      this.activeText = "Send Code.";
    },
    save() {
      if (this.accountInfo.name) {
        const params = { info: "account", data: this.accountInfo };
        this.$eventBus.$emit("save-profile-settings", params);
      } else {
        const error = "Please provide your account name.";
        this.$notify.error({
          title: "Error",
          message: error
        });
        return;
      }
    }
  }
};
</script>

<style scoped>
.el-form-item.code {
  margin-bottom: 0px;
}
</style>