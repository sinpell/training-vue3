<template>
  <p>Home Page {{ products }}</p>
</template>

<script setup lang="ts">
  import productApi from '../services/api/features/product'
  import { onMounted, ref } from 'vue'

  const products = ref(null)

  async function getProduct() {
    try {
      const response = await productApi.getAll()
      products.value = response
    } catch (error) {
      console.log('error', error)
    }
  }

  onMounted(() => {
    getProduct()
  })
</script>
