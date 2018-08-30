<template>
    <el-popover placement="top-start" title="用户详情" trigger="hover" style="text-align: center"
                transition="fade-in-linear">
        <div style="width: 160px">
            <el-row>
                <el-col :span="10">
                    <div style="float: left">
                        <p style="text-align: right">用户名:</p>
                        <p style="text-align: right">部门:</p>
                        <p style="text-align: right">时间:</p>
                    </div>
                </el-col>
                <el-col :span="14">
                    <div style="float: right">
                        <p>{{gridData[0]["date"]}}</p>
                        <p>{{gridData[0]["date"]}}</p>
                        <p>{{gridData[0]["date"]}}</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <Logout style="float: right"></Logout>
        <div slot="reference" class="cover">
            <img src="https://picsum.photos/200/200/?random">
        </div>
    </el-popover>
</template>

<script>
// import { distory } from "@/api/logout";

import Logout from "../Login/Logout";

export default {
  name: "UserHover",
  components: { Logout },
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    // logout() {
    //   distory();
    // }
  }
};
</script>

<style scoped>
.cover {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  overflow: hidden;
  position: relative;
  margin: auto;
  border-top: 10px;
}

.cover:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: 0 0 30px 10px rgba(255, 255, 255, 0.7) inset;
  border-top: 10px;
}
</style>
