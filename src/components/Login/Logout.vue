<template>
    <div>
        <el-button type="primary" size="mini" @click="logout">退出登陆</el-button>
    </div>
</template>

<script>
import { distory } from "@/api/logout";

export default {
  name: "Logout",
  methods: {
    logout() {
      this.$confirm("您正在请求退出系统", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          distory();
          this.$message({
            type: "success",
            message: "退出登陆"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消登陆"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>
