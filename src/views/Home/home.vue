<template>
    <h1>首页：{{ userName }}</h1>
</template>

<script setup>
import { inject, reactive } from 'vue'
import axios from "axios";
import base from "@/api/base";


const $Cookies = inject(['$cookies'])
const userName = $Cookies.get('GO_COOKIE_HJM_0627')


</script>

<style lang="less" scoped>

</style>