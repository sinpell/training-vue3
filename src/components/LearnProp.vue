<template>
  <p>{{ props.title }}</p>
  <p>{{ props.subtitle }}</p>
</template>

<script setup lang="ts">
  interface Prop {
    //? มีหรือไม่มีก้ได้ optional
    //? ถ้าไม่ใส่ default จะเป็น undefined
    title?: string
    subtitle?: string
  }
  const props = withDefaults(defineProps<Prop>(), {
    title: '555',
    subtitle: 'Subtitle'
  })
</script>

<style scoped>

</style>
