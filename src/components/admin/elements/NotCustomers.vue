<template>
  <el-card>
    <el-table :data="tableData" height="400" style="width: 100%" v-loading="loading">
      <el-table-column label="Last Login" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ toDate(scope.row.last_login) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Email" width="256">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="128">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Phone" width="256">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Level" width="128">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.level }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Login Counts" width="128">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.login_count }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Login Tries" width="128">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.login_tries }}</span>
        </template>
      </el-table-column>
       <el-table-column label="Logins Failed" width="128">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.logins_failed }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="256">
        <template slot-scope="scope">
          <el-button @click.native.prevent="viewItem(scope.row.id)" size="mini">View</el-button>
        
          <el-button @click.native.prevent="editItem(scope.row.id)" size="mini">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      users: [],
      loading: false
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    tableData() {
      if (this.users.length !== 0) {
        return this.users;
      } else {
        return [];
      }
    }
  },
  methods: {
    async load() {
      const payload = {
        "111": {
          get_users: {},
          "000": ["get_users"]
        },
        "000": ["111"]
      };

      const fp = await this.$browser();
      this.$actions
        .post("/action", payload, {
          headers: {
            Authorization: this.currentUser.token,
            "Account-ID": this.currentUser.user.email,
            "Device-ID": fp.deviceHash
          }
        })
        .then(response => {
          // handle success
          const resp = response.data["111"].get_users;
          if (resp.status) {
            this.$notify.success({
              title: "Success",
              message: resp.msg
            });
            this.users = resp.data;
          } else {
            this.$notify.error({
              title: "Error",
              message: resp.msg
            });
          }
        })
        .catch(error => {
          // handle error
          // console.log(error);
          this.$notify.error({
            title: "Error",
            message: "Poor Connection."
          });
        });
    },
    toDate(stamp) {
      const date = new Date(stamp * 1000);
      const m = "0" + (date.getMonth()+1);
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
        const origin = window.location.origin;
        const path = `/p/${id}`;
        window.open(origin+path,"_blank");
    },
    editItem(id){
        this.$router.push(`/a/users/edit/${id}`);
    }
  },
  created() {
    if (this.users.length !== 0) {
      this.$message("Wassop 😉.");
      return;
    }
    this.load();
  }
};
</script>
