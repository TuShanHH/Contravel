<script setup>
import axios from "../axios/axiosInstance.js";

onMounted(async () => {
    const res = await axios.get("hello/");
    console.log(res.data.message);
});
</script>

<template>
    <div class="w-[100vw] h-[20vh] flex bg-amber-300">
        <span>Airbnb</span>
        <wl-button>房源</wl-button>
        <wl-button>体验</wl-button>
        <wl-button>服务</wl-button>
        <wl-button>成为房东</wl-button>
    </div>
</template>

<style scoped></style>
