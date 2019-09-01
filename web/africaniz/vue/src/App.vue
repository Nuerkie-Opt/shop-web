<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-card class="box-card">
          <el-row :gutter="10" type="flex" align="middle" justify="center">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
              
            </el-col>
            <el-col :xs="4" :sm="6" :md="12" :lg="14" :xl="14">
              <SearchBar />
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="7" :xl="7">
              <el-row :gutter="10" type="flex" align="middle" justify="center">
                <el-col>
                  <el-button type="success" size="medium">Register</el-button>
                </el-col>
                <el-col>
                  <el-button type="primary" size="medium">Login</el-button>
                </el-col>
                <el-col>
                  <el-badge :value="0" :max="99" class="counter">
                    <el-button type="danger" size="medium" icon="el-icon-goods" plain circle></el-button>
                  </el-badge>
                </el-col>
                <el-col>
                  <el-avatar size="medium" :src="circleUrl"></el-avatar>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row :gutter="10" type="flex" align="middle" justify="center">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
              
            </el-col>
            <el-col :xs="4" :sm="6" :md="12" :lg="14" :xl="14">
              <MenuBar />
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="5" :xl="5">
              <el-button class="extra-btn" type="text">Extra</el-button> 
              <el-button class="extra-btn" type="text">Menu</el-button> 
              <el-button class="extra-btn" type="text">Items</el-button> 
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="2" :xl="2">
                <span>GH</span>
            </el-col>
          </el-row>
        </el-card>
      </el-header>
      <el-main>Items List</el-main>
    </el-container>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import MenuBar from "./components/MenuBar.vue";

export default {
  components: {
    SearchBar,
    MenuBar
  },
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  }
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
}
.el-card {
  position: relative;
}
.el-card__body {
  padding: 10px;
}
.el-main {
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.el-divider {
  margin: 10px 0;
}
.extra-btn {
  padding:0px;
}
</style>
