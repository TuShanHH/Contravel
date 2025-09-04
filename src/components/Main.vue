<script setup>
const city = "伦敦";
</script>

<template>
    <div
        class="w-72/100 mx-auto h-auto flex flex-col justify-center items-center"
    >
        <div v-for="outer in 20" :key="outer" class="w-full h-[20vh]">
            <span class="w-full bg-amber-500">{{ city }}热门房源 ></span>
            <div class="flex justify-between w-full h-8">
                <div
                    class="h-full w-full"
                    v-for="inner in 7"
                    :key="`${outer}-${inner}`"
                ></div>
            </div>
        </div>
    </div>
</template>
