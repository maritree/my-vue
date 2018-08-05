// router.js
import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/layout/Main";
import TwoParts from "@/components/layout/TwoParts";
import Chart1 from "@/components/chart/Chart1";
import Form from "@/components/chart/Form";
import UserManage from "@/components/user/UserManage";

Vue.use(Router);
// 使用了vue-routerd的[Lazy Loading Routes](https://router.vuejs.org/en/advanced/lazy-loading.html)

// 所有权限通用路由表
// 如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  { path: "/main", component: UserManage, name: "UserManage" },
  { path: "/user", component: UserManage, name: "user" },
  { path: "/role", component: Main, name: "role" },
  {
    path: "/TwoParts",
    component: TwoParts,
    name: "首页",
    children: [
      {
        path: "/chart",
        component: Chart1,
        name: "Chart1",
        meta: { title: "dashboard", icon: "dashboard", noCache: true }
      },     {
        path: "/form",
        component: Form,
        name: "Form",
        meta: { title: "dashboard", icon: "dashboard", noCache: true }
      }
    ]
  }
];

// 实例化vue的时候只挂载constantRouter
export default new Router({
  routes: constantRouterMap
});

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    name: "用户管理",
    path: "/user",
    component: TwoParts,
    meta: {
      title: "documentation",
      icon: "documentation",
      noCache: true
    }
  },
  {
    name: "系统管理",
    path: "/role",
    component: TwoParts,
    meta: {
      title: "documentation",
      icon: "documentation",
      noCache: true
    }
  },
  { path: "*", redirect: "/404", hidden: true }
];
