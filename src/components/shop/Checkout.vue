<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="18">
      <el-steps :space="200" :active="active" finish-status="success" simple>
        <el-step title="Where can we find you? 🤔" icon="el-icon-location"></el-step>
        <el-step title="How are you paying? 🤑" icon="el-icon-s-finance"></el-step>
        <el-step title="Confirm and ship. 😁" icon="el-icon-s-promotion"></el-step>
      </el-steps>
      <br />
      <el-card>
        <LocationDetails v-if="active==0" ref="locationDetails" />
        <PaymentDetails v-if="active==1" ref="paymentDetails" />
        <template v-if="active==2">
          <template v-for="(cart,i) in cartItems">
            <CartItem :item="cart.item" :quantity="cart.quantity" :options="cart.options" :key="i"></CartItem>
          </template>
        </template>
        <template v-if="active==3">
          processing
        </template>
        <el-button-group v-if="active!=3">
          <el-button type="primary" @click="prev" plain>
            <i class="el-icon-arrow-left"></i>Previous step
          </el-button>
          <el-button :type="nextStep[0]" @click="next">
            {{nextStep[1]}}
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </el-button-group>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="6">
      <OrderSummary />
    </el-col>
  </el-row>
</template>


<script>
import CartItem from "../elements/CartItem.vue";
import LocationDetails from "../elements/LocationDetials.vue";
import PaymentDetails from "../elements/PaymentDetails.vue";
import OrderSummary from "../elements/OrderSummary.vue";
import { mapState } from "vuex";

export default {
  components: {
    LocationDetails,
    PaymentDetails,
    OrderSummary,
    CartItem
  },
  data() {
    return {
      active: 1,
      infos: ["locationDetails", "paymentDetails"],
      orderDetails: {
        locationDetails: {},
        paymentDetails: {}
      }
    };
  },

  methods: {
    next() {
      if (this.active >= 2){
        this.active++;
        return false;
      }
      const form = this.infos[this.active];
      this.$refs[form]
        .getData()
        .then(value => {
          this.orderDetails[form] = value;
          this.active++;
          console.log(this.orderDetails[form]);
        })
        .catch(reason => {
          this.$message.error(reason);
        });
    },
    prev() {
      if (this.active-- <= 0) this.active = 0;
    }
  },
  computed:{
    nextStep(){
      if (this.active == 2){
        return ['success','Proceed to Checkout.']
      }else{
        return ['primary','Next Step']
      }
    },
    ...mapState(["cartItems"])
  }
};
</script>


<style scoped>
.el-card {
  padding: 20px;
  margin-bottom: 100px;
}
</style>