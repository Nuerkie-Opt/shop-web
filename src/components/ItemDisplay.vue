<template>
  <div
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
    infinite-scroll-delay="1000"
  >

    <ItemRow v-for="i in count" :key="i" :rowData="rowData" />
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
import ItemRow from "./elements/ItemRow.vue";
import ItemsData from "../data/ItemsData";

export default {
  components:{
    ItemRow
  },
  data() {
    return {
      count: 10,
      loading: false,
      rowData: ItemsData
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>