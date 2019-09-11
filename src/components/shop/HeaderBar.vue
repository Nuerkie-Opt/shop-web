<template>
  <el-card class="box-card">
    <el-row :gutter="10" type="flex" align="middle" justify="center">
      <el-col :xs="7" :sm="4" :md="4" :lg="3" :xl="3">
        <span style="font-size:18px">AFRICANIZ</span>
      </el-col>
      <el-col :xs="9" :sm="11" :md="12" :lg="14" :xl="14">
        <SearchBar />
      </el-col>
      <el-col :xs="8" :sm="9" :md="8" :lg="7" :xl="7">
        <el-row :gutter="10" type="flex" align="middle" justify="end">
          <el-col class="hidden-xs-only">
            <el-button type="primary" icon="el-icon-goods" size="small" plain circle></el-button>
          </el-col>
          <el-col class="hidden-xs-only">
            <el-button type="primary" icon="el-icon-goods" size="small" plain circle></el-button>
          </el-col>
          <el-col class="hidden-xs-only">
            <el-button type="primary" icon="el-icon-goods" size="small" plain circle></el-button>
          </el-col>
          <el-col class="hidden-xs-only">
            <el-button type="primary" icon="el-icon-goods" size="small" plain circle></el-button>
          </el-col>
          <el-col>
            <el-button type="info" icon="el-icon-goods" size="small" plain circle></el-button>
          </el-col>
          <el-col>
            <el-badge :value="0" :max="99" class="counter">
              <el-button type="danger" size="small" icon="el-icon-goods" plain circle></el-button>
            </el-badge>
          </el-col>
          <el-col>
            <el-button type="info" icon="el-icon-goods" size="small" plain circle></el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="10" type="flex" align="middle" justify="center">
      <el-col :xs="24" :sm="15" :md="16" :lg="17" :xl="17">
        <MenuBar />
      </el-col>
      <el-col class="hidden-xs-only" :sm="9" :md="8" :lg="7" :xl="7">
        <el-button class="extra-btn" type="text">Extra</el-button>
        <el-button class="extra-btn" type="text">Menu</el-button>
        <el-button class="extra-btn" type="text">Items</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import SearchBar from "../elements/SearchBar.vue";
import MenuBar from "../elements/MenuBar.vue";

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
