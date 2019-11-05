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
        <i>
          <b>
            <el-tag style="margin-bottom:5px" type="primary" round>
              <MoneySign :price="subTotal" />
            </el-tag>
          </b>
        </i>
      </el-col>
    </el-row>
    <el-row style="font-size:18px" v-if="getDelivery">
      <el-col :span="18">
        <i>Delivery :</i>
      </el-col>
      <el-col :span="6">
        <i>
          <b>
            <el-tag style="margin-bottom:5px" type="success" round>
              <MoneySign :price="getDelivery.price" />
            </el-tag>
          </b>
        </i>
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
    </el-row> 
    <el-row style="font-size:18px">
      <el-col :span="18">
        <i>Discount :</i>
      </el-col>
      <el-col :span="6">
        <i><b>
          <el-tag style="margin-bottom:5px" type="danger" round>- <MoneySign :price="9" /></el-tag>
        </b></i>
      </el-col>
    </el-row>-->
    <el-divider></el-divider>
    <el-row style="font-size:18px">
      <el-col :span="18">
        <i>Total :</i>
      </el-col>
      <el-col :span="6">
        <i>
          <b>
            <el-tag style="margin-bottom:5px" type="primary" round>
              <MoneySign :price="total" />
            </el-tag>
          </b>
        </i>
      </el-col>
    </el-row>
    <div v-if="summary">
      <el-divider></el-divider>
      <el-button style="width:100%" type="primary" @click="checkout">
        <i style="font-size:18px">
          <b>Proceed to Checkout.</b>
        </i>
      </el-button>
    </div>
    <el-divider content-position="left">
      <i>Available Delivery Options.</i>
    </el-divider>

    <el-divider content-position="left">
      <i>Available Payment Options.</i>
    </el-divider>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
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
  data() {
    return {};
  },
  methods: {
    checkout() {
      if (this.cart) {
        if (!this.subTotal) {
          this.$message.info("Empty Cart, Enjoy Some Shopping With Us.");
          return;
        }

        this.$router.push("checkout");
      }
    }
  },
  computed: {
    ...mapGetters(["cartItems", "getDelivery"]),
    subTotal() {
      const subtotal = Object.values(this.cartItems).reduce(
        (subtotal, order) => {
          return subtotal + order.amount;
        },
        0
      );

      return subtotal;
    },
    total() {
      if (this.getDelivery) {
        return this.subTotal + parseInt(this.getDelivery.price);
      }
      return this.subTotal;
    }
  }
};
</script>
