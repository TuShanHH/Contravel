<script setup>
const city = "伦敦";
</script>

<template>
    <div
        class="w-72/100 mx-auto h-auto flex justify-center items-center"
        v-for="value in 20"
        :key="value"
    >
        <div class="w-full h-[20vh]">
            <span class="w-full bg-amber-500">{{ city }}热门房源 ></span>
            <div class="w-full h-[90%] bg-amber-950"></div>
        </div>
    </div>
</template>

<style scoped></style>
