<template>
  <el-row :gutter="20" type="flex" align="middle" justify="center">
    <el-col :xs="24" :sm="24" :md="12" :lg="16">
      {{$route.params}}
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="8">
      {{$route.query}}
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>