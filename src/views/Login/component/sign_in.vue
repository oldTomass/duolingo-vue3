<template>
    <el-form :model="ruleForm" status-icon label-width="120px" class="demo-ruleForm">
        <el-form-item label="Username" prop="userName">
            <el-input v-model="ruleForm.userName" clearable />
        </el-form-item>
        <el-form-item label="Password" prop="passWord">
            <el-input v-model="ruleForm.passWord" type="password" autocomplete="off" clearable />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">Submit</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive, inject } from 'vue'
import axios from "axios";
import base from "@/api/base";
import router from '@/router';

const $Cookies = inject(["$cookies"])

const ruleForm = reactive({
    userName: '',
    passWord: '',
})

const submitForm = () => {
    if (ruleForm.userName && ruleForm.passWord) {
        // 登录请求
        axios.post(base.login, {
            userName: ruleForm.userName,
            passWord: ruleForm.passWord
        },
            {
                headers: { 'Content-Type': "application/x-www-form-urlencoded" }
            }
        ).then((res) => {// 登陆成功

            // 保存全局Cookie
            console.log("-------cookie---", $Cookies.get("GO_COOKIE_HJM_0627"));
            // 跳转Home
            // router.push('/home')

        }).catch((err) => {
            console.log(err);
        })
    }
}

</script>
