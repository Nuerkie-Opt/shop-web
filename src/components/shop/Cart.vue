<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="16">
      <el-card style="margin-bottom:20px;text-align:center" v-if="!cartItems">
        <p ><span style="font-size:24px;color:#606266;font-weight: 100;font-style:italic">Empty Cart.</span><span style="font-size:24px;color:#606266;font-weight: 100;">🙃</span></p> 
        <p>
          <i style="font-size:72px;color:#606266" class="el-icon-shopping-cart-1"></i>
        </p>
        <p><el-button type="primary" @click="$router.push('/')">
          <i>Continue to Enjoy Shopping with Us.</i>
        </el-button></p>
      </el-card>
      <CartItem
        v-for="(cart,i) in cartItems"
        :item="cart.item"
        :quantity="cart.quantity"
        :amount="cart.amount"
        :index="i"
        :r="cart.r"
        :c="cart.c"
        :key="i"
      ></CartItem>
    </el-col>
    <el-col :xs="24" :sm="8">
      <OrderSummary :summary="true" />
    </el-col>
  </el-row>
</template>

<script>
import CartItem from "./elements/CartItem.vue";
import MoneySign from "./elements/MoneySign.vue";
import OrderSummary from "./elements/OrderSummary.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    OrderSummary,
    MoneySign,
    CartItem
  },
  computed: {
    ...mapGetters(["cartItems"])
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .el-row {
    margin-top: 40px;
  }
}
</style>