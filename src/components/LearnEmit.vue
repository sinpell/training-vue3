<template>
  <button @click="count"> + </button>
</template>

<script setup lang="ts">
  interface Emit {
    update: [value: number]
  }
  const emit = defineEmits<Emit>()
  function count () {
     emit('update', 2)
    // const num: unknown = 2

    // if (typeof num === 'number') {
    //   emit('update', num as number)
    // }

    // emit('update', num as number)
  }

</script>

<style scoped>

</style>
