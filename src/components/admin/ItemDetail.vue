<template>
  <div>
    <ItemDetails :buyable="false" :editable="true" />
  </div>
</template>

<script>

import ItemDetails from "../shop/ItemDetails.vue";

export default {
  components: {
    ItemDetails,
  }
};
</script>

<style >

</style>