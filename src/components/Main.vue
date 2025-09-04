<script setup>
const city = "伦敦";
</script>

<template>
    <div class="w-72/100 mx-auto min-h-screen flex flex-col">
        <div
            v-for="outer in 20"
            :key="outer"
            class="w-full h-auto flex flex-col"
        >
            <span>{{ city }}热门房源 ></span>
            <div class="flex justify-between gap-5">
                <div
                    class=" aspect-[1] flex-1 bg-[url('/src/assets/example.jpeg')] bg-cover bg-center rounded-lg"
                    v-for="inner in 7"
                    :key="`${outer}-${inner}`"
                ></div>
            </div>
        </div>
    </div>
</template>
