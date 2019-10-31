<template>
  <el-card>
    <div slot="header">
      <h3>{{item.name}}</h3>
      <i>
        <MoneySign :price="item.price" />
      </i>
    </div>

    <el-divider content-position="left">Preferences</el-divider>
    <div class="item">
      <OptionsIterator :options="options" ref="opts" />
    </div>
    <el-divider content-position="left">Shipping Info</el-divider>
    <el-divider></el-divider>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12">
        <el-select
          v-model.number="quantity"
          filterable
          allow-create
          default-first-option
          style="width:100%"
          size="medium"
          ref="quantity"
          placeholder="Order Quantity"
        >
          <el-option v-for="i in 100" :key="i" :label="i" :value="i"></el-option>
        </el-select>
      </el-col>
      <el-col :xs="12" :sm="12">
        <el-button style="width:100%" size="medium" type="primary" @click="addToCart">
          <i style="font-weight:900">
            Add to Cart
            <i class="el-icon-sold-out"></i>
          </i>
        </el-button>
      </el-col>
    </el-row>
    <el-divider content-position="left"></el-divider>
    <div class="sbottom clearfix">
      <ActionBtns :item="item" />
    </div>
  </el-card>
</template>

<script>
import ActionBtns from "./ActionBtns.vue";
import OptionsIterator from "./OptionsIterator.vue";
import MoneySign from "./MoneySign.vue";
export default {
  props: ["item", "options"],
  data() {
    return {
      quantity: ""
    };
  },
  methods: {
    addToCart() {
      if (this.quantity) {
        this.$refs.opts
          .getData()
          .then(value => {
            console.log(value);
            this.$message.success(`${this.quantity}`);
          })
          .catch(error => {
            console.log(error);
            this.$message.error(error);
          });
      } else {
        this.$refs["quantity"].focus();
        this.$message.warning("Please specify order quantity.");
      }
    }
  },
  components: {
    OptionsIterator,
    ActionBtns,
    MoneySign
  }
};
</script>
<style scoped>
.item {
  margin-bottom: 18px;
}
.sbottom {
  margin: 8px;
  line-height: 12px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
