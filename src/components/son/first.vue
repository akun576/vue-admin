<template>
  <div>
    son first
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary">>主要按钮</el-button>
      <el-button type="success">>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning">>警告按钮</el-button>
      <el-button type="danger">>危险按钮</el-button>
    </el-row>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>