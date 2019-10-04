<template>
  <el-card>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="12">
        <el-button size="small" @click="addTab(editableTabsValue)">Add Item Variants</el-button>
      </el-col>
      <el-col :span="12">
        <el-button size="small" type="primary" @click="submit()">Complete and Submit</el-button>
      </el-col>
    </el-row>
    <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab">
      <el-tab-pane label="New Item Form" name="0">
        <ItemForm ref="itemForm" />
      </el-tab-pane>
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        closable
      >
        <ItemPropertyForm ref="itemPropertyForm" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import ItemPropertyForm from "./elements/ItemPropertyForm.vue";
import ItemForm from "./elements/ItemForm.vue";

export default {
  components: {
    ItemPropertyForm,
    ItemForm
  },
  data() {
    return {
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
          console.log("submitting");
        })
        .catch(_ => {});
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