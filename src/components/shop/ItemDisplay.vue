<template>
  <div class="display">
    <ItemRow :row="4" :rowData="productMatrix" />
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
      loading: false,
      finished:false,
      page:1,
      limit:12
    };
  },
  computed: {
    ...mapGetters(["productMatrix"])
  },
  methods: {
    
    load() {
      // append rows to product matrix
      this.loading = true;
      const params = {limit:this.limit, page: this.page}
      const args = {actions: this.$actions, params:params}
      this.$store.dispatch('loadProducts', args).then((finished)=>{
        if (finished) {
          this.$message("That's all we've got for now 😁.");
          this.finished = true;
        }
        this.loading = false;
        this.page++;
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