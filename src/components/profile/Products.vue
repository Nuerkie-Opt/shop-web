<template>
  <div>
    <JumboCarousel style="margin-bottom:20px"/>
    <ItemRow v-for="(row, i) in productMatrix" :key="i" :row="i" :rowData="row" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ItemRow from "../shop/elements/ItemRow.vue";
import JumboCarousel from "./elements/JumboCarousel.vue";
export default {
  components: {
    JumboCarousel,
    ItemRow
  },
  computed: {
    ...mapGetters(['productMatrix'])
  }
};
</script>


