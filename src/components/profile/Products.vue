<template>
  <div v-if="hasProfile&&isSeller">
    <JumboCarousel :images="brandImages" style="margin-bottom:20px" />
    <ItemRow :rowData="items" :row="3" />
    <el-button :type="btn" @click="more">{{btnTxt}}</el-button>
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
      limit: 9,
      items: [],
      loading: false,
      finished: false,
      btn:'primary',
      btnTxt:'Load More.'
    };
  },
  computed: {
    ...mapGetters(["profile","hasProfile","isSeller"]),
    brandImages(){
      if (this.hasProfile) {
        if (this.profile.user.info.profile) {
          if (this.profile.user.info.profile.brand) {
            return this.profile.user.info.profile.brand;
          }
        }
      }
      return [];
    }
  },
  methods: {
    more(){
      if(this.finished){
        this.btn = 'primary';
        this.btnTxt = 'Load More.';
        this.finished = false;
        this.page = 1;
      }
      this.load();
    },
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
              this.btn = 'info';
              this.btnTxt = 'Refresh.';
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


