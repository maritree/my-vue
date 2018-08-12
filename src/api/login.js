import { postRequest } from "@/util/requests.js";
import store from '@/store/index'

var BASE_URL="/mock"
export function getToken(formInline) {
    postRequest(BASE_URL + "/login", formInline)
        .then(response => {
            var res = response.data;
            // eslint-disable-next-line no-console
            console.info(res);
            if (res.code === 200) {
                store.commit("SET_TOKEN", res.data)
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

export function getUserDetil(formInline) {
    postRequest(BASE_URL + +"/login", formInline)
        .then(response => {
            var res = response.data;
            if (res.code === 200) {
                store.commit("SET_TOKEN",res.data)
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
