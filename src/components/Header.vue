<script setup>
// import axios from "../axios/axiosInstance.js";

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
</script>

<template>
    <div
        class="px-[14%] sticky w-full h-[16vh] flex justify-between items-center bg-[linear-gradient(180deg,#ffffff_39.9%,#f8f8f8_100%)]"
    >
        <span>Airbnb</span>
        <wl-button>房源</wl-button>
        <wl-button>体验</wl-button>
        <wl-button>服务</wl-button>
        <wl-button>成为房东</wl-button>
    </div>
</template>
