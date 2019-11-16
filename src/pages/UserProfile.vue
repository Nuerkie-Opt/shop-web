<template>
  <el-container :style="{height: hh+'px',border: '1px solid #eee'}">
    <el-header>
      <el-row>
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item :index="`/profile`">
            <i class="el-icon-takeaway-box"></i>
            Products
            <el-badge :value="200" :max="99" class="item"></el-badge>
          </el-menu-item>
          <el-menu-item :index="`/profile/combos`">
            <i class="el-icon-loading"></i>
            Combos
          </el-menu-item>
          <el-menu-item :index="`/profile/posts`" class="hidden-xs-only">
            <i class="el-icon-postcard"></i>
            Posts
          </el-menu-item>
          <el-menu-item :index="`/profile/activity`" class="hidden-xs-only">
            <i class="el-icon-magic-stick"></i>
            Activities
          </el-menu-item>
          <el-menu-item :index="`/profile/messages`" class="hidden-xs-only">
            <i class="el-icon-chat-square"></i>
            Messages
            <el-badge is-dot class="item"></el-badge>
          </el-menu-item>
          <el-menu-item :index="`/profile/settings`" class="hidden-xs-only">
            <i class="el-icon-setting"></i>
            Settings
          </el-menu-item>
          <el-menu-item :index="`/a/`" class="hidden-xs-only">
            <i class="el-icon-unlock"></i>
            Admin
          </el-menu-item>
          <el-menu-item index="/" class="hidden-xs-only">
            <i class="el-icon-shopping-cart-1"></i>
            Shop
          </el-menu-item>
          <el-menu-item class="hidden-sm-and-up">
            <i class="el-icon-more-outline"></i>
          </el-menu-item>
        </el-menu>
      </el-row>
    </el-header>
    <el-main v-if="!loading">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="18">
          <router-view></router-view>
        </el-col>
        <el-col :sm="6" class="hidden-xs-only">
          <ProfileDetails />
        </el-col>
      </el-row>
    </el-main>
    <div style="height:200px" v-loading="loading"></div>
  </el-container>
</template>

<script>
import { isLoggedIn } from "../utils.js";
import ProfileDetails from "../components/profile/elements/ProfileDetails.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    ProfileDetails
  },
  data() {
    return {
      user: this.$route.params.user,
      hh: window.innerHeight,
      loading: false
    };
  },
  computed: {
    ...mapState(["profile"])
  },
  methods: {
    ...mapMutations(["set_profile"]),
    load() {
      this.loading = true;
      const payload = {
        "111": {
          get_user: { id: this.$route.params.user },
          "000": ["get_user"]
        },
        "000": ["111"]
      };
      this.$actions
        .post("/action", payload)
        .then(response => {
          console.log(response);
          const resp = response.data["111"].get_user;
          if (resp.status) {
            this.set_profile(resp.data);
            this.loading = false;
          } else {
            console.log(resp);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  async beforeRouteEnter(to, from, next) {
    const logged_in = await isLoggedIn();

    if (logged_in) {
      next(vm => {
        vm.load();
      });
    } else {
      next(vm=>vm.$router.push('/auth/login'));
    }
  }
};
</script>

<style scoped>
.el-header {
  padding: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.el-menu-item {
  padding-left: 10px;
  padding-right: 10px;
}
</style>