<template>
  <div>
    <UserForm mode="edit" :dat="dat" v-if="!loading"/>
    <div style="height:200px" v-loading="loading"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserForm from "./elements/UserForm.vue";
export default {
  components: {
    UserForm
  },
  data() {
    return {
      dat: {},
      loading: false
    };
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
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
            this.dat = resp.data;
            this.loading = false;
          } else {
            // console.log(resp);
            this.$notify.error(resp.msg);
          }
        })
        .catch(error => {
          // console.log(error);
        });
    }
  },
  created() {
    if (this.currentUser.user.level !== "root") {
        this.$router.push("/a");
        this.$notify.warning("Not Authorized.");
        return ;
      }
    this.load();
  }
};
</script>