<template>
  <div>
    <el-tabs :stretch="true">
      <el-tab-pane label="Account">
        <AccountInfo />
      </el-tab-pane>
      <el-tab-pane label="Profile Info">
        <ProfileInfo />
      </el-tab-pane>
      <el-tab-pane label="Social Media">
        <SocialMedia />
      </el-tab-pane>
      <el-tab-pane label="Personal Info">
        <PersonalInfo />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PersonalInfo from "./elements/PersonalInfo.vue";
import ProfileInfo from "./elements/ProfileInfo.vue";
import AccountInfo from "./elements/AccountInfo.vue";
import SocialMedia from "./elements/SocialMedia.vue";

export default {
  components: {
    PersonalInfo,
    ProfileInfo,
    AccountInfo,
    SocialMedia
  },
  methods: {
    saveProfile(params) {
      const payload = {
        "111": {
          set_info: params,
          "000": ["set_info"]
        },
        "000": ["111"]
      };
      console.log(payload);

      this.$actions
        .post("/action", payload, {
          headers: { Authorization: "a8cd3aa542c5b1c9f6f92d663e32bc0fe682238a" }
        })
        .then(response => {
          // handle success
          console.log(response);
          this.$notify.success({
            title: "Success",
            message: "Update Success."
          });
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$notify.error({
            title: "Error",
            message: "Update Error."
          });
        });
    }
  },
  mounted() {
    this.$eventBus.$on("save-profile-settings", params =>
      this.saveProfile(params)
    );
  },
  destroyed() {
    this.$eventBus.$off();
  }
};
</script>