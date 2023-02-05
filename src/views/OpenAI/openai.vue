<template>
    <div class="ai">
        <h1>OpenAI：Open your New World</h1>
        <br>
        <input type="text" v-model="input.msg" /><button @click="postOpenAI">Tell Me</button>
        <br>
        <p>{{ input.respText }}</p>
    </div>
</template>

<script setup>
import { inject, reactive } from 'vue'
import axios from "axios";
import base from "@/api/base";

const $Cookies = inject(['$cookies'])
const userName = $Cookies.get('GO_COOKIE_HJM_0627')

// const resp = reactive('')
const input = reactive({
    msg: '',
    respText: ''
})

const postOpenAI = () => {
    // AI请求
    axios.post(base.chatText,
        {
            reqText: input.msg
        },
        {
            headers: { 'Content-Type': "application/x-www-form-urlencoded" }
        }
    ).then((res) => {// 相应成功
        input.respText = res.data
    }).catch((err) => {
        console.log(err);
    })
}

</script>

<style lang="less" scoped>
.ai {
    text-align: center;
}
</style>