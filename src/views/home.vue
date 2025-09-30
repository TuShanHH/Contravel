<script setup>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Footer from "@/components/Footer.vue";

const headerHeight = ref("16vh");

const handleScroll = () => {
    const scrollY = window.scrollY;
    let newHeight = calculateActualHeight(scrollY);
    headerHeight.value = `${newHeight}vh`;
};

/**
 *根据滚动距离计算出实际的高度值
 *
 * @param {number} distanceY 滚动的距离
 * @returns {number} 实际的高度值
 */
const calculateActualHeight = (distanceY) => {
    let ActualHeight = 16 - (distanceY / 100) * 8;
    return ActualHeight < 8 ? 8 : ActualHeight;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div class="w-full h-screen">
        <header
            class="w-full fixed top-0 left-0 transition-all duration-300 ease-in-out"
            :style="{ height: headerHeight }"
        >
            <Header :headerHeight="headerHeight"  />
        </header>

        <main class="mt-[16vh] w-full min-h-screen overflow-visible">
            <Main />
        </main>

        <footer class="w-full h-auto">
            <Footer />
            测试合并
        </footer>
    </div>
</template>
