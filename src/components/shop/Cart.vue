<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="16">
      <template v-for="(cart,i) in cartItems">
        <CartItem :item="cart.item" :quantity="cart.quantity" :amount="cart.amount" :key="i"></CartItem>
      </template>
    </el-col>
    <el-col :xs="24" :sm="8">
      <OrderSummary :summary="true"/>
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
  .el-row{
    padding-left:8%;
    padding-right:8%;
  }
}
</style>