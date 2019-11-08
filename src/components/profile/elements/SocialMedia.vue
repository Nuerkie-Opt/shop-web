<template>
  <el-card>
    <el-form :model="socialInfo" ref="socialInfo" label-position="top">
      <el-form-item label="Facebook Handle" prop="facebook" required>
        <el-input v-model="socialInfo.facebook"></el-input>
      </el-form-item>
      <el-form-item label="Instagram Handle" prop="instagram" required>
        <el-input v-model="socialInfo.instagram"></el-input>
      </el-form-item>
      <el-form-item label="Twitter Handle" prop="twitter" required>
        <el-input v-model="socialInfo.twitter"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="save" size="small" style="width:100%">Save</el-button>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      socialInfo: {
        facebook: "",
        instagram: "",
        twitter: ""
      }
    };
  },
  methods: {
    save() {
      let isValid;
      this.$refs.socialInfo.validate(valid => (isValid = valid));

      if (isValid) {
        const params = { info: "social", data: this.socialInfo };
        this.$eventBus.$emit("save-profile-settings", params);
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

<style scoped>
.el-form-item.code {
  margin-bottom: 0px;
}
</style>