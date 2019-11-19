<template>
  <el-row :gutter="20">
    <el-col :span="10"><b>User :</b> <i>{{username}}</i></el-col>
    <el-col :span="10"><b>Seller :</b> <i>{{sellername}}</i></el-col>
    <el-col :span="4">
      <el-button size="small" type="primary"> Switch Seller Account</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  computed: {
    ...mapGetters(['currentUser','currentSeller']),
    username(){
      if(this.currentUser){
        return `${this.currentUser.user.name} (${this.currentUser.user.level})`;
      }else{
        return 'Error...'
      }
    },
    sellername(){
      if(this.currentSeller){
        return `${this.currentSeller.user.name}`;
      }else{
        return 'None'
      }
    }
  },
};
</script>

