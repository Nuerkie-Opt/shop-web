<template>
  <el-container :style="{height: hh+'px',border: '1px solid #eee'}">
    <el-header>
      <el-row>
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item :index="`/profile`" v-if="hasProfile&&isSeller">
            <i class="el-icon-takeaway-box"></i>
            Products
            <el-badge :value="profile.user.products" :max="99" class="item"></el-badge>
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
            <el-badge is-dot class="item" v-if="profile.user.notes>0"></el-badge>
          </el-menu-item>
          <el-menu-item :index="`/profile/settings`" class="hidden-xs-only">
            <i class="el-icon-setting"></i>
            Settings
          </el-menu-item>
          <el-menu-item :index="`/a/`" class="hidden-xs-only" v-if="hasProfile&&isSeller">
            <i class="el-icon-set-up"></i>
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
    <el-main v-if="!loading" style="margin-top:60px">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="18">
          <router-view></router-view>
        </el-col>
        <el-col :sm="6" class="hidden-xs-only">
          <ProfileDetails :profile="profile" :hasProfile="hasProfile" :isSeller="isSeller" />
        </el-col>
         <div style="height:200px" v-loading="loading"></div>
      </el-row>
    </el-main>
   
  </el-container>
</template>

<script>
import { isLoggedIn } from "../utils.js";
import ProfileDetails from "../components/profile/elements/ProfileDetails.vue";
import { mapState, mapMutations, mapGetters } from "vuex";
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
  },
  methods: {
    ...mapMutations(["set_profile"]),
    load(uid,utkn) {
      this.loading = true;
      const payload = {
        "111": {
          get_user: { id: uid },
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
            let profile = resp.data;
            profile.token = utkn;
            this.set_profile(profile);
            this.loading = false;
            if (!this.isSeller) {
                this.$router.push(`/profile/combos`).catch(err=>{});
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
  async beforeRouteEnter(to, from, next) {
    const user = await isLoggedIn();

    if (user) {
      next();
    } else {
      next(vm=>vm.$router.push('/auth/login?next=/profile'));
    }
  },
  created() {
    let user = localStorage.getItem('user');

    if(user){
      user = JSON.parse(user);
      this.load(user.user.id,user.token);
    }else{
      this.$router.push('/auth/login?next=/profile')
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