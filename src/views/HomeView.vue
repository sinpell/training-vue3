<template>
  <p>Home Page {{ products }}</p>
</template>

<script setup lang="ts">
  import productApi from '@/services/api/features/product'
  import { onMounted, ref } from 'vue'

  const product = ref(null)
  const products = ref(null)

  async function getProduct() {
    try {
      const response = await productApi.getAll()
      products.value = response
    } catch (error) {
      console.log('error', error)
    }
  }
  async function getProductById(id: number) {
    try {
      const response = await productApi.getById(id)
      product.value = response
    } catch (error) {
      console.log('error', error)
    }
  }

  onMounted(() => {
    getProduct()
    getProductById(1)
  })
</script>
