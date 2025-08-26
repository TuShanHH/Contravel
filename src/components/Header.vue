<script setup>
let cityName = ref("");
</script>

<template>
    <wl-input
        v-model="cityName"
        placeholder="请输入市名称"
        @input="handleCliack()"
    ></wl-input>
</template>

<style scoped></style>
