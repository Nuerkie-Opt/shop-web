<template>
  <el-row :gutter="20">
    <el-col 
    :xs="24" :sm="smUp" :md="mdUp" :lg="lgUp" 
    v-for="col in rowData.length" 
    :key="col">

      <ItemCard 
      v-if="isCanvasType('card', col)" 
      :mode="getMode(col)" 
      :item="getItem(col)" 
      :row="row"
      :col="getCol(col)"/>

      <ItemJumbo 
      v-if="isCanvasType('jumbo', col)" 
      :mode="getMode(col)" 
      :item="getItem(col)"
      :row="row"
      :col="getCol(col)"/>

      <ItemCollage 
      v-if="isCanvasType('collage', col)" 
      :mode="getMode(col)" 
      :item="getItem(col)"
      :row="row"
      :col="getCol(col)"/>
      
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
      return 24 / this.rowData.length;
    },
    mdUp() {
      return 24 / (this.rowData.length-1)
    },
    smUp() {
      return 24 / (this.rowData.length-2)
    }
  },
  methods: {
    getCol(col) {
      // Rotates through columns in case canvas.len != modes.len
      return (col-1) % this.rowData.length;
    },
    getMode(col) {
      // get mode | image | carousel | 
      return 'image';
    },
    getItem(col) {
      // get item at current col from items prop
      col = this.getCol(col);
      return this.rowData[col];
    },
    isCanvasType(canvasType, col) {
      // Whether current item has canvas of canvasType
      const canvas = 'card';
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