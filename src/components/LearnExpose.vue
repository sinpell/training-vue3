<!-- Component ลูก -->
<template>
  <p> Expose: {{ number }}</p>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const number = ref(0)

  function count () {
    number.value += 1
  }

  // การเข้าถึงได้ในอนาคต
  defineExpose({ number, count })
</script>

<style scoped>
</style>
