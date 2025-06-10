<template>
  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Router View & Router Link </b> </p>
  <div>
    <router-link to="/essential"> Basic Essentials </router-link>
  </div>
  <div>
    <router-link to="/component"> Basic Components </router-link>
  </div>
  <div>
    <button @click="goToEssential"> Go To Basic Essentials </button>
  </div>
  <div>
    <button @click="goToComponent"> Go To Basic Components </button>
  </div>
  <hr>

  <!-- ----------------------------------------------------------------------------------------------- -->
  <p> <b> -------------------- Dynamic Route </b> </p>
  <button @click="goToProductID('ppp')">
    Go To Product
  </button>

</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()

  function goToEssential() {
    router.push('/essential')
  }

  function goToComponent() {
    router.push('/component')
  }

  function goToProductID(productId: string) {
    router.push({
      name: 'ProductPage',
      params: { id: productId }
    })
  }


</script>

<style scoped>

</style>
