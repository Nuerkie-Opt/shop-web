<template>
  <el-row :gutter="30">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
      <el-row>
        <ItemDetailImage :image="item.item.images[currentIndex].url" />
      </el-row>
      <el-row style="margin-top:10px;margin-bottom:10px">
        <ItemDetailThumbs :images="item.item.images" />
      </el-row>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
      <ItemDetailInfo :item="item.item" :options="item.item.options" />
    </el-col>
    <el-col style="margin-top:10px;margin-bottom:100px">
      <ItemTabInfo :item="item" />
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
import ItemDetailImage from "./elements/ItemDetailImage.vue";
import ItemDetailInfo from "./elements/ItemDetailInfo.vue";
import ItemTabInfo from "./elements/ItemTabInfo.vue";
import ItemDetailThumbs from "./elements/ItemDetailThumbs.vue";

export default {
  components: {
    ItemDetailImage,
    ItemDetailThumbs,
    ItemDetailInfo,
    ItemTabInfo
  },
  data() {
    return {
      currentIndex: 0,
      item: {},
      constItem: {}
    };
  },
  computed: {
    ...mapState(["productMatrix"])
  },
  methods: {
    handleChopt(val) {
      let changes = {
        images: [],
        name: "",
        price: 0
      };

      Object.values(val).forEach(value => {
        if (value) {
          console.log(value);
          changes.images = [...changes.images, ...value.images];
          changes.price = value.price > changes.price ? changes.price : value.price;
          changes.name = `${changes.name}; ${value.name}`;
        }
      });

      console.log(changes);

      this.item.item.images = [
        ...this.constItem.item.images,
        ...changes.images
      ];
      this.item.item.price =
        changes.price > this.item.item.price
          ? changes.price
          : this.item.item.price;
      this.item.item.name = `${this.constItem.item.name} ${changes.name}`;
    }
  },
  mounted() {
    this.$eventBus.$on("thumbed", i => (this.currentIndex = i));
    this.$eventBus.$on("chopt", val => this.handleChopt(val));
  },
  beforeMount() {
    this.item = JSON.parse(
      JSON.stringify(
        this.productMatrix[this.$route.query.r][this.$route.query.c]
      )
    );
    this.constItem = JSON.parse(
      JSON.stringify(
        this.productMatrix[this.$route.query.r][this.$route.query.c]
      )
    );
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