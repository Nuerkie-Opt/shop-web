<template>
  <el-card v-if="hasProfile">
    <el-form :model="profileInfo" ref="profileInfo" label-position="top">
      <el-form-item label="Title" prop="title" required>
        <el-input v-model="profileInfo.title" placeholder="Your Brand Name."></el-input>
      </el-form-item>
      <el-form-item label="Caption." prop="caption" required>
        <el-input v-model="profileInfo.caption" placeholder="Make it catchy."></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="details" required>
        <el-input type="textarea" placeholder="Make it informative." v-model="profileInfo.details"></el-input>
      </el-form-item>
      <p style="color:#a7a7a7">Upload 5 images that sell your brand.</p>
      <ImageUploader ref="brandUploader" mode="edit" :dat="brandImages"/>
      <p style="color:#a7a7a7">Upload your logo.</p>
      <ImageUploader ref="logoUploader" :lim="1" mode="edit" :dat="logoImage" />
    </el-form>
    <el-button type="primary" @click="save" size="small" style="width:100%">Save</el-button>
  </el-card>
</template>
<script>
import { awaitObjectWithPromise } from "../../../utils.js";
import ImageUploader from "../../admin/elements/ImageUploader.vue";
import MoneySign from "../../shop/elements/MoneySign.vue";
import countries from "../../../data/countries.js";
import dialCode from "../../../data/dialCode.js";

export default {
  props:["profile","hasProfile","isSeller"],
  components: {
    ImageUploader,
    MoneySign
  },
  data() {
    return {
      profileInfo: {
        title: "",
        caption: "",
        details: ""
      }
    };
  },
  computed: {
    countries() {
      return countries;
    },
    dialCode() {
      return dialCode;
    },
    brandImages(){
      if (this.hasProfile) {
        if (this.profile.user.profile) {
          if (this.profile.user.profile.brand) {
            return this.profile.user.profile.brand;
          }
        }
      }
      return [];
    },
    logoImage(){
      if (this.hasProfile) {
        if (this.profile.user.profile) {
          if (this.profile.user.profile.logo) {
            return this.profile.user.profile.logo;
          }
        }
      }
      return [];
    }
  },
  methods: {
    async save() {
      let isValid;
      this.$refs.profileInfo.validate(valid => (isValid = valid));

      if (isValid) {
        let profileInfo = this.profileInfo;
        profileInfo.brand = this.$refs.brandUploader.getData();
        profileInfo.logo = this.$refs.logoUploader.getData();
        profileInfo = await awaitObjectWithPromise(profileInfo);
        if (profileInfo.brand.length === 0 || profileInfo.logo.length === 0) {
          const error = "Images not selected.";
          this.$notify.error({
            title: "Error",
            message: error
          });
          return;
        }
        const params = { info: "profile", data: profileInfo };
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
  },  
  created() {
      if (this.hasProfile) {
        if (this.profile.user.profile) {
          this.profileInfo = {
            title: this.profile.user.profile,
            caption: this.profile.user.caption,
            details: this.profile.user.details
          };
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