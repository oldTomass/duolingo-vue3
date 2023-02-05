<template>
    <div class="index">
        <el-tabs type="border-card">
            <el-tab-pane label="Sign in">
                <SignIn></SignIn>
            </el-tab-pane>
            <el-tab-pane label="Sign up">
                <SignUp></SignUp>
            </el-tab-pane>
        </el-tabs>
    </div>
    <button @click="openai">Open AI</button>
</template>

<script setup>
import router from "@/router";
import SignIn from "@/views/Login/component/sign_in.vue";
import SignUp from "@/views/Login/component/sign_up.vue";


const openai = () => {
    router.push('/openai')
}

</script>

<style lang="less" scoped>

</style>
