<template>
    <h1>首页：{{ userName }}</h1>
</template>

<script setup>
import { inject } from 'vue'
const $Cookies = inject(['$cookies'])

const userName = $Cookies.get('GO_COOKIE_HJM_0627')

</script>

<style lang="less" scoped>

</style>