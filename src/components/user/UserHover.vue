<template>
    <el-popover placement="top-start" title="用户详情" trigger="hover" style="text-align: center"
                transition="fade-in-linear">
        <div style="width: 100%">
            <div style="float: left ;width: 50%">
                <h5>用户名:</h5>
                <h5>部门:</h5>
                <h5>用户名:</h5>
            </div>
            <div style="float: left ;width: 50%">
                <h5>{{gridData[0]["date"]}}</h5>
                <h5>{{gridData[0]["date"]}}</h5>
                <h5>{{gridData[0]["date"]}}</h5>
            </div>
        </div>
        <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
        </div>

          <div slot="reference" class="cover">
            <img src="https://picsum.photos/200/200/?random">
        </div>
    </el-popover>
</template>

<script>
    export default {
        name: "UserHover",
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
