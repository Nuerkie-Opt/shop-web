<template>
  <el-row :gutter="20">
    <el-col 
    :xs="24" :sm="smUp" :md="mdUp" :lg="lgUp" :xl="lgUp" 
    v-for="col in rowData.ncols" 
    :key="col">

      <ItemCard 
      v-if="isCanvasType('card', col)" 
      :mode="getMode(col)" 
      :item="getItem(col)" />

      <ItemJumbo 
      v-if="isCanvasType('jumbo', col)" 
      :mode="getMode(col)" 
      :item="getItem(col)" />

      <ItemCollage 
      v-if="isCanvasType('collage', col)" 
      :mode="getMode(col)" 
      :item="getItem(col)" />
      
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
  props: ["rowData"],
  computed: {
    lgUp() {
      return 24 / this.rowData.ncols;
    },
    mdUp() {
      return 24 / (this.rowData.ncols-1)
    },
    smUp() {
      return 24 / (this.rowData.ncols-2)
    }
  },
  methods: {
    getCol(col) {
      // Rotates through columns in case canvas.len != modes.len
      return (col-1) % this.rowData.ncols;
    },
    getMode(col) {
      // get mode at current col from appearance.modes props
      return this.getItem(col).mode;
    },
    getItem(col) {
      // get item at current col from items prop
      col = this.getCol(col);
      return this.rowData.items[col];
    },
    isCanvasType(canvasType, col) {
      // Whether current item has canvas of canvasType
      const canvas = this.getItem(col).canvas;
      return canvas === canvasType;
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