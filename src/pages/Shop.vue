<template>
    <el-container>

      <el-header>
        <HeaderBar/>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
      
    </el-container>
</template>

<script>
import HeaderBar from "../components/shop/HeaderBar.vue";
import axios from 'axios';
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    HeaderBar
  },
  computed: {
    ...mapGetters(['userLoc']),
  },
  methods: {
    ...mapMutations(['set_location'])
  },
  created() {
    if (this.userLoc) {
      return;
    }

    axios.get('https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572').then(res=>{
      this.set_location(res.data);
    })
  },
};
</script>

<style>
.el-header,
.el-container,
.el-main {
  margin: 0;
  padding: 0;
}
.el-header {
  position: fixed;
  width: 100%;
  z-index:999
}
.el-card {
  position: relative;
}
.el-card__body {
  padding: 10px;
}

.el-main {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

@media only screen and (min-width: 768px) {
  .el-main {
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
}

</style>
