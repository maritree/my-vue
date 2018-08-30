import store from "@/store/index";
import {Message} from "element-ui";
import router from "@/router";


export function distory() {
    // router.push('/main')

    store.dispatch('logOut').then(() => {
        Message.success("登出成功")
        router.push('/Login')
    })
}


