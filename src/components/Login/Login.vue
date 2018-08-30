<template>
    <el-row >
        <el-col :span="18">
                <img style="height:100%; width: 100%" src="https://picsum.photos/1440/942/?random"/>
        </el-col>
        <el-col :span="4">
            <el-form :label-position="right" label-width="80px" :model="formInline">
                <el-form-item label="用户名">
                    <el-input v-model="formInline.userName" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formInline.password" placeholder="密码" type="password"></el-input>
                </el-form-item>

                <el-form-item >
                    <el-button type="primary" @click="onSubmit" style="float:right" >登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>


</template>
<script>
    import {getToken} from "@/api/login";
    // import {postRequest} from "../../util/requests";

    export default {
        name: "Login",
        data() {
            return {
                formInline: {
                    userName: "",
                    password: ""
                }
            };
        },
        methods: {
            onSubmit() {
                getToken(this.formInline);
            }
        }
    };
</script>
<style scoped>
</style>
