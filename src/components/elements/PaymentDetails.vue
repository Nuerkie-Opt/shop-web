<template>
  <el-form :model="paymentForm" ref="paymentForm" label-position="top">
    <el-form-item label="Please Select your Payment Option" prop="method" required>
      <el-radio-group v-model="paymentForm.method">
        <el-radio border label="mtn">
          MTN MOMO
          <i class="el-icon-mobile-phone"></i>
        </el-radio>
        <el-radio border label="card">
          Credit / Debit
          <i class="el-icon-bank-card"></i>
        </el-radio>
        <el-radio border label="crypto">
          Cryto Currency
          <i class="el-icon-coin"></i>
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="paymentForm.method == 'mtn'">
      <el-alert
        title="Only works in Ghana for now."
        type="info"
        description="We are looking into how to make this mode of payment work for other countries with MTN."
        :closable="false"
        show-icon
      ></el-alert>
      <br />
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Name associated with account."
            prop="mtn.name"
            :rules="{
          min: 3,
          message: 'Minimum of 3 characters',
          trigger: 'blur'
        }"
            required
          >
            <el-input v-model="paymentForm.mtn.name" placeholder="Paa Kwesi"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Mobile number of account."
            prop="mtn.number"
            :rules="[
          {
            min: 9,
            message: 'Minimum of 9 characters',
            trigger: 'blur'
          },
          {
            max: 10,
            message: 'Maximum of 10 characters',
            trigger: 'blur'
          }
        ]"
            required
          >
            <el-input v-model="paymentForm.mtn.number" placeholder="0553339728"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </div>
    <div v-if="paymentForm.method == 'card'">
      <el-alert
        title="All reputable cards are supported."
        type="info"
        description="VISA Card, Master Card, ..."
        :closable="false"
        show-icon
      ></el-alert>
      <br />
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Name on card."
            prop="card.name"
            rules="{
          min: 3,
          message: 'Minimum of 3 characters',
          trigger: 'blur'
        }"
            required
          >
            <el-input v-model="paymentForm.card.name" placeholder="Paa Kwesi"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="Card number of account." prop="card.number" required>
            <el-input v-model="paymentForm.card.number" placeholder="1234************5678"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-form-item label="Expiry Date." prop="card.expiry" required>
            <el-cascader
              :options="expiryDates"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              placeholder="month / year"
              clearable
              v-model="paymentForm.card.expiry"
            ></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="CVV."
            prop="card.cvv"
            :rules="[
          {
            min: 3,
            message: 'Maximum 3 characters',
            trigger: 'blur'
          },
          {
            max: 3,
            message: 'Minimum of 3 characters',
            trigger: 'blur'
          }
        ]"
            required
          >
            <el-input v-model="paymentForm.card.cvv"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </div>
    <div v-if="paymentForm.method == 'crypto'">
      <el-alert
        title="Hello Crypto Lovers."
        type="info"
        description="Cryptocurrency mode of payment is seriously comming soon."
        :closable="false"
        show-icon
      ></el-alert>
      <br />
    </div>
  </el-form>
</template>
<script>
import expiryDates from "../../data/expiryDates.js";
export default {
  data() {
    return {
      expiryDates: expiryDates,
      paymentForm: {
        method: "", // mtn | card | paypal | crypto
        mtn: {
          name: "",
          number: ""
        },
        card: {
          name: "",
          number: "",
          expiry: "",
          cvv: ""
        },
        crypto: {
          key: ""
        }
      }
    };
  },
  methods: {
    getData() {
      return new Promise((resolve, reject) =>
        this.$refs["paymentForm"].validate(valid => {
          if (valid) {
            resolve(this.paymentForm);
          } else {
            reject("Please provide all the required info.");
          }
        })
      );
    },
    reset() {
      this.$refs["paymentForm"].resetFields();
    }
  }
};
</script>

<style scoped>
.el-form-item.code {
  margin-bottom: 0px;
}
</style>