<template>
  <div>
    <el-upload
      action="#"
      list-type="picture-card"
      accept="image/*"
      ref="imageUploader"
      :file-list="fileList"
      :limit="10"
      :auto-upload="false"
      :data="uploadData"
      :headers="uploadHeaders"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
            <i class="el-icon-download"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>
<script>
export default {
    props:['uploadData','uploadHeaders'],
  data() {
    return {
      fileList: [
        {
          name: "flower",
          url:
            "https://res.cloudinary.com/neaonnim/image/upload/v1570006705/sample.jpg"
        }
      ],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    submit(){
        this.$refs.imageUploader.submit();
    }
  }
};
</script>
