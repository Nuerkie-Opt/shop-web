<template>
  <div>
    <el-tabs :stretch="true">
      <el-tab-pane label="Liked Items">
          <Liked />
      </el-tab-pane>
      <el-tab-pane label="Followers">
          <Followers />
      </el-tab-pane>
      <el-tab-pane label="Follows">
          <Follows />
      </el-tab-pane>
      <el-tab-pane label="Orders">
          <Orders />
      </el-tab-pane>
      <el-tab-pane label="Reviews">
          <Reviews />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Followers from './elements/Followers.vue';
import Follows from './elements/Follows.vue';
import Reviews from './elements/Reviews.vue';
import Orders from './elements/Orders.vue';
import Liked from './elements/Liked.vue';

export default {
    components:{
        Followers,
        Follows,
        Reviews,
        Orders,
        Liked
    }
}
</script>