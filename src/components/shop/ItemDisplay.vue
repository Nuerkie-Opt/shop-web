<template>
  <div>
    <ItemRow v-for="(row, i) in productMatrix" :key="i" :row="i" :rowData="row" />
    <div style="margin:0px;padding:0px; height:200px" v-loading="loading"></div>
  </div>
</template>

<script>
import ItemRow from "./elements/ItemRow.vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

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
    ...mapState(["productMatrix"])
  },
  methods: {
    makeRows(products) {
      let productRows = [];
      let i = 0;
      while (true) {
        productRows.push(products.slice(4 * i, 4 * (i + 1)));
        if (4 * (i + 1) >= products.length) {
          break;
        } else {
          i++;
        }
      }
      return productRows;
    },
    load() {
      // append rows to product matrix
      this.loading = true;
      const payload = {
        "111": {
          get_items: { limit: 10 },
          "000": ["get_items"]
        },
        "000": ["111"]
      };
      // show loader
      this.$actions
        .post("/action", payload)
        .then(response => {
          // handle success
          console.log(response);
          const data = response.data["111"].get_items;
          console.log(this.makeRows(data));
          this.append_products(this.makeRows(data));
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
          // always executed
          // remove loader
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
    ...mapMutations(["append_products"])
  },
  mounted() {
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