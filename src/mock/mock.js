import Mock from "mockjs";

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: "350-600"
});

var baseUrlx = "/mock";

// Mock响应模板
// Mock.mock(baseUrlx + "/data", {
//   "list|1-10": [
//     {
//       "id|+1": 1, // 序号 属性值自动加 1，初始值为 1
//       businesscode: /\d{1,10}/, // 商户ID
//       "proversion|1": ["标准版", "企业版", "试用版"], // 产品版本 随机选取 1 个元素
//       storecode: /\d{1,10}/, // 门店编码
//       storename: "@cname", // 门店名称
//       "status|1": ["试用", "使用", "续用"], // 状态 随机选取 1 个元素
//       effectdate: '@date("yyyy-MM-dd")' // 有效日期
//     }
//   ]
// });
Mock.mock(baseUrlx + "/user/list", {
  data: [
    {
      neckName: "2016-05-01",
      password: 31231,
      userName: "上海市普陀区金沙江路 1519 弄"
    },
    {
      neckName: "2016-05-01",
      password: 43114231432,
      userName: "上海市普陀区金沙江路 1519 弄"
    },
    {
      neckName: "2016-05-01",
      password: 4114231423,
      userName: "上海市普陀区金沙江路 1519 弄"
    }
  ]
});

Mock.mock(baseUrlx + "/Login", {
  data: [
    {
      neckName: "2016-05-01",
      password: 123112,
      userName: "上海市普陀区金沙江路 1519 弄"
    },
    {
      neckName: "2016-05-01",
      password: "王小虎",
      userName: "上海市普陀区金沙江路 1519 弄"
    },
    {
      neckName: "2016-05-01",
      password: "王小虎",
      userName: "上海市普陀区金沙江路 1519 弄"
    }
  ]
});

Mock.mock(baseUrlx + "/login", {
  code: 200,
  data:
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ4aWFvbWluZyIsImlzcyI6ImVjaGlzYW4iLCJleHAiOjE1MzQwNDU4ODUsImlhdCI6MTUzNDA0MjI4NSwicm9sIjpbIjEiLCIyIl19.btrcjktTrBIUoZes59-XtIBgjopsnTvpzDDq491y2Vf3BwX4piurdhbMDWCo7WnHSelFKAZHSD9ROBjny3iBAA",
  message: "SUCCESS"
});
