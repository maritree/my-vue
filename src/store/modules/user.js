import { postRequest } from "@/util/requests.js";

const user = {
  state: {
    user: "hhsahshaiu",
    status: "",
    code: "",
    token: "",
    name: "",
    avatar: "",
    introduction: "",
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    // 用户名登录
    loginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        postRequest("/login", userInfo)
          .then(response => {
            const data = response.data.data;
            commit("SET_TOKEN", data.token);
            commit("SET_STATUS", "logged");
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // // 获取用户信息
    // GetUserInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getUserInfo(state.token).then(response => {
    //       if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
    //         reject('error')
    //       }
    //       const data = response.data
    //
    //       if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
    //         commit('SET_ROLES', data.roles)
    //       } else {
    //         reject('getInfo: roles must be a non-null array !')
    //       }
    //
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    logOut({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          commit("SET_TOKEN", "");
          commit("SET_ROLES", []);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }
  }
};

export default user;
