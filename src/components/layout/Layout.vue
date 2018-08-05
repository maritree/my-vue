<template>
    <el-container>
        <el-aside width="200px" style="height: 100ch">
        <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
         <Header></Header>
            </el-header>
            <el-main style="padding: 5px">
                <router-view></router-view>
            </el-main>
            <el-footer style="height: 30px">Footer</el-footer>
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
.el-header
{
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
