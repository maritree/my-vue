<template>
    <el-row>
        <el-col :span="4">
            <Tree>

            </Tree>
        </el-col>
        <el-col :span="20">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    height="90vh"
                    v-loading="loding"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(255, 255, 255, 1)"
                    fit>
                <el-table-column
                        prop="neckName"
                        label="昵称"
                        align="center"
                        resizable>
                </el-table-column>
                <el-table-column
                        prop="password"
                        label="密码"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="userName"
                        label="姓名"
                        align="center">
                </el-table-column>
            </el-table>
        </el-col>

    </el-row>


</template>


<script>
import { getRequest } from "@/util/requests.js";
import Tree from "../common/Tree";
// import { Message } from "element-ui";

export default {
  name: "UserManage",
  components: { Tree },
  beforeCreate() {
    getRequest(this.BASE_URL + "/user/list")
      .then(response => {
        // eslint-disable-next-line no-console
        console.info(response.data), (this.tableData = response.data.data);
      })
      // eslint-disable-next-line no-console
      .catch(reason => console.info(reason));
  },
  beforeUpdate() {
    this.loding = false;
  },

  data() {
    return {
      loding: true,
      tableData: []
    };
  }
};
</script>

<style scoped>
</style>
