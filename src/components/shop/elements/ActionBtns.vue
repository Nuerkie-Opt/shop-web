<template>
  <div>
    <el-tooltip :content="user_liked ? 'Unlike' : 'Like' " placement="bottom" effect="light">
    <el-button
      :type="user_liked ? 'primary' : ''"
      class="bots"
      size="small"
      @click="like"
      round
    >{{likes}} <i class="el-icon-star-on"></i></el-button>
    </el-tooltip>
    <el-tooltip content="Share" placement="bottom" effect="light">
    <el-button class="bots" icon="el-icon-share" size="small" @click="$message.info('Socail Media Sharing locked for now  🔐...')" circle></el-button>
    </el-tooltip>
    <el-tooltip content="Combination" placement="bottom" effect="light">
    <el-button class="bots" icon="el-icon-loading" size="small" @click="$message.info('Combos coming soon 😋 ...')" circle></el-button>
    </el-tooltip>
    <el-tooltip content="Seller Profile" placement="bottom" effect="light">
    <el-button type="primary" v-if="seller" class="bots" size="small" @click="$router.push(`/p/${seller}`)" round>Seller</el-button>
    </el-tooltip>
    <el-button class="rbutton bots" size="small" round>
      <MoneySign :price="item.price" />
    </el-button>
  </div>
</template>

<script>
import MoneySign from "./MoneySign.vue";
export default {
  props: {
    item: {
      type: Object,
      default: () => {{}}
    },
    seller:{
      type:String,
      default: ""
    }
  },
  components: {
    MoneySign
  },
  data() {
    return {
      liked: false,
      likx: 0,
    };
  },
  computed: {
    user_liked() {
      return this.item.liked || this.liked;
    },
    likes(){
      const itm = this.item.likes ? this.item.likes : 0;
      return this.likx+0
    }
  },
  methods: {
    like(){
      if(this.user_liked){
        this.liked = false;
        this.likx -= 1
      }else{
        this.liked = true;
        this.likx += 1;
      }
    }
  },
};
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