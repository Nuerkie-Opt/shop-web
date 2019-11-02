<template>
  <el-card>
    <el-divider content-position="left">
      <i>Order Summary</i>
    </el-divider>
    <el-row style="font-size:18px">
      <el-col :span="18">
        <i>SubTotal :</i>
      </el-col>
      <el-col :span="6">
        <i><b>
          <el-tag style="margin-bottom:5px" type="primary" round><MoneySign :price="subTotal" /></el-tag>
        </b></i>
      </el-col>
    </el-row>
    <el-row style="font-size:18px">
      <el-col :span="18">
        <i>Delivery :</i>
      </el-col>
      <el-col :span="6">
        <i><b>
          <el-tag style="margin-bottom:5px" type="success" round><MoneySign :price="0" /></el-tag>
        </b></i>
      </el-col>
    </el-row>
    <!-- <el-row style="font-size:18px">
      <el-col :span="18">
        <i>Tax :</i>
      </el-col>
      <el-col :span="6">
        <i><b>
          <el-tag style="margin-bottom:5px" type="info" round><MoneySign :price="0" /></el-tag>
        </b></i>
      </el-col>
    </el-row> -->
    <el-row style="font-size:18px">
      <el-col :span="18">
        <i>Discount :</i>
      </el-col>
      <el-col :span="6">
        <i><b>
          <el-tag style="margin-bottom:5px" type="danger" round>- <MoneySign :price="9" /></el-tag>
        </b></i>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row style="font-size:18px">
      <el-col :span="18">
        <i>Total :</i>
      </el-col>
      <el-col :span="6">
        <i><b>
          <el-tag style="margin-bottom:5px" type="primary" round><MoneySign :price="990" /></el-tag>
        </b></i>
      </el-col>
    </el-row>
    <div v-if="summary">
      <el-divider></el-divider>
      <el-button style="width:100%" type="primary" @click="checkout">
        <i style="font-size:18px">
          <b>Checkout</b>
        </i>
      </el-button>
      <el-divider content-position="left">
        <i>Delivery Options</i>
      </el-divider>
      <el-divider content-position="left">
        <i>Payment Options</i>
      </el-divider>
      <el-row :gutter="5">
        <el-col v-for="i in 9" :key="i" :span="4">pay</el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import {mapGetters} from 'vuex';
import MoneySign from "./MoneySign.vue";

export default {
  components: {
    MoneySign
  },
  props: {
    summary: {
      type: Boolean,
      default: false
    },
    cart: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    checkout() {
      if (this.cart) {
        this.$router.push("checkout");
      }
    }
  },
  computed: {
    ...mapGetters(["cartItems"]),
    subTotal(){
      const subtotal = Object.values(this.cartItems).reduce((subtotal, order)=>{
        return subtotal+order.amount
      },0);
      
      return subtotal;
    }
  }
};
</script>
