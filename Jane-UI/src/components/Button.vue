<template>
  <button class="my-button"><slot /></button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'primary' }
})
</script>

<style scoped>
.my-button {
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3b82f6;
  color: white;
}
</style>