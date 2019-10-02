<template>
    <div>
       <el-button class="bots" icon="el-icon-star-off" size="small" circle></el-button>
      <el-button class="bots" icon="el-icon-share" size="small" circle></el-button>
      <el-button class="bots" icon="el-icon-more-outline" size="small" circle></el-button>
      <el-button class="bots" icon="el-icon-view" size="small" circle></el-button>
      <el-button class="rbutton bots" size="small" round>
        <MoneySign :price="item.price" />
      </el-button> 
    </div>
</template>

<script>
import MoneySign from './MoneySign.vue';
export default {
    props:['item'],
    components:{
        MoneySign
    }
}
</script>

<style scoped>
.rbutton {
  /* padding: 0; */
  float: right;
}
.bots {
  font-weight: bold;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.bots:hover {
  box-shadow: 0 0 0 5px rgba(23, 135, 251, 0.05);
}
</style>