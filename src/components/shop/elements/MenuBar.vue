<template>
  <el-menu mode="horizontal" :default-active="activeIndex" :unique-opened="true" class="menubar">
    <el-menu-item index="/" @click="goto('/')">Shop</el-menu-item>
    <el-submenu index="c">
      <template slot="title">Categories</template>
      <template v-for="(menu, i) in getMenus">
        <div :key="i">
          <el-submenu :index="`${i}`" v-if="menu.subs">
            <template slot="title">{{menu.name}}</template>
            <template v-for="(sub, j) in menu.subs">
              <el-menu-item @click="makeQ(`${menu.link},${sub.link}`)" :key="j">{{sub.name}}</el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item :index="`${i}`" @click="makeQ(`${menu.link}`)" v-else>{{menu.name}}</el-menu-item>
        </div>
      </template>
    </el-submenu>
    <el-submenu index="t">
      <template slot="title">Tags</template>

      <el-menu-item index="/t" @click="goto('/t')">All Tags</el-menu-item>
      <el-menu-item index="/t/popular" @click="goto('/t/popular')">Popular Tags</el-menu-item>
      <el-menu-item index="/t/new" @click="goto('/t/new')">New Tags</el-menu-item>
    </el-submenu>
    <!-- <el-submenu index="v">
      <template slot="title">Vendors</template>
    <el-menu-item index="/vendors" @click="goto('/vendors')">All Vendors</el-menu-item>-->
    <el-menu-item index="/sell" @click="dialogVisible = true;">Become a Vendor</el-menu-item>
    <!-- </el-submenu> -->
    <el-dialog :visible.sync="dialogVisible" width="90%" append-to-body>
      <div style="font-size:18px">
        <i>We are always happy 😀 to welcome new vendors:</i>
        <el-timeline style="margin-top:20px">
          <el-timeline-item type="warning">
            <el-card>
              <p>
                <i>
                  <b>Become</b> a
                  <b>Seller</b>.
                </i>
              </p>
              <p style="font-size:16px">
                <i>Just fill out this form and we will contact you shortly. We are happy to work with you. Only made in Africa products only.</i>
              </p>
              <el-button size="small" type="primary" @click="openUrl('form')">Fill Out Seller Forms.</el-button>
              <i>or call us</i>
              <el-tag type="warning" style="font-size:20px">
                <b>+233 55 333 97 28</b>
              </el-tag>
            </el-card>
          </el-timeline-item>
          <el-timeline-item type="success">
            <el-card>
              <p>
                <i>
                  <b>Follow</b> us on
                  <b>Social Media</b>.
                </i>
              </p>
              <p style="font-size:16px">
                <i>This is how we mostly keep in touch with our stakeholders with fun news and product updates. Feel free to inbox us direclty on any issue at all.</i>
              </p>
              <el-button type="primary" @click="openUrl('facebook')">Facebook</el-button>
              <el-button type="info" @click="openUrl('twitter')">Twitter</el-button>
              <el-button type="danger" @click="openUrl('instagram')">Instagram</el-button>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <template slot="footer">
        <div style="font-size:18px">
          <el-tag type="success" style="font-size:18px">
            <b>
              <i>Thank you.</i>
            </b>
          </el-tag>
        </div>
      </template>
    </el-dialog>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {
    ...mapGetters(["getMenus"]),
    activeIndex() {
      return this.$route.path;
    }
  },
  methods: {
    goto(r) {
      this.$router.push(r);
    },
    makeQ(q) {
      this.$router.push(`/s/${q}/`).catch(err => {});
    },
    openUrl(media) {
      let url = "https://";
      switch (media) {
        case "facebook":
          url += "facebook.com/shop.africaniz";
          break;
        case "twitter":
          url += "twitter.com/shop_africaniz";
          break;
        case "instagram":
          url += "instagram.com/shop.africaniz/";
          break;
        case "form":
          url += "forms.gle/1H2DZfctVreiKS8Z6";
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.el-menu--horizontal >>> .el-menu-item {
  float: left;
  height: 30px;
  line-height: 30px;
  border-bottom: 0px solid transparent;
  color: #303133;
}
.el-menu--horizontal .el-submenu >>> .el-submenu__title {
  height: 30px;
  line-height: 30px;
  border-bottom: 0px solid transparent;
  color: #303133;
}
.el-menu--horizontal >>> .el-menu-item:hover {
  color: #0786ee;
}

.el-menu--horizontal .el-submenu >>> .el-submenu__title:hover {
  color: #0786ee;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu >>> .el-submenu__title {
  color: #303133;
}
.el-menu--horizontal .el-menu .el-menu-item:hover,
.el-menu--horizontal .el-menu .el-submenu__title:hover {
  color: #0786ee;
}
</style>