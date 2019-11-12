<template>
  <el-card>
    <div slot="header">
      <h3 style="color:#606266">{{item.name}}</h3>
      <i style="color:#606266"><b>
        <el-tag type="info" size="medium" effect="dark">
        <MoneySign :price="item.price" />
        </el-tag>
      </b></i>
    </div>

    <el-divider content-position="left">Preferences</el-divider>
    <div class="item">
      <OptionsIterator :options="options" ref="opts" />
    </div>
    <el-divider content-position="left">Shipping Info</el-divider>
    <div>
        <p class="lig"> - This item ships to your location.</p>
        <p class="lig"> - It takes n days for seller to complete order.</p>
        <p class="lig"> - It takes m days to ship to your locations.</p>
        <p class="lig"> - Expect to get your order in n+m days.</p>
    </div>
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
          v-if="buyable"
        >
          <el-option v-for="i in 100" :key="i" :label="i" :value="i"></el-option>
        </el-select>
      </el-col>
      <el-col :xs="12" :sm="12">
        <el-button style="width:100%" size="medium" type="primary" @click="addToCart" v-if="buyable">
          <i style="font-weight:900">
            Add to Cart
            <i class="el-icon-sold-out"></i>
          </i>
        </el-button>
        <el-button style="width:100%" size="medium" type="primary" @click="mkChange" v-if="editable">
          <i style="font-weight:900">
            Make Changes
            <i class="el-icon-edit"></i>
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
  props:{
    item:Object,
    options:Array,
    buyable:{
      type:Boolean,
      defualt:true
    },
    editable:{
      type:Boolean,
      defualt:false,
    }
  },
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
            this.$eventBus.$emit("carter", this.quantity);
            this.$message.success("Added to your cart...");
          })
          .catch(error => {
            this.$message.error(error);
          });
      } else {
        this.$refs["quantity"].focus();
        this.$message.warning("Please specify order quantity.");
      }
    },
    mkChange(){
      this.$router.push(`/a/item/edit/${this.$route.params.item}`);
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
.lig {
  font-style:italic;
  margin: 8px;
  color: #606266;
}
</style>
