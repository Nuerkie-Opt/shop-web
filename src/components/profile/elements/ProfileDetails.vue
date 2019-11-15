<template>
  <div>
    <JumboImage :image="profile.info.profile.logo[0].url" scale="g" :prev="true"/>
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
  props:{
    title:{
      type:String,
      default:"Title"
    },
    cap:{
      type:String,
      default:"Caption"
    },
    desc:{
      type:String,
      default:"Description"
    }
  },
  computed: {
    ...mapState(["profile"])
  }
};
</script>