<template>
  <div>
    <el-row :gutter="10" v-if="!loading">
      <el-col :xs="24" :sm="8" :md="10" :lg="10">
        <el-image :src="$urlTo(item.item.images[0].url,'g')"></el-image>
      </el-col>
      <el-col :xs="24" :sm="12" :md="10" :lg="10">
        <el-card v-for="(combo, i) in userCombos" :key="i" shadow="hover" style="margin-top:5px">
          <div class="clearfix">
            <span style="line-height:30px;font-size:18px">
              <i>{{combo.name}}</i>
            </span>
            <el-button
              style="float: right; font-weight:bold"
              size="small"
              type="primary"
              @click="appendCombo(combo)"
            >
              ADD
              <i class="el-icon-success"></i>
            </el-button>
          </div>
        </el-card>
        <div style="margin-top:20px">
          <el-input
            v-show="showComb"
            placeholder="Combo name"
            v-model="newCombTxt"
            size="small"
            clearable
            required
          ></el-input>
          <el-button
            style="font-weight:bold;margin-top:10px"
            size="small"
            type="primary"
            @click="newCombo"
          >
            {{combTxt}}
            <i class="el-icon-circle-plus"></i>
          </el-button>
          <el-button
            style="font-weight:bold;margin-top:10px"
            size="small"
            type="danger"
            v-if="showComb"
            @click="cancelNew"
          >
            CANCEL
            <i class="el-icon-error"></i>
          </el-button>
        </div>
      </el-col>
    </el-row>
    <div v-loading="loading"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      loading: false,
      showComb: false,
      combTxt: "NEW COMBO",
      newCombTxt: "",
      userCombos: []
    };
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    cancelNew() {
      this.showComb = false;
      this.combTxt = "NEW COMBO";
    },
    async appendCombo(combo) {
      this.loading = true;
      const payload = {
        "111": {
          create_combo: {
            items: [...combo.items, this.item.id],
            name: combo.name,
            update: true,
            id: combo.id
          },
          "000": ["create_combo"]
        },
        "000": ["111"]
      };

      const fp = await this.$browser();
      this.$actions
        .post("/action", payload, {
          headers: {
            Authorization: this.currentUser.token,
            "Account-ID": this.currentUser.user.email,
            "Device-ID": fp.deviceHash
          }
        })
        .then(response => {
          // handle success
          const resp = response.data["111"].create_combo;
          if (resp.status) {
            this.$eventBus.$emit("closeCombo");
          }
        })
        .catch(error => {
          // handle error

          this.$notify.error({
            title: "Error",
            message: "Poor Internet."
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async newCombo() {
      if (this.showComb) {
        if (!this.newCombTxt) {
          this.message.error("Combo name can't be empty");
          return;
        }
        this.loading = true;
        const payload = {
          "111": {
            create_combo: {
              items: [this.item.id],
              update: false,
              name: this.newCombTxt
            },
            "000": ["create_combo"]
          },
          "000": ["111"]
        };

        const fp = await this.$browser();
        this.$actions
          .post("/action", payload, {
            headers: {
              Authorization: this.currentUser.token,
              "Account-ID": this.currentUser.user.email,
              "Device-ID": fp.deviceHash
            }
          })
          .then(response => {
            // handle success
            const resp = response.data["111"].create_combo;
            if (resp.status) {
              this.$eventBus.$emit("closeCombo");
            }
          })
          .catch(error => {
            // handle error

            this.$notify.error({
              title: "Error",
              message: "Poor Internet."
            });
          })
          .finally(() => {
            this.loading = false;
          });
        return;
      }
      this.showComb = true;
      this.combTxt = "CREATE COMBO";
    }
  },
  async mounted() {
    this.loading = true;
    if (this.currentUser) {
      const payload = {
        "111": {
          get_combos: {
            light: true,
            user: this.currentUser.user.id
          },
          "000": ["get_combos"]
        },
        "000": ["111"]
      };

      this.$actions
        .post("/action", payload)
        .then(response => {
          // handle success
          const resp = response.data["111"].get_combos;
          this.userCombos = resp.status ? resp.data : [];
        })
        .catch(error => {
          // handle error
          this.$notify.error({
            title: "Error",
            message: "Poor Internet."
          });
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>