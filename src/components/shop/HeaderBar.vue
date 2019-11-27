<template>
  <el-card class="box-card">
    <el-row :gutter="10" type="flex" align="middle" justify="center">
      <el-col :xs="4" :sm="4">
        <el-button
          @click="drawer = true"
          type="primary"
          size="small"
          class="hidden-sm-and-up"
          icon="el-icon-s-unfold"
          plain
          circle
        ></el-button>
        <span style="font-size:18px" class="hidden-xs-only">AFRICANIZ</span>
      </el-col>
      <el-col :xs="10" :sm="15">
        <MenuBar class="hidden-xs-only" v-if="$route.path !== '/checkout'" />
      </el-col>
      <el-col :xs="10" :sm="4">
        <el-row :gutter="10" type="flex" align="middle" justify="end">
          <el-col>
            <el-tooltip content="Search / Filter" placement="bottom" effect="light">
              <el-button @click="searchFilterVisible = true" type="primary" size="small" icon="el-icon-search" plain circle></el-button>
            </el-tooltip>
          </el-col>
          <el-col>
            <el-tooltip content="Combination" placement="bottom" effect="light">
              <el-button type="primary" size="small" icon="el-icon-loading" @click="$message.info('Combos coming soon 😋 ...')" plain circle></el-button>
            </el-tooltip>
          </el-col>
          <el-col>
            <el-tooltip content="Cart" placement="bottom" effect="light">
              <el-badge :value="cartCount" :max="99" class="counter">
                <el-button
                  type="danger"
                  size="small"
                  @click="$router.push('/cart')"
                  icon="el-icon-goods"
                  plain
                  circle
                ></el-button>
              </el-badge>
            </el-tooltip>
          </el-col>
          <el-col>
            <el-dropdown>
              <el-button type="primary" icon="el-icon-user" size="small" plain circle></el-button>
              <el-dropdown-menu slot="dropdown" v-if="loggedIn">
                <el-dropdown-item
                  icon="el-icon-cold-drink"
                  @click.native="$router.push('/profile')"
                >Profile</el-dropdown-item>
                <el-dropdown-item icon="el-icon-refrigerator" @click.native="logout">Logout</el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu slot="dropdown" v-else>
                <el-dropdown-item
                  icon="el-icon-unlock"
                  @click.native="$router.push('/auth/login')"
                >Login</el-dropdown-item>
                <el-dropdown-item
                  icon="el-icon-mouse"
                  @click.native="$router.push('/auth/register')"
                >Register</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-drawer :visible.sync="drawer" direction="ttb">
      <MenuBar class="hidden-sm-and-up" />
    </el-drawer>
    <el-dialog :visible.sync="searchFilterVisible" width="80%" append-to-body>
    <template slot="title">
        <div style="font-size:18px">
          <el-tag type="info" style="font-size:18px">
              <i>Search / Filter Items</i>
          </el-tag>
        </div>
      </template>
      <SearchBar />
    </el-dialog>
  </el-card>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import SearchBar from "./elements/SearchBar.vue";
import MenuBar from "./elements/MenuBar.vue";

export default {
  components: {
    SearchBar,
    MenuBar
  },
  data() {
    return {
      drawer: false,
      circleUrl: "",
      searchFilterVisible: false
    };
  },
  computed: {
    ...mapGetters(["cartCount", "loggedIn"])
  },
  methods: {
    ...mapMutations(["set_login"]),
    logout() {
      this.$confirm("Are you sure you want to logout?", {
        confirmButtonText: "Continue.",
        cancelButtonText: "Abort.",
        type: "warning",
        center: true
      })
        .then(_ => {
          localStorage.clear();
          this.set_login(false);
          window.location.reload();
        })
        .catch(_ => {
          this.$message.warning("cancelled.");
        });
    }
  },
  beforeMount() {
    if (!this.cartCount) {
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
.el-divider--horizontal {
  margin: 10px 0;
}
.extra-btn {
  padding: 0px;
}
</style>
