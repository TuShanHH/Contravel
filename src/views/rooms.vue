<script setup>
import Header from "@/components/Header.vue";

const value = ref("");
</script>

<template>
    <div>
        <Header />
        <wl-input v-model="value"  placeholder="请输入搜索内容"/>
    </div>
</template>

<style scoped></style>
