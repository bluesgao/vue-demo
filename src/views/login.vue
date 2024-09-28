<script setup>
import { useAdminStore } from "@/stores/admin.js";
const adminStore = useAdminStore();

//管理员状态存储至 pinia (持久化存储到 localStorage 中)
adminStore.save("邓瑞", "dengruicode.com", "2024-05-18")

console.log(adminStore.data);
</script>

<template>
  <div>

    <h3>登录页</h3>

    <el-icon>
      <User />
    </el-icon>

    <hr />

    <el-button type="primary">登录</el-button>
  </div>
</template>

<style scoped></style>
