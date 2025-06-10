<template>
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Prop </b> </p>
  <learn-prop />
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Emit </b> </p>
  <learn-emit v-on:update="updateCount" />
  <p>Number {{ number }}</p>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Slot  </b> </p>
  <learn-slot>
    <template v-slot:body>
      <input type="text">
    </template>
  </learn-slot>
  <hr>

  <p> <b> -------------------- Expose  </b> </p>
  <learn-expose ref="learn-expose" />
  <button @click="countParent"> + parent </button>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import learnProp from '@/components/LearnProp.vue'
  import learnEmit from '@/components/LearnEmit.vue'
  import learnSlot from '@/components/LearnSlot.vue'
  import learnExpose from '@/components/LearnExpose.vue'

  // ---------- Emit ----------
  const number = ref(0)
  function updateCount (params: number) {
    number.value += params
  }

  // ---------- Expose ----------
  const expose = useTemplateRef('learn-expose')
  function countParent () {
    console.log('expose', expose.value)
    expose.value!.count()
  }
</script>

<style scoped>

</style>
