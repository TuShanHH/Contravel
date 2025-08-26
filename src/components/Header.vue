<script setup>
let cityName = ref("");

const handleCliack = () => {
  console.log(cityName);
};
</script>

<template>
  <!-- <wl-input v-model="cityName" placeholder="请输入城市名称"></wl-input> -->
  <wl-button>创建旅行 </wl-button>

  <input
    type="text"
    v-model="cityName"
    placeholder="请输入城市名称"
    @change="handleCliack()"
  />
</template>

<style scoped></style>
