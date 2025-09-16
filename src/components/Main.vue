<script setup>
const router = useRouter();
const city = "伦敦";

const toRooms = () => {
    router.push('/rooms');
};
</script>

<template>
    <div class="w-72/100 mx-auto min-h-screen flex flex-col">
        <div
            v-for="outer in 10"
            :key="outer"
            class="w-full h-auto flex flex-col"
        >
            <wl-button
                class="mt-8 mb-4 text-xl/6 font-normal"
                @click="toRooms()"
                >大洋城的热门房源 ></wl-button
            >
            <div class="flex justify-between gap-3">
                <div
                    class="aspect-[20/19] flex-1 bg-[url('/src/assets/example.jpeg')] bg-cover bg-center rounded-xl"
                    v-for="inner in 7"
                    :key="`${outer}-${inner}`"
                ></div>
            </div>
        </div>
    </div>
</template>
