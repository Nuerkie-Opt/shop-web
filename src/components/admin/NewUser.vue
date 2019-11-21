<template>
  <div>
    <UserForm />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserForm from "./elements/UserForm.vue";

export default {
  components: {
    UserForm
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  created() {
    
      if (this.currentUser.user.level !== "root") {
        this.$router.push("/a");
        this.$notify.warning("Not Authorized.");
      }
  }
};
</script>