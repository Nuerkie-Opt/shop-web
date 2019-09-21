<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="16">
      <template v-for="(cart,i) in cartItems">
        <CartItem :item="cart.item" :quantity="cart.quantity" :options="cart.options" :key="i"></CartItem>
      </template>
    </el-col>
    <el-col :xs="24" :sm="8">
      <el-card >
        <el-row style="font-size:18px">
          <el-col :span="20"><i>Total :</i></el-col>
          <el-col :span="4"><i>$999</i></el-col>
        </el-row>
        <el-row style="font-size:18px">
          <el-col :span="20"><i>Total :</i></el-col>
          <el-col :span="4"><i>$999</i></el-col>
        </el-row>
        <el-divider></el-divider>
        <el-button style="width:100%" type="info">
          <i style="font-size:18px"><b>Checkout</b></i>
        </el-button>
        <el-divider content-position="left"><i>Payment Options</i></el-divider>
        <el-row :gutter="5">
          <el-col v-for="i in 9" :key="i" :span="4">pay</el-col>
        </el-row>
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