<template>
    <el-card >
        <el-divider content-position="left"><i>Order Summary</i></el-divider>
        <el-row style="font-size:18px">
          <el-col :span="18"><i>SubTotal :</i></el-col>
          <el-col :span="6"><i><MoneySign :price="999" /></i></el-col>
        </el-row>
        <el-row style="font-size:18px">
          <el-col :span="18"><i>Delivery :</i></el-col>
          <el-col :span="6"><i><MoneySign :price="999" /></i></el-col>
        </el-row>
        <el-row style="font-size:18px">
          <el-col :span="18"><i>Tax :</i></el-col>
          <el-col :span="6"><i><MoneySign :price="9" /></i></el-col>
        </el-row>
        <el-row style="font-size:18px">
          <el-col :span="18"><i>Discount :</i></el-col>
          <el-col :span="6"><i>-<MoneySign :price="9" /></i></el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row style="font-size:18px">
          <el-col :span="18"><i>Total :</i></el-col>
          <el-col :span="6"><i>-<MoneySign :price="9" /></i></el-col>
        </el-row>
        <div v-if="summary">
        <el-divider></el-divider>
        <el-button style="width:100%" type="info" @click="checkout">
          <i style="font-size:18px"><b>Checkout</b></i>
        </el-button>
        <el-divider content-position="left"><i>Payment Options</i></el-divider>
        <el-row :gutter="5">
          <el-col v-for="i in 9" :key="i" :span="4">pay</el-col>
        </el-row>
        <el-divider content-position="left"><i>Delivery Options</i></el-divider>
        </div>
      </el-card>
</template>

<script>
import MoneySign from "../elements/MoneySign.vue";

export default {
    components:{
        MoneySign
    },
    props:{
        summary:{
            type:Boolean,
            default:false
        },
        cart:{
          type:Boolean,
          default:true
        }
    },
    methods:{
      checkout(){
        if(this.cart){
          this.$router.push('checkout');
        }
      }
    }
}
</script>