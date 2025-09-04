<script setup>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";

const headerHeight = ref("16vh");

const handleScroll = () => {
    const scrollY = window.scrollY;
    const minHeight = 10;
    const maxHeight = 16;
    const limit = 100;

    let newHeight = maxHeight - (scrollY / limit) * (maxHeight - minHeight);
    if (newHeight < minHeight) newHeight = minHeight;
    if (newHeight > maxHeight) newHeight = maxHeight;

    headerHeight.value = `${newHeight}vh`;
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
            class="w-full h-[16vh] fixed top-0 left-0 transition-all duration-300 ease-in-out"
            :style="{ height: headerHeight }"
        >
            <Header />
        </header>

        <main class="mt-[16vh] w-full overflow-visible">
            <Main />
        </main>
    </div>
</template>
