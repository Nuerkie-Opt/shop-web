<template>
  <el-card>
    <el-divider content-position="left">
      <i>Order Summary</i>
    </el-divider>
    <el-row style="font-size:18px">
      <el-col :span="16">
        <i>SubTotal :</i>
      </el-col>
      <el-col :span="8">
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
      <el-col :span="16">
        <i>Delivery :</i>
      </el-col>
      <el-col :span="8">
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
      <el-col :span="16">
        <i>Discount :</i>
      </el-col>
      <el-col :span="8">
        <i><b>
          <el-tag style="margin-bottom:5px" type="danger" round>- <MoneySign :price="9" /></el-tag>
        </b></i>
      </el-col>
    </el-row>-->
    <el-divider></el-divider>
    <el-row style="font-size:18px">
      <el-col :span="16">
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

    <el-divider content-position="left">
      <i>Available Delivery Options.</i>
    </el-divider>
    <div>
      <el-checkbox :indeterminate="true" label="1" border>
        DHL
        <i class="el-icon-truck"></i>
      </el-checkbox>
      <el-checkbox :indeterminate="true" label="2" border>
        FedEX
        <i class="el-icon-truck"></i>
      </el-checkbox>
    </div>
    <el-divider content-position="left">
      <i>Available Payment Options.</i>
    </el-divider>
    <div>
      <el-checkbox :indeterminate="true" label="2" border>
        Card
        <i class="el-icon-bank-card"></i>
      </el-checkbox>
      <el-checkbox :indeterminate="true" label="1" border>
        Mobile Money
        <i class="el-icon-mobile-phone"></i>
      </el-checkbox>
    </div>
    <div v-if="summary">
      <el-divider></el-divider>
      <el-button style="width:100%" type="primary" @click="checkout">
        <i style="font-size:18px">
          <b>Proceed to Checkout.</b>
        </i>
      </el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="90%" append-to-body>
      <template slot="title">
        <div style="font-size:18px">
          <i>Sales begins on</i>
          <el-tag style="font-size:18px">
            <b>
              <i>Soon.</i>
            </b>
          </el-tag>
        </div>
      </template>
      <div style="font-size:18px">
        <i>But before then you can:</i>
        <el-timeline style="margin-top:20px">
          <el-timeline-item type="danger">
            <el-card>
              <p>
                <i>
                  <b>Create</b> an
                  <b>Account</b> with us.
                </i>
              </p>
              <p style="font-size:16px">
                <i>
                  And gain
                  <el-tag type="danger" style="font-size:16px">15%</el-tag>
                  <b>Uncoditional Discount</b> on your first purchase once sales begin.
                </i>
              </p>
              <el-button type="primary" @click="$router.push('/auth/register')">Create Account</el-button>
            </el-card>
          </el-timeline-item>
          <el-timeline-item type="success">
            <el-card>
              <p>
                <i>
                  <b>Follow</b> us on
                  <b>Social Media</b>.
                </i>
              </p>
              <p style="font-size:16px">
                <i>This is how we mostly keep in touch with our customers with fun news and product updates. Feel free to inbox us direclty on any issue at all.</i>
              </p>
              <el-button type="primary" @click="$openMediaUrl('facebook')">Facebook</el-button>
              <el-button type="info" @click="$openMediaUrl('twitter')">Twitter</el-button>
              <el-button type="danger" @click="$openMediaUrl('instagram')">Instagram</el-button>
            </el-card>
          </el-timeline-item>
          <el-timeline-item type="warning">
            <el-card>
              <p>
                <i>
                  <b>Become</b> a
                  <b>Seller</b>.
                </i>
              </p>
              <p style="font-size:16px">
                <i>Just fill out this form and we will contact you shortly. We are happy to work with you. Only made in Africa products only.</i>
              </p>
              <el-button type="primary" @click="$openMediaUrl('form')">Fill Out Seller Forms.</el-button><i> or call us</i> <el-tag type="warning" style="font-size:20px"><b>+233 55 333 97 28</b></el-tag>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <template slot="footer">
        <div style="font-size:18px">
          <el-tag type="success" style="font-size:18px">
            <b>
              <i>Thank you.</i>
            </b>
          </el-tag>
        </div>
      </template>
    </el-dialog>
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
    return {
      dialogVisible: false
    };
  },
  methods: {
    checkout() {
      this.dialogVisible = true;
      return;
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
