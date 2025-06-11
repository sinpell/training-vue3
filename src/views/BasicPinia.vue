<template>
  <div>
    <p>Basic Pinia</p>
    {{ counterStore.count }}
    <button @click="counterStore.increment"> Increment </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()

</script>

<style scoped>

</style>
