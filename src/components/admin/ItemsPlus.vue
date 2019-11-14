<template>
  <el-card>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="12">
        <el-button size="small" @click="addTab(editableTabsValue)" :disabled="mode === 'show'">Add Item Variants</el-button>
      </el-col>
      <el-col :span="12">
        <el-button size="small" type="primary" @click="submit()" :disabled="mode === 'show'">Complete and Submit</el-button>
      </el-col>
    </el-row>
    <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab" v-if="mode === 'create'">
      <el-tab-pane label="New Item Form" name="0">
        <ItemForm ref="itemForm" :mode="mode"/>
      </el-tab-pane>
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        closable
      >
        <ItemPropertyForm ref="itemPropertyForm" :mode="mode"/>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { awaitObjectWithPromise } from "../../utils.js";
import ItemPropertyForm from "./elements/ItemPropertyForm.vue";
import ItemForm from "./elements/ItemForm.vue";

export default {
  components: {
    ItemPropertyForm,
    ItemForm
  },
  props: {
    mode: {
      type: String,
      default: "create"
    },
    dat: Object
  },
  data() {
    return {
      errors: 0,
      editableTabsValue: "0",
      editableTabs: [],
      tabIndex: 0
    };
  },
  methods: {
    submit() {
      this.$confirm(
        "If you have made sure that everything is in place then continue, else go back and make sure everything how you want it.",
        {
          confirmButtonText: "Continue",
          cancelButtonText: "Go Back",
          type: "warning",
          center: true
        }
      )
        .then(_ => {
          this.upload();
        })
        .catch(_ => {});
    },
    collectProperties() {
      let options = [];
      if (this.$refs.itemPropertyForm) {
        for (const property of this.$refs.itemPropertyForm) {
          const data = property.getData();

          if (data) {
            options.push(data);
          } else {
            return false;
          }
        }
      }
      return options;
    },
    async upload() {
      const loading = this.$loading({
        lock: true,
        text: "Uploading Item.",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      let formData = this.$refs.itemForm.getData();

      if (!formData) {
        loading.close();
        return false;
      }

      let properties = this.collectProperties();

      if (!properties) {
        loading.close();
        return false;
      }

      formData.options = properties;

      const itemData = await awaitObjectWithPromise(formData);

      const payload = {
        "111": {
          upload_item: { item_details: itemData, seller_id: 1 },
          "000": ["upload_item"]
        },
        "000": ["111"]
      };
      // show loader
      this.$actions
        .post("/action", payload, {
          headers: { Authorization: "a8cd3aa542c5b1c9f6f92d663e32bc0fe682238a" }
        })
        .then(response => {
          // handle success
          console.log(response);
          this.$notify.success({
            title: "Success",
            message: "Item Uploaded."
          });
        })
        .catch(error => {
          // handle error
          console.log(error);
          this.$notify.error({
            title: "Error",
            message: "Upload Error."
          });
        })
        .finally(() => {
          loading.close();
          // always executed
          // remove loader
        });
    },
    addTab(targetName) {
      this.$prompt("Property title", "Item Property", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel"
      })
        .then(({ value }) => {
          if (value) {
            let newTabName = ++this.tabIndex + "";
            this.editableTabs.push({
              title: value,
              name: newTabName
            });
            this.editableTabsValue = newTabName;
          } else {
            this.$message({
              type: "error",
              message: "Invalid Input"
            });
          }
        })
        .catch(() => {});
    },
    removeTab(targetName) {
      this.$confirm(
        "Are you sure to delete this property? Action is not reversible. You will loose everything under it.",
        {
          confirmButtonText: "Yes",
          cancelButtonText: "Cancel",
          type: "error",
          center: true
        }
      )
        .then(_ => {
          let tabs = this.editableTabs;
          this.editableTabsValue = 0 + "";
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        })
        .catch(_ => {});
    }
  }
  };
</script>