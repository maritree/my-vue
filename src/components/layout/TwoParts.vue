<template>
    <div>
        <el-row >
            <el-col :span=12>
                <div class="grid-content bg-purple">
                    <router-view></router-view>
                </div>
            </el-col>
            <el-col :span=12>
                <el-row>
                    <el-col :span=24 style="height: 100px">
                        <div class="grid-content bg-purple-dark"></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-button @click="handleClick">组件切换按钮</el-button>
                    <component v-bind:is="currentTabComponent"></component>
                </el-row>
            </el-col>
        </el-row>
        <div>
            填补空白
        </div>
    </div>
</template>

<script>
import Chart1 from "@/components/chart/Chart1";
import Form from "@/components/chart/Form";

export default {
  name: "TwoParts",
  data() {
    return {
      tag: 1,
      currentTabComponent: Chart1
    };
  },
  methods: {
    handleClick() {
      // eslint-disable-next-line no-console
      (this.tag = this.tag * -1),
        this.tag == 1
          ? (this.currentTabComponent = Form)
          : (this.currentTabComponent = Chart1);
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

  & :last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
