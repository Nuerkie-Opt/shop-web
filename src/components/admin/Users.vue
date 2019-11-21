<template>
  <div>
    <el-tabs :stretch="true">
      <el-tab-pane label="Staff">
          <NotCustomers />
      </el-tab-pane>
      <el-tab-pane label="Customers">
          <Customers />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NotCustomers from './elements/NotCustomers.vue';
import Customers from './elements/Customers.vue';

export default {
    components:{
        NotCustomers,
        Customers
    }
}
</script>