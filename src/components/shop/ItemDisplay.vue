<template>
  <div
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
    infinite-scroll-delay="1000"
  >

    <ItemRow v-for="i in count" :key="i" :rowData="items" />
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
import ItemRow from "../elements/ItemRow.vue";
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
      'items'
    ])
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