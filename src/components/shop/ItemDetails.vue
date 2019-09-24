<template>
  <el-row :gutter="30">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
      <el-row>
        <ItemDetailCarousel :images="item.images" />
      </el-row>
      <el-row style="margin-top:10px;margin-bottom:10px">
        <ItemDetailThumbs :images="item.images" />
      </el-row>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
      <ItemDetailInfo :item="item" />
    </el-col>
    <el-col style="margin-top:10px;margin-bottom:100px">
      <ItemTabInfo :item="item" />
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
import ItemDetailCarousel from "../elements/ItemDetailCarousel.vue";
import ItemDetailInfo from "../elements/ItemDetailInfo.vue";
import ItemTabInfo from "../elements/ItemTabInfo.vue";
import ItemDetailThumbs from "../elements/ItemDetailThumbs.vue";

export default {
  components: {
    ItemDetailCarousel,
    ItemDetailThumbs,
    ItemDetailInfo,
    ItemTabInfo
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
    imgClose() {
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
  background-color: transparent !important;
}

.transmodal .el-dialog__body {
  padding: 0px;
}
</style>