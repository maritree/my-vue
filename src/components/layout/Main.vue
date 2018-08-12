<template>
    <el-tabs type="card" closable style="max-height: 500px">
        <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
            我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心" >
            <TwoParts ></TwoParts>
        </el-tab-pane>
        <el-tab-pane label="角色管理">
            <Chart1></Chart1>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿">
            <Form></Form>
        </el-tab-pane>
    </el-tabs>

</template>

<script>
import TwoParts from "./TwoParts";
import Chart1 from "../chart/Chart1";
import Form from "../chart/Form";

export default {
  name: "Main",
  components: { Form, Chart1, TwoParts }
};
</script>

<style scoped>
</style>
