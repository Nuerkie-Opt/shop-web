<template>
  <el-row :gutter="20">
    <el-col 
    :xs="24" :sm="smUp" :md="mdUp" :lg="lgUp" 
    v-for="(item, i) in rowData" 
    :key="i">

      <ItemCard :item="item"/>

      <!-- <ItemJumbo 
      v-if="isCanvasType('jumbo', col)" 
      :item="item"/>

      <ItemCollage 
      v-if="isCanvasType('collage', col)" 
      :item="item"/> -->
      
    </el-col>
  </el-row>
</template>

<script>
import ItemCard from "./ItemCard.vue";
import ItemJumbo from "./ItemJumbo.vue";
import ItemCollage from "./ItemCollage.vue";

export default {
  components:{
      ItemCollage,
      ItemJumbo,
      ItemCard
  },
  props: ["rowData", "row"],
  computed: {
    lgUp() {
      return 24 / this.row;
    },
    mdUp() {
      return 24 / (this.row-1)
    },
    smUp() {
      return 24 / (this.row-2)
    }
  }
};
</script>

<style scoped>
.el-row{
  margin-top:10px;
  margin-bottom:30px
}
</style>