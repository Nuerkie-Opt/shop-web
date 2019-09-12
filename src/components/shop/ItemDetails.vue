<template>
  <el-row :gutter="30">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
      <el-row>
        <ItemDetailCarousel :images="item.images" @click.native="enlarge" />
      </el-row>
      <el-row style="margin-top:10px;margin-bottom:10px">
        <ItemDetailThumbs :images="item.images" />
      </el-row>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
      <ItemDetailInfo :item="item" /><br><br>
      <ItemDetailInfo :item="item" />
    </el-col>
    <ItemDetailInfo :item="item" />
    <el-dialog :visible.sync="dialogVisible" width="60%" custom-class="transmodal" style="cursor:zoom-out">
      <img width="100%" :src="currentImage" alt @click="imgClose" />
    </el-dialog>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
import ItemDetailCarousel from "../elements/ItemDetailCarousel.vue";
import ItemDetailInfo from "../elements/ItemDetailInfo.vue";
import ItemDetailThumbs from "../elements/ItemDetailThumbs.vue";

export default {
  components: {
    ItemDetailCarousel,
    ItemDetailThumbs,
    ItemDetailInfo
  },
  data() {
    return {
      currentIndex: 0,
      dialogVisible: false
    };
  },
  computed: {
    currentImage() {
      return this.item.images[this.currentIndex];
    },
    item() {
      return this.productMatrix[this.$route.query.r]["items"][
        this.$route.query.c
      ];
    },
    ...mapState(["productMatrix"])
  },
  methods: {
    enlarge() {
      this.dialogVisible = true;
    },
    imgClose(){
      this.dialogVisible = false;
    }
  },
  mounted() {
    this.$eventBus.$on("item-changed", i => (this.currentIndex = i));
  }
};
</script>

<style >

.transmodal {
    background-color:transparent!important;
}

.transmodal .el-dialog__body {
  padding:0px
}
</style>