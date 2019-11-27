<template>
  <div class="details">
    <el-row :gutter="30" v-if="!loading">
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <el-row>
          <ItemDetailImage :image="currentImage" />
        </el-row>
        <el-row style="margin-top:10px;margin-bottom:10px">
          <ItemDetailThumbs :images="images" />
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <ItemDetailInfo :buyable="buyable" :editable="editable" :item="item" :options="item.item.options" />
      </el-col>
      <el-col style="margin-top:10px;margin-bottom:100px">
        <ItemTabInfo :item="item" />
      </el-col>
    </el-row>
    <div style="height:200px" v-loading="loading"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
  props:{
    buyable:{
      type:Boolean,
      default:true
    },
    editable:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      currentIndex: [0,0],
      item: {},
      constItem: {},
      loading:false,
      properties:['default'],
      imgs:[]
    };
  },
  computed: {
    ...mapGetters(["itemsD"]),
    photos(){
      return [this.item.item.images, ...this.imgs]
    },
    images(){
      // return this.item.item.images;

      return this.properties.map((prop,i)=>{
        return {'name':prop,'images':this.photos[i]};
      });
    },
    currentImage(){
      const images = this.images[this.currentIndex[0]].images;
      return images[this.currentIndex[1]].url
    }
  },
  methods: {
    ...mapActions(["append_order", "loadItemsD"]),
    handleCarter(q) {
      const product = JSON.parse(JSON.stringify(this.item));
      const order = {
        item: product,
        quantity: q,
        amount: q * this.item.item.price,
      };

      this.append_order(order);
    },
    handleChopt(val) {
      let changes = {
        images: [],
        name: "",
        price: this.constItem.item.price
      };
      let properties = [];
      let photos = [];
      Object.values(val).forEach(value => {
        if (value) {
          // changes.images = [...changes.images, ...value.images];
          photos.push(value.images);
          changes.price =
            value.price >= changes.price ? value.price : changes.price;
          changes.name = `${changes.name} #${value.name}`;
          properties.push(value.name);
        }
      });
      this.imgs = photos;
      this.properties = ['default', ...properties];
      // this.item.item.images = [
      //   ...this.constItem.item.images,
      //   ...changes.images
      // ];
      this.item.item.price = changes.price;
      this.item.item.name = `${this.constItem.item.name} ${changes.name}`;
    },
    load() {
      this.loading = true;
      if (this.itemsD) {
        if (this.itemsD.hasOwnProperty(this.$route.params.item)) {
          this.item = JSON.parse(JSON.stringify(this.itemsD[this.$route.params.item]));
          this.constItem = JSON.parse(JSON.stringify(this.itemsD[this.$route.params.item]));
          this.loading = false;
          return;
        }

      }
      const params = {item:this.$route.params.item};
      const args = {actions: this.$actions, params:params};
      this.loadItemsD(args).then((missing)=>{
        if(missing){
          this.$message.error('Item Does Not Exist 😕.')
        }
        this.item = JSON.parse(JSON.stringify(this.itemsD[this.$route.params.item]));
        this.constItem = JSON.parse(JSON.stringify(this.itemsD[this.$route.params.item]));
        this.loading = false
      });
    }
  },
  watch: {
    $route(to, from) {
      // react to route changes...
    }
  },
  mounted() {
    this.$eventBus.$on("thumbed", i => (this.currentIndex = i));
    this.$eventBus.$on("chopt", val => this.handleChopt(val));
    this.$eventBus.$on("carter", q => this.handleCarter(q));
  },
  beforeMount() {
    this.load();
  },
  destroyed() {
    this.$eventBus.$off();
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
.details {
  margin-top: 40px;
}
</style>