<template>
    <div>
        <UserHover></UserHover>
        <el-menu :default-openeds='openeds' class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 router style="border-right: 0px">
            <el-submenu index="/Main">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>系统管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/user">用户管理</el-menu-item>
                    <el-menu-item index="/role">角色管理</el-menu-item>
                    <template slot="title">分组一</template>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="/UserEdit">用户编辑</el-menu-item>
                    <el-menu-item index="/TwoParts">TwoParts</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组3">
                    <el-menu-item index="/chart1">chart</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="form">form</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/Figure">
                <i class="el-icon-menu"></i>
                <span slot="title">Figure</span>
            </el-menu-item>
            <el-menu-item index="/Chart" @click="handleOpen">
                <i class="el-icon-menu"></i>
                <span slot="title">Chart</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { Message } from "element-ui";

import UserHover from "../user/UserHover";

export default {
  name: "Aside",
  components: { UserHover },
  data() {
    return {
      openeds: ["/Main"]
    };
  },
  methods: {
    handleOpen() {
       Message.info("打开");
    },
    handleClose() {
       Message.info("关闭");
    }
  }
};
</script>

<style scoped>
</style>
