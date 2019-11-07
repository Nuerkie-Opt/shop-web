<template>
  <el-menu mode="horizontal" :default-active="activeIndex" :unique-opened="true" :router="true" class="menubar">
    <el-menu-item index="/about">About us</el-menu-item>
    <el-submenu index="c">
      <template slot="title">Categories</template>
      <template v-for="(menu, i) in getMenus">
        <div :key="i">
          <el-menu-item :index="`/c/${menu.link}`">{{menu.name}}</el-menu-item>
          <template v-if="menu.subs">
            <el-submenu :index="`${i}`">
              <template v-for="(sub, j) in menu.subs">
                <el-menu-item :index="`/c/s/${sub.link}`" :key="j">{{sub.name}}</el-menu-item>
              </template>
            </el-submenu>
          </template>
        </div>
      </template>
    </el-submenu>
    <el-submenu index="t">
      <template slot="title">Tags</template>
      <el-menu-item index="/t">All Tags</el-menu-item>
      <el-menu-item index="/t/popular">Popular Tags</el-menu-item>
      <el-menu-item index="/t/new">New Tags</el-menu-item>
    </el-submenu>
    <el-submenu index="v">
      <template slot="title">Vendors</template>
      <el-menu-item index="/vendors">List of Vendors</el-menu-item>
      <el-menu-item index="/sell">Become a Vendor</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMenus"]),
    activeIndex() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item {
  float: left;
  height: 30px;
  line-height: 30px;
  border-bottom: 0px solid transparent;
  color: #909399;
}
.el-menu--horizontal >>> .el-submenu .el-submenu__title {
  height: 30px;
  line-height: 30px;
  border-bottom: 0px solid transparent;
  color: #909399;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>