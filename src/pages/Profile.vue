<template>
  <el-container>
    <el-header>
      <el-row>
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item :index="`/p/${user}/`" v-if="hasProfile&&isSeller">
            <i class="el-icon-takeaway-box"></i>
            Products
            <el-badge :value="profile.user.products" :max="99" class="item"></el-badge>
          </el-menu-item>
          <el-menu-item :index="`/p/${user}/combos`">
            <i class="el-icon-loading"></i>
            Combos
          </el-menu-item>
          <el-menu-item :index="`/p/${user}/posts`" class="hidden-xs-only">
            <i class="el-icon-postcard"></i>
            Posts
          </el-menu-item>
          <el-menu-item :index="`/p/${user}/activity`" class="hidden-xs-only">
            <i class="el-icon-magic-stick"></i>
            Activities
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
        <el-col :xs="24" :sm="widthSeller">
          <router-view></router-view>
        </el-col>
        <el-col :sm="6" class="hidden-xs-only" v-if="isSeller">
          <ProfileDetails :profile="profile" :hasProfile="hasProfile" :isSeller="isSeller"/>
        </el-col>
        <div style="height:200px" v-loading="loading"></div>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ProfileDetails from "../components/profile/elements/ProfileDetails.vue";
import { mapGetters, mapMutations } from "vuex";
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
    ...mapGetters(["profile","hasProfile","isSeller"]),
    widthSeller(){
      return this.isSeller ? 18 : 24;
    }
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
          // console.log(response);
          const resp = response.data["111"].get_user;
          if (resp.status) {
            this.set_profile(resp.data);
            this.loading = false;
            if (!this.isSeller) {
                this.$router.push(`/p/${this.user}/combos`).catch(err=>{});
            }
          } else {
            // console.log(resp);
          }
        })
        .catch(error => {
          // console.log(error);
        });
    }
  },
  created() {
    this.load();
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