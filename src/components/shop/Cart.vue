<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="16">
      <template v-for="(cart,i) in cartItems">
        <CartItem :item="cart.item" :key="i"></CartItem>
      </template>
    </el-col>
    <el-col :xs="24" :sm="8">
      <el-card>
        <div>total</div>
        <div>total</div>
        <div>total</div>
        <el-divider></el-divider>
        <div>Payment systems</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import CartItem from "../elements/CartItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapState(["cartItems"])
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .el-row{
    padding-left:8%;
    padding-right:8%;
  }
}
</style>