<template>
  <div class="display">
    <ItemRow v-for="(row, i) in productMatrix" :key="i" :row="i" :rowData="row" />
    <div style="margin:0px;padding:0px; height:200px" v-loading="loading"></div>
      <el-backtop target=".el-main"></el-backtop>
  </div>
</template>

<script>
import ItemRow from "./elements/ItemRow.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ItemRow
  },
  data() {
    return {
      count: 10,
      loading: false
    };
  },
  computed: {
    ...mapGetters(["productMatrix"])
  },
  methods: {
    
    load() {
      // append rows to product matrix
      this.loading = true;
      this.$store.dispatch('loadItems', this.$actions).then(()=>{
        this.loading = false;
      });
      
    },
    handleScroll(event) {
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

      let y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
        
      if (
        window.innerHeight + y >=
        document.body.offsetHeight
      ) {
        this.load();
      }
    },
  },
  beforeMount() {
    if(this.productMatrix){
      this.$message("Keep on scrolling for new stuff 😋.")
      return;
    }
    this.load();
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.display{
  margin-top: 90px;
}
</style>