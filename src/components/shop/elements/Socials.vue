<template>
  <social-sharing
    :url="itemUrl"
    :title="item.item.name"
    :description="itemSummary"
    :quote="itemSummary"
    :hashtags="itemTags"
    twitter-user="shop_africaniz"
    :media="itemMedia"
    inline-template
  >
    <div>
      <network network="facebook">
        <el-button type="primary" size="mini">Facebook</el-button>
      </network>
      <network network="linkedin">
        <el-button type="primary" size="mini" plain>LinkedIn</el-button>
      </network>
      <network network="pinterest">
        <el-button type="danger" size="mini">Pinterest</el-button>
      </network>
      <br />
      <br />
      <network network="reddit">
        <el-button type="warning" size="mini">Reddit</el-button>
      </network>
      <network network="telegram">
        <el-button type="info" size="mini">Telegram</el-button>
      </network>
      <network network="twitter">
        <el-button type="info" size="mini" plain>Twitter</el-button>
      </network>
      <br />
      <br />
      <network network="weibo">
        <el-button type="warning" size="mini" plain>Weibo</el-button>
      </network>
      <network network="whatsapp">
        <el-button type="success" size="mini">Whatsapp</el-button>
      </network>
    </div>
  </social-sharing>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    itemTags() {
      return "Africanizing,Africanize" + this.item.item.tags.join(",");
    },
    itemUrl() {
      return `https://www.africaniz.com/items/${this.item.id}`;
    },
    itemMedia() {
      return this.item.item.images[0].url;
    },
    itemSummary() {
      return this.item.item.summary;
    }
  }
};
</script>