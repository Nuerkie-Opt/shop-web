<template>
  <div
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
    infinite-scroll-delay="1000"
  >

    <ItemRow v-for="(row, i) in productMatrix" :key="i" :row="i" :rowData="row" />
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
import ItemRow from "./elements/ItemRow.vue";
import { mapState } from 'vuex';

export default {
  components:{
    ItemRow
  },
  data() {
    return {
      count: 10,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
    ...mapState([
      'productMatrix'
    ])
  },
  methods: {
    load() {
      // append rows to product matrix
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>