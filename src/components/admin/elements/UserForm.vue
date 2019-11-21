<template>
  <el-card>
    <el-form :model="userForm" ref="userForm" label-position="top">
      <el-form-item label="Email" prop="email" required>
        <el-input v-model="userForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone" required>
        <el-input v-model="userForm.phone">
          <el-form-item class="code" prop="code" slot="prepend" required>
            <el-select
              v-model="userForm.code"
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
      <el-form-item label="Country & Region" prop="country" required>
        <el-cascader
          v-model="userForm.country"
          :options="countries"
          :props="{label:'name',value:'name',children:'regions', expandTrigger: 'hover'}"
          placeholder="Country / Region"
          filterable
          clearable
          style="width:100%"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="City" prop="city" required>
        <el-input v-model="userForm.city"></el-input>
      </el-form-item>
      <el-form-item label="Access Level" prop="level" required>
        <el-select v-model="userForm.level" placeholder="Access" style="width:100%">
          <el-option
            v-for="level in levels"
            :key="level.value"
            :label="level.label"
            :value="level.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="submit">Create User</el-button>
    </el-form>
  </el-card>
</template>
<script>
import { mapGetters } from "vuex";
import countries from "../../../data/countries.js";
import dialCode from "../../../data/dialCode.js";

export default {
  props: {
    mode: {
      type: String,
      default: "create"
    },
    dat: Object
  },
  data() {
    return {
      levels: [
        { value: "seller", label: "Seller" },
        { value: "staff", label: "Staff" },
        { value: "admin", label: "Admin" },
        { value: "super", label: "Super User" },
        { value: "root", label: "Root" }
      ],
      userForm: {
        name: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        code: "",
        level: ""
      }
    };
  },
  computed: {
    ...mapGetters(['currentUser']),
    countries() {
      return countries;
    },
    dialCode() {
      return dialCode;
    }
  },
  methods: {
    async submit() {
      let isValid;
      this.$refs["userForm"].validate(valid => (isValid = valid));

      if (isValid) {
        this.userForm.phone_code = this.userForm.code + " " + this.userForm.phone;
        this.userForm.mode = this.mode;
        if(this.mode === 'edit'){
          this.userForm.id = this.dat.user.id;
        }
        const payload = {
          "111": {
            create_user: this.userForm,
            "000": ["create_user"]
          },
          "000": ["111"]
        };
        const fp = await this.$browser();
      this.$actions
        .post("/action", payload, {
          headers: { 
            Authorization: this.currentUser.token, 
            'Account-ID':this.currentUser.user.email, 
            'Device-ID': fp.deviceHash
            }
        })
        .then(response => {
          // handle success
          const resp = response.data['111'].create_user;
          if(resp.status){
            this.$notify.success({
            title: "Success",
            message: resp.msg
          });
          }else{
            this.$notify.error({
            title: "Error",
            message: resp.msg
          });
          }
          
        })
        .catch(error => {
          // handle error
          // console.log(error);
          this.$notify.error({
            title: "Error",
            message: "Poor Connection."
          });
        });
      } else {
        const error = "Please provide all the required info.";
        this.$notify.error({
          title: "Error",
          message: error
        });
        return false;
      }
    },
    reset() {
      this.$refs["userForm"].resetFields();
    }
  },
  created() {
    if (this.mode !== "create") {
      let phone_code;
      if (this.dat.user.phone) {
        phone_code = this.dat.user.phone.split(" ");
      } else {
        phone_code = ["", ""];
      }

      this.userForm = {
        name: this.dat.user.name,
        phone: this.dat.user.phone,
        country: this.dat.user.info.personal.country,
        email: this.dat.user.email,
        city: this.dat.user.info.personal.city,
        level: this.dat.user.level,
        code: phone_code[0],
        phone: phone_code[1]
      };
    }
  }
};
</script>

<style scoped>
.el-form-item.code {
  margin-bottom: 0px;
}
</style>