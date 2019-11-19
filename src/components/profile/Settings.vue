<template>
  <div>
    <el-tabs :stretch="true">
      <el-tab-pane label="Account">
        <AccountInfo :profile="profile" :hasProfile="hasProfile" :isSeller="isSeller" />
      </el-tab-pane>
      <el-tab-pane label="Profile Info">
        <ProfileInfo :profile="profile" :hasProfile="hasProfile" :isSeller="isSeller" />
      </el-tab-pane>
      <el-tab-pane label="Social Media">
        <SocialMedia :profile="profile" :hasProfile="hasProfile" :isSeller="isSeller" />
      </el-tab-pane>
      <el-tab-pane label="Personal Info">
        <PersonalInfo :profile="profile" :hasProfile="hasProfile" :isSeller="isSeller" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["profile","hasProfile","isSeller"])
  },
  methods: {
    async saveProfile(params) {
      const payload = {
        "111": {
          set_info: params,
          "000": ["set_info"]
        },
        "000": ["111"]
      };
      
      const fp = await this.$browser();
      this.$actions
        .post("/action", payload, {
          headers: { 
            Authorization: this.profile.token, 
            'Account-ID':this.profile.user.email, 
            'Device-ID': fp.deviceHash
            }
        })
        .then(response => {
          // handle success
          const resp = response.data['111'].set_info;
          if(resp.status){
            this.$notify.success({
            title: "Success",
            message: resp.msg
          });
          window.location.reload();
          }else{
              this.$notify.error({
            title: "Error",
            message: resp.msg
          });
          }
          
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