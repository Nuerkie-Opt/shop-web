<template>
  <div>
    <el-upload
      action="#"
      list-type="picture-card"
      accept="image/*"
      ref="imageUploader"
      :http-request="upload"
      :file-list="fileList"
      :limit="lim"
      :auto-upload="false"
      :disabled="mode === 'show'"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
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
  props:{
    lim:{
      type:Number,
      default:5
    },
    mode:{
      type:String,
      default:'create'
    },
    dat: Array
  },
  data() {
    return {
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false
    };
  },
  methods: {
    reList(){
      return this.fileList.map((f)=>{ return {id: f.id, url: f.url} });
    },
    handleRemove(file) {
      let fileList;
      if(file.hasOwnProperty('raw')){
        this.$refs.imageUploader.uploadFiles = this.$refs.imageUploader.uploadFiles.filter((f)=> f.url !== file.url);
      }else{
        this.fileList = this.fileList.filter((f)=> f.url !== file.url);
      }
      
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    reader(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
      });
    },
     upload(options) {
      this.baseList.push(this.reader(options.file));
    },
    getData() {
        this.baseList = [];
        this.$refs.imageUploader.submit();
        return Promise.all([...this.reList(), ...this.baseList]);
    }
  },
  created(){
    this.baseList= [];
  },
  mounted() {
    if(this.mode !== 'create'){
      this.fileList = this.dat;
    }
  }
};
</script>
