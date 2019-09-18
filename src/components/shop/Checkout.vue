<template>
  <div>
    <el-steps :space="200" :active="active" finish-status="success" simple>
      <el-step title="Where can we find you? 🤔" icon="el-icon-location"></el-step>
      <el-step title="How are you paying? 🤑" icon="el-icon-s-finance"></el-step>
      <el-step title="Confirm and ship. 😁" icon="el-icon-s-promotion"></el-step>
    </el-steps>
    <br/>
    <el-card >
    <el-button style="margin-top: 20px;" @click="next">Next step</el-button>
    </el-card>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>


<style scoped>

</style>