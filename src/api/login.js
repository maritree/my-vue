import { postRequest } from "@/util/requests.js";
import store from "@/store/index";
import { Message } from "element-ui";
import router from "@/router";

var BASE_URL = "/api";

export function getToken(formInline) {
  postRequest(BASE_URL + "/login", formInline)
    .then(response => {
      if (response.status === 200) {
        store.commit("SET_TOKEN", response.headers.token);
        // eslint-disable-next-line no-console
        console.info(response.headers.token);
        Message.success("登陆成功");
        router.push({ path: "/" });
      } else {
        // eslint-disable-next-line no-console
        console.info(response);
      }
    })
    .catch(reason => {
      // eslint-disable-next-line no-console
      console.info(reason);
    });
}

export function getUserDetil(formInline) {
  postRequest(BASE_URL + +"/login", formInline)
    .then(response => {
      var res = response.data;
      if (res.code === 200) {
        store.commit("SET_TOKEN", res.data);
        // eslint-disable-next-line no-console
        console.info(res.data);
      } else {
        // eslint-disable-next-line no-console
        console.info(res.code + "---" + res.message);
      }
    })
    .catch(reason => {
      // eslint-disable-next-line no-console
      console.info(reason);
    });
}
