<template>
    <el-container>
        <el-aside style="height: 100vh;  width: 201px;  border-right: solid 1px #e6e6e6;">
            <Aside></Aside>
        </el-aside>
        <el-container style="height: 100vh">
            <el-header height="7vh">
                <Header></Header>
            </el-header>
            <el-main style="padding: 0px;position: center;height: 90vh">
                <router-view></router-view>
            </el-main>
            <el-footer style="height: 3vh;padding: 0px"> 2016 Company, Inc.</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";

export default {
  name: "Layout",
  components: { Header, Aside }
};
</script>

<style scoped>
.el-header {
  padding: 0px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  padding: 0px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 30px;
}
</style>
