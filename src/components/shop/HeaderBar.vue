<template>
  <el-card class="box-card">
    <el-row :gutter="10" type="flex" align="middle" justify="center">
      <el-col :xs="4" :sm="4">
        <span style="font-size:18px">AFRICANIZ</span>
      </el-col>
      <el-col :xs="10" :sm="15">
        <SearchBar />
      </el-col>
      <el-col :xs="10" :sm="4">
        <el-row :gutter="10" type="flex" align="middle" justify="end">
          <el-col>
            <el-tooltip content="Combination" placement="bottom" effect="light">
              <el-button type="primary" size="small" icon="el-icon-loading" plain circle></el-button>
            </el-tooltip>
          </el-col>
          <el-col>
            <el-tooltip content="Cart" placement="bottom" effect="light">
            <el-badge :value="cartCount" :max="99" class="counter">
              <el-button type="danger" size="small" @click="$router.push('/cart')" icon="el-icon-goods" plain circle></el-button>
            </el-badge>
            </el-tooltip>
          </el-col>
          <el-col>
            <el-tooltip content="Account" placement="bottom" effect="light">
            <el-button type="primary" icon="el-icon-user" size="small" @click="$router.push({ path:'/p/0/'})" plain circle></el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
        <MenuBar/>
    </el-row>
  </el-card>
</template>
<script>
import { mapGetters } from "vuex";
import SearchBar from "./elements/SearchBar.vue";
import MenuBar from "./elements/MenuBar.vue";

export default {
  components: {
    SearchBar,
    MenuBar
  },
  data() {
    return {
      circleUrl:
        "/images/4.jpg"
    };
  },
  computed: {
    ...mapGetters(['cartCount'])
  },
  beforeMount(){
    if(!this.cartCount){
      // try to load cart from server
    }
  }
};
</script>

<style scoped>
.el-card {
  position: relative;
}
.el-card__body {
  padding: 10px;
}
.el-divider--horizontal  {
  margin: 10px 0;
}
.extra-btn {
  padding: 0px;
}
</style>
