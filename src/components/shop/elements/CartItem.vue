<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8">
        <el-image :src="$urlTo(item.item.images[0].url,'g')"></el-image>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <span>{{item.item.name}}</span>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <p style="font-size:18px">
          <i>
            <b>
              <el-tag type="primary" round>
                <MoneySign :price="item.item.price" />/ unit
              </el-tag>
            </b>
          </i>
        </p>
        <p style="font-size:18px">
          <i>
            <b>
              <el-tag type="primary" round>@ {{quantity}} units</el-tag>
            </b>
          </i>
        </p>
        <p style="font-size:18px">
          <i>
            <b>
              <el-tag type="primary" round>
                <MoneySign :price="item.item.price * quantity" />
              </el-tag>
            </b>
          </i>
        </p>
        <el-button-group>
          <el-tooltip content="Edit" placement="left">
            <el-button type="text" icon="el-icon-edit" @click.native="edit(item.id)" circle></el-button>
          </el-tooltip>
          <el-tooltip content="Remove" placement="right">
            <el-button type="text" icon="el-icon-delete" @click.native="remove(item.id)" circle></el-button>
          </el-tooltip>
        </el-button-group>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { mapActions } from "vuex";
import MoneySign from "./MoneySign.vue";

export default {
  props: ["item", "quantity", "amount", "r", "c"],
  methods: {
    ...mapActions(["remove_order"]),
    remove(id) {
      this.$confirm("Are you sure you want to remove this item from your cart?")
        .then(() => {
          this.$message.error("removing ...");
          this.remove_order(id);
        })
        .catch(() => {});
    },
    edit(id) {
      this.$message.success("editing ...");
      this.$router.push({
        path: `items/${id}`,
        query: { r: this.r, c: this.c }
      });
    }
  },
  components: {
    MoneySign
  }
};
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
}
</style>