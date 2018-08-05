<template>
    <el-table
            :data="tableData"
            max-height="800"
            border
            style="width: 100% "
            fit>
        <el-table-column
                prop="date"
                label="日期"
                align="center"
                resizable="false">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                align="center"
        >
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                align="center">
        </el-table-column>
    </el-table>
</template>


<script>
import { getRequest } from "@/util/requests.js";
// import {Message} from "element-ui";

export default {
  name: "UserManage",
  created() {
    getRequest("/mock/user")
      .then(response => {
        this.tableData = response.data;
      })
      // eslint-disable-next-line no-console
      .catch(reason => console.info(reason));
  },
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style scoped>
</style>
