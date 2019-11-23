<template>
  <el-menu
    mode="horizontal"
    :default-active="activeIndex"
    :unique-opened="true"
    class="menubar"
  >
    <el-menu-item index="/" @click="goto('/')">Shop</el-menu-item>
    <el-submenu index="c">
      <template slot="title">Categories</template>
      <template v-for="(menu, i) in getMenus">
        <div :key="i">
          <el-submenu :index="`${i}`" v-if="menu.subs">
            <template slot="title">{{menu.name}}</template>
            <template v-for="(sub, j) in menu.subs">
              <el-menu-item @click="makeQ(`${menu.link},${sub.link}`)" :key="j">{{sub.name}}</el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item :index="`${i}`" @click="makeQ(`${menu.link}`)" v-else>{{menu.name}}</el-menu-item>
        </div>
      </template>
    </el-submenu>
    <el-submenu index="t">
      <template slot="title">Tags</template>

      <el-menu-item index="/t" @click="goto('/t')">All Tags</el-menu-item>
      <el-menu-item index="/t/popular" @click="goto('/t/popular')">Popular Tags</el-menu-item>
      <el-menu-item index="/t/new" @click="goto('/t/new')">New Tags</el-menu-item>
    </el-submenu>
    <el-submenu index="v">
      <template slot="title">Vendors</template>
      <el-menu-item index="/vendors" @click="goto('/vendors')">All Vendors</el-menu-item>
      <el-menu-item index="/sell" @click="goto('/sell')">Become a Vendor</el-menu-item>
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
  },
  methods: {
    goto(r) {
      this.$router.push(r);
    },
    makeQ(q) {
      this.$router.push(`/s/${q}/`).catch(err => {});
    }
  }
};
</script>

<style scoped>
.el-menu--horizontal >>> .el-menu-item {
  float: left;
  height: 30px;
  line-height: 30px;
  border-bottom: 0px solid transparent;
  color: #303133;
}
.el-menu--horizontal .el-submenu >>> .el-submenu__title {
  height: 30px;
  line-height: 30px;
  border-bottom: 0px solid transparent;
  color: #303133;
}
.el-menu--horizontal >>> .el-menu-item:hover {
  color: #0786ee;
}

.el-menu--horizontal .el-submenu >>> .el-submenu__title:hover {
  color: #0786ee;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu >>> .el-submenu__title {
    color: #303133;
}
.el-menu--horizontal .el-menu .el-menu-item:hover, .el-menu--horizontal .el-menu .el-submenu__title:hover {
    color: #0786ee;
}
</style>