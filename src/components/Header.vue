<script setup>
const props = defineProps({
    headerHeight: String,
});
let open = ref(false);

const toBeLandlord = () => {
    open.value = true;
};
</script>

<template>
    <div
        class="border-b-1 border-b-gray-200 px-[14%] w-full h-full flex flex-row justify-between items-center bg-[linear-gradient(180deg,#ffffff_39.9%,#f8f8f8_100%)]"
    >
        <div class="text-[#dfceea] h-full">
            <div
                class="flex flex-row items-center justify-between"
                :style="{
                    height: props.headerHeight === '8vh' ? '100%' : '50%',
                }"
            >
                <img src="@/assets/icon.png" alt="" width="32" height="32" />
                <span>Airbnb</span>
            </div>
        </div>

        <div class="h-full flex flex-col items-center justify-between">
            <div
                class="h-full flex flex-row items-center justify-between"
                :style="{
                    display: props.headerHeight === '8vh' ? 'none' : 'flex',
                }"
            >
                <wl-button>房源</wl-button>
                <wl-button>体验</wl-button>
                <wl-button>服务</wl-button>
            </div>
            <div class="h-full flex flex-row items-center justify-between">
                <wl-button>地点</wl-button>
                <wl-button>入住</wl-button>

                <wl-button>退房</wl-button>

                <wl-button>人员</wl-button>
            </div>
        </div>

        <div class="h-full">
            <div
                class="flex flex-row items-center justify-between"
                :style="{
                    height: props.headerHeight === '8vh' ? '100%' : '50%',
                }"
            >
                <wl-button @click="toBeLandlord">成为房东</wl-button>
            </div>
        </div>
    </div>

    <wl-dailog v-model="open" @confirm="handleConfirm">
        <template #header>提示</template>
        你确定要执行此操作吗？
    </wl-dailog>
</template>
