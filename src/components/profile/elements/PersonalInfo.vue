<template>
  <el-card v-if="hasProfile">
    <el-form :model="personalInfo" :rules="rules" ref="personalInfo" label-position="top">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12">
          <el-form-item label="Full Name" prop="name">
            <el-input v-model="personalInfo.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="Address" prop="address">
            <el-input v-model="personalInfo.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12">
          <el-form-item label="Phone" prop="phone">
            <el-input v-model="personalInfo.phone">
              <el-form-item class="code" prop="code" slot="prepend">
                <el-select
                  v-model="personalInfo.code"
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
          <el-form-item label="Date of Birth" prop="birth">
            <el-date-picker v-model="personalInfo.birth" type="date"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12">
          <el-form-item label="Country & Region" prop="country">
            <el-cascader
              v-model="personalInfo.country"
              :options="countries"
              :props="{label:'name',value:'name',children:'regions', expandTrigger: 'hover'}"
              placeholder="Country / Region"
              filterable
              clearable
              style="width:100%"
            ></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="City" prop="city">
            <el-input v-model="personalInfo.city"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" @click="save" size="small" style="width:100%">Save</el-button>
  </el-card>
</template>
<script>
import MoneySign from "../../shop/elements/MoneySign.vue";
import countries from "../../../data/countries.js";
import dialCode from "../../../data/dialCode.js";

export default {
  props: ["profile", "hasProfile", "isSeller"],
  components: {
    MoneySign
  },
  data() {
    return {
      personalInfo: {
        name: "",
        address: "",
        phone: "",
        birth: "",
        country: [],
        city: "",
        code: ""
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
    save() {
      let isValid;
      this.$refs.personalInfo.validate(valid => (isValid = valid));
      if (!(this.personalInfo.phone && this.personalInfo.code)) {
        const error = "You need to provide both phone number and country code.";
        this.$notify.error({
          title: "Error",
          message: error
        });
        return false;
      }

      if (isValid) {
        const params = { info: "personal", data: this.personalInfo };
        this.$eventBus.$emit("save-profile-settings", params);
      } else {
        const error = "Please provide all the required info.";
        this.$notify.error({
          title: "Error",
          message: error
        });
        return false;
      }
    }
  },
  created() {
    if (this.hasProfile) {
      if (this.profile.user.info.personal) {
        this.personalInfo = {
          name: this.profile.user.info.personal.name,
          address: this.profile.user.info.personal.address,
          phone: this.profile.user.info.personal.phone,
          birth: this.profile.user.info.personal.birth,
          country: this.profile.user.info.personal.country,
          city: this.profile.user.info.personal.city,
          code: this.profile.user.info.personal.code
        };
      }
    }
  }
};
</script>

<style scoped>
.el-form-item.code {
  margin-bottom: 0px;
}
</style>