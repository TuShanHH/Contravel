<script setup>
// import axios from "../axios/axiosInstance.js";
let open = ref(false);
// onMounted(async () => {
//     const res = await axios.get("hello/");
//     console.log(res.data.message);

//     // const res1 = await axios.post("register/", {
//     //     username: "testuser1",
//     //     email: "test@example.com",
//     //     password: "123456",
//     // });

//     const res2 = await axios
//         .post("login/", {
//             username: "jane",
//             password: "wmdelel2020",
//         })
//         .then((response) => {
//             const access_token = response.data.access;
//             const refresh_token = response.data.refresh;
//             axios.defaults.headers.common[
//                 "Authorization"
//             ] = `Bearer ${access_token}`;

//             const res4 = axios.post("token/refresh/", {
//                 refresh: refresh_token,
//             });
//         });
// });
const toBeLandlord = () => {
    open.value = true;
};

function handleConfirm() {
    alert("用户点击了确定");
}
</script>

<template>
    <div
        class="border-b-1 border-b-gray-200 px-[14%] w-full h-full flex justify-between items-center bg-[linear-gradient(180deg,#ffffff_39.9%,#f8f8f8_100%)]"
    >
        <span class="text-[#5850ec]">Airbnb</span>
        <wl-button>房源</wl-button>
        <wl-button>体验</wl-button>
        <wl-button>服务</wl-button>
        <wl-button @click="toBeLandlord">成为房东</wl-button>
    </div>

    <wl-dailog v-model="open" @confirm="handleConfirm">
        <template #header>提示</template>
        你确定要执行此操作吗？
    </wl-dailog>
</template>
