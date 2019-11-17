<template>
  <div v-if="hasProfile&&isSeller">
    <JumboCarousel :images="profile.user.info.profile.brand" style="margin-bottom:20px" />
    <ItemRow :rowData="items" :row="3" />
    <el-button type="primary" v-if="!finished" @click="load">Load More.</el-button>
    <div style="height:200px" v-loading="loading"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ItemRow from "../shop/elements/ItemRow.vue";
import JumboCarousel from "./elements/JumboCarousel.vue";
export default {
  components: {
    JumboCarousel,
    ItemRow
  },
  data() {
    return {
      page: 1,
      limit: 8,
      items: [],
      loading: false,
      finished: false
    };
  },
  computed: {
    ...mapState(["profile"]),
    ...mapGetters(["hasProfile","isSeller"])
  },
  methods: {
    load() {
      this.loading = true;
      const payload = {
        "111": {
          get_items: {
            page: this.page,
            limit: this.limit,
            fetch: true,
            seller: this.profile.user.id
          },
          "000": ["get_items"]
        },
        "000": ["111"]
      };
      this.$actions
        .post("/action", payload)
        .then(response => {
          console.log(response);
          const resp = response.data["111"].get_items;
          if (resp.status) {
            if (resp.data.length !== 0) {
              this.items = resp.data;
              this.page++;
            }else{
              this.finished = true;
              this.$message.info("That's all they've got 😁");
            }
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
  created() {
    if (this.isSeller) {
        this.load();
    }
    
  }
};
</script>


