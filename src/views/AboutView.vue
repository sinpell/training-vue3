<template>
  <div class="about">
    <h1>About</h1>
    <h1> {{ counter.count }}</h1>
    <button @click="counter.increment">Increment</button>

    <p>Basic Pinia</p>
    {{ counterStore.count }}
    <button @click="counterStore.increment"> Increment </button>
  </div>
</template>

<script lang='ts' setup>
// export ได้หลายตัว
  import { useCounter } from '../composables/useCounter'
  import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()


  const counter = useCounter()


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
