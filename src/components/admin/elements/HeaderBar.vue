<template>
  <el-row>
    <el-col :span="9"><b>User :</b> <i>{{username}}</i></el-col>
    <el-col :span="9"><b>Seller :</b> <i>{{sellername}}</i></el-col>
    <el-col :span="6" v-if="currentUser.user.level !== 'seller'">
      <el-button size="small" type="primary" @click="newSeller"> Switch Seller Account</el-button>
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
  methods: {
    newSeller(){
      
      this.$router.push('/a/seller/switch');
    }
  },
};
</script>

