<template>
  <el-card>
    <el-row :gutter="20" style="margin-bottom:20px">
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <el-input
          placeholder="Search Item By Name"
          v-model="search"
          size="small"
          style="width:100%"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <el-button size="small" @click="searchMe">{{ xt }}</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      height="400"
      style="width: 100%"
      v-loading="loading"
    >
      {{itemMatrix[page]}}
      <el-table-column type="expand">
        <template slot-scope="props">
          <div v-html="props.row.item.description"></div>
          <el-image
            v-for="(img,i) in props.row.item.images"
            style="width: 100px; height: 100px"
            :src="$urlTo(img.url,'t')"
            :preview-src-list="props.row.item.images.map(img=>img.url)"
            :key="i"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="Date" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ toDate(scope.row.timestamp) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="256">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.item.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Department" width="128">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.item.department }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Category" width="128">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.item.category }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Currency" width="64">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.item.currency }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Price" width="128">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.item.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Tags" width="256">
        <template slot-scope="scope">
          <el-tag style="margin-left:5px;cursor:pointer" size="mini" v-for="(tag, t) in scope.row.item.tags" :key="t">{{tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="viewItem(scope.row.id)" size="small">View</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="load" type="success" size="small" style="margin-top:20px">Load More Items</el-button>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      page: 1,
      limit: 50,
      search: "",
      xt: "Search",
      finished: false,
      loading: false
    };
  },
  computed: {
    ...mapGetters(["itemMatrix"]),
    tableData() {
      if (this.itemMatrix) {
        return this.itemMatrix;
      } else {
        return [];
      }
    }
  },
  methods: {
    load() {
      if (this.finished) {
        this.$message("No more items to load 😬.");
        return;
      }
      this.loading = true;
      const params = { page: this.page, limit: 50, seller: 1, fetch: true };
      const args = { actions: this.$actions, params: params };
      this.$store.dispatch("loadItems", args).then(finished => {
        if (finished) {
          this.$message("No more items to load 😬.");
          this.finished = true;
        }
        this.loading = false;
        this.page++;
      });
    },
    toDate(stamp) {
      const date = new Date(stamp * 1000);
      const m = "0" + date.getMonth();
      const d = "0" + date.getDay();
      const y = date.getFullYear();
      const h = "0" + date.getHours();
      const min = "0" + date.getMinutes();
      const s = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      return `${y}-${m.substr(-2)}-${d.substr(-2)} ${h.substr(-2)}:${min.substr(
        -2
      )}:${s.substr(-2)}`;
    },
    viewItem(id) {
      this.$router.push(`/a/item/view/${id}`);
    },
    searchMe() {
      if (this.xt === "Search") {
        if(this.search.length < 3){
          this.$message.error('At least 3 letters 🌝');
          return;
        }
        this.xt = "Clear";
        return;
      }

      this.search = "";
      this.xt = "Search";
    }
  },
  beforeMount() {
    if (this.itemMatrix) {
      this.$message("Wassop 😉.");
      return;
    }
    this.load();
  }
};
</script>
