<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8">
        <el-image :src="item.images[0]" :preview-src-list="item.images"></el-image>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <h3>{{item.name}}</h3>
        <ul style="font-size:18px;color:#909399">
          <li>size</li>
          <li>color</li>
          <li>message</li>
          <li>something</li>
        </ul>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <p style="font-size:18px"><i><MoneySign :price="item.price" /> / unit</i></p>
        <p style="font-size:18px"><i>@ {{quantity}} units, & total</i></p>
        <p style="font-size:18px">
          <i>
          <el-tag type="info" round>
            <MoneySign :price="item.price * quantity" />
          </el-tag>
          </i>
        </p>
        <el-button-group>
          <el-button type="success" icon="el-icon-edit" @click.native="edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click.native="remove" circle></el-button>
        </el-button-group>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import MoneySign from "./MoneySign.vue";

export default {
  props: ["item", "quantity", "options"],
  methods: {
    remove() {
      this.$message.error("removing ...");
    },
    edit() {
      this.$message.success("editing ...");
    }
  },
  components:{
    MoneySign
  },
};
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
}
</style>