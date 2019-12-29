<template>
  <div>
    <!-- <el-tooltip :content="user_liked ? 'Unlike' : 'Like' " placement="bottom" effect="light"> -->
    <el-button :type="user_liked ? 'primary' : ''" class="bots" size="small" @click="like" round>
      {{likes}}
      <i class="el-icon-star-on"></i>
    </el-button>
    <!-- </el-tooltip> -->
    <!-- <el-tooltip content="Share" placement="bottom" effect="light"> -->
    <el-popover placement="right" trigger="click">
      <Socials :item="item" />
      <el-button class="bots" icon="el-icon-share" slot="reference" size="small" circle></el-button>
    </el-popover>
    <!-- </el-tooltip> -->
    <!-- <el-tooltip content="Combos" placement="bottom" effect="light"> -->
    <el-button
      class="bots"
      icon="el-icon-loading"
      size="small"
      @click="combo"
      circle
    ></el-button>
    <!-- </el-tooltip> -->
    <!-- <el-tooltip content="Seller Profile" placement="bottom" effect="light"> -->
    <el-button
      type="primary"
      v-if="seller"
      class="bots"
      size="small"
      @click="$router.push(`/p/${item.seller_id}`)"
      round
    >Seller</el-button>
    <!-- </el-tooltip> -->
    <el-button class="rbutton bots" size="small" round>
      <MoneySign :price="item.item.price" />
    </el-button>
    <el-dialog width="90%" :visible.sync="loginDialogVisible" append-to-body>
      <template slot="title">
        <div style="font-size:18px">
          <el-tag style="font-size:18px">
            <b>
              <i>Hello there 👋</i>
            </b>
          </el-tag>
        </div>
      </template>
      <span style="font-size:18px"><i>We see you love this item 🤗, well, this item also loves you back 😻. Kindly login or register to be able to like items or create combos 😋.</i></span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="$router.push('/auth/login')">Login.</el-button>
        <el-button type="primary" @click="$router.push('/auth/register')">Register.</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="comboAppendVisible" width="90%" append-to-body>
      <ComboAdd :item="item"/>
    </el-dialog>
  </div>
</template>

<script>
import MoneySign from "./MoneySign.vue";
import Socials from "./Socials.vue";
import { mapGetters } from "vuex";
import ComboAdd from "./ComboAdd.vue";

export default {
  props: {
    item: {
      type: Object,
      default: () => {
        {
        }
      }
    },

    seller: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MoneySign,
    ComboAdd,
    Socials
  },
  data() {
    return {
      liked: false,
      likx: 0,
      loginDialogVisible: false,
      comboAppendVisible:false
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    user_liked() {
      return this.item.liked || this.liked;
    },
    likes() {
      const itm = this.item.likes ? this.item.likes : 0;
      return this.likx + itm;
    }
  },
  methods: {
    combo(){
      if (!this.currentUser) {
        this.loginDialogVisible = true;
        return;
      }
      this.comboAppendVisible = true;
    },
    like() {
      if (!this.currentUser) {
        this.loginDialogVisible = true;
        return;
      }
      if (this.user_liked) {
        this.liked = false;
        this.likx -= 1;
      } else {
        this.liked = true;
        this.likx += 1;
      }
    }
  },
  mounted() {
    this.$eventBus.$on("closeCombo", ()=>this.comboAppendVisible = false);
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