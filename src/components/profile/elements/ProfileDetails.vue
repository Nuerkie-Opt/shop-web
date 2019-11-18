<template>
  <div v-if="hasProfile">
    <JumboImage :image="logoImage" scale="g" :prev="true"/>
    <h2>{{ title }}</h2>
    <p style="color:#4d4d4d;font-size:18px">{{ cap }}</p>
    <p style="color:#313131;font-size:16px">{{ desc }}</p>
    <el-button type="primary" plain>
      <i class="el-icon-chat-line-round"></i> Ask a Question
    </el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import JumboImage from "./JumboImage.vue";
export default {
  components: {
    JumboImage
  },
  props:["profile","hasProfile","isSeller"],
  computed: {
    cap(){
      if (this.hasProfile) {
        if (this.profile.user.info.profile) {
          if (this.profile.user.info.profile.logo) {
            return this.profile.user.info.profile.caption;
          }
        }
      }
      return "Caption not provided.";
    },
    desc(){
      if (this.hasProfile) {
        if (this.profile.user.info.profile) {
          if (this.profile.user.info.profile.logo) {
            return this.profile.user.info.profile.details;
          }
        }
      }
      return "Description not provided.";
    },
    title(){
      if (this.hasProfile) {
        if (this.profile.user.info.profile) {
          if (this.profile.user.info.profile.logo) {
            return this.profile.user.info.profile.title;
          }
        }
      }
      return "Title not provided.";
    },
    logoImage(){
      if (this.hasProfile) {
        if (this.profile.user.info.profile) {
          if (this.profile.user.info.profile.logo) {
            return this.profile.user.info.profile.logo[0].url;
          }
        }
      }
      return "";
    }
  }
};
</script>