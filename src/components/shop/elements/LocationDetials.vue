<template>
  <el-form
    :model="locationForm"
    :rules="rules"
    ref="locationForm"
    label-position="top"
  >
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12">
        <el-form-item label="Full Name" prop="name" required>
          <el-input v-model="locationForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-form-item label="Address" prop="address">
          <el-input v-model="locationForm.address"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12">
        <el-form-item label="Phone" prop="phone" required>
          <el-input v-model="locationForm.phone">
            <el-form-item class="code" prop="code" slot="prepend" required>
              <el-select
                v-model="locationForm.code"
                placeholder="Call Code"
                style="width:120px"
                filterable
              >
                <el-option
                  v-for="code in dialCode"
                  :key="code.code"
                  :label="code.code +' '+ code.dial_code"
                  :value="code.dial_code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-form-item label="Email" prop="email" required>
          <el-input v-model="locationForm.email"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12">
        <el-form-item label="Country & Region" prop="country" required>
          <el-cascader
            v-model="locationForm.country"
            :options="countries"
            :props="{label:'name',value:'name',children:'regions',checkStrictly: true, expandTrigger: 'hover'}"
            placeholder="Country / Region"
            filterable
            clearable
          ></el-cascader>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-form-item label="City" prop="city" required>
          <el-input v-model="locationForm.city"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="Extra Location Details" prop="details">
      <el-input
        type="textarea"
        v-model="locationForm.details"
        placeholder="Any extra information that you think might make it easy for us to find you."
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import countries from "../../../data/countries.js";
import dialCode from "../../../data/dialCode.js";

export default {
  data() {
    return {
      locationForm: {
        name: "sbk",
        address: "sbk",
        phone: "553339728",
        email: "sbk@sbk.sbk",
        country: ["Ghana", "Ashanti"],
        city: "Kumasi",
        code: "+233",
        details: "some extra details"
      },
      rules: {
        name: [
          {
            min: 3,
            message: "Minimum of 3 characters",
            trigger: "blur"
          }
        ],
        email: {
          type: "email",
          message: "Please enter a valid email",
          trigger: "change"
        },
        code: {
          required: true,
          message: "Please select your country code",
          trigger: "blur"
        }
      }
    };
  },
  computed: {
    countries() {
      return countries;
    },
    dialCode() {
      return dialCode;
    }
  },
  methods: {
    getData() {
      return new Promise((resolve, reject) =>
        this.$refs["locationForm"].validate(valid => {
          if (valid) {
            resolve(this.locationForm);
          } else {
            reject('Invalid Form');
          }
        })
      );
    },
    reset() {
      this.$refs["locationForm"].resetFields();
    }
  }
};
</script>

<style scoped>
.el-form-item.code {
  margin-bottom: 0px;
}
</style>