<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
            <el-input v-model="formInline.userName" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formInline.password" placeholder="密码" type="password"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>

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
