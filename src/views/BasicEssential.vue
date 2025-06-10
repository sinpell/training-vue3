<template>
  <p> <b> -------------------- State </b> </p>
  {{ count }}
  <button @click="count++"> Add Count </button>
  <hr>

  <p> <b> -------------------- Directive </b> </p>
  <p>
    <b> Event Handling </b>
  </p>
  <p>Number is {{ number }}</p>
  <button @click="number++"> Add </button>
  <hr>

  <p> <b> Two Way Binding </b> </p>
  <div>
    <span> First Name </span>
    <input v-model="firstName" />
  </div>
  <div>
    <span> Last Name </span>
    <input v-model="lastName" />
  </div>
  <p>firstName => {{ firstName }}</p>
  <p>lastName => {{ lastName }}</p>
  <button @click="firstName = ''"> Clear First Name </button>
  <hr>

  <p> <b> Attribute Binding </b> </p>
  <div>
    <img :src="src" style="width: 200px;" />
  </div>
  <hr>

  <p> <b> Conditional Rendering </b> </p>
  <p v-if="type === 'A'"> if A </p>
  <p v-else-if="type === 'B'"> else-if B </p>
  <p v-else> else Other </p>
  <p v-show="type === 'A'"> show A </p>
  <hr>

  <p> <b> List Rendering </b> </p>
  <li v-for="(item, index) in items" :key="index">
    {{ item.message }}
  </li>
  <hr>

  <p> <b> -------------------- Functions </b> </p>
  <button @click="defining"> Defining Function </button>
  <button @click="arrow"> Arrow Function </button>
  <hr>

  <p> <b> -------------------- Computed </b> </p>
  <p> <b> Computed Refs </b> </p>
  <p>
    <span>Has published books: </span>
    <span>{{ book }}</span>
  </p>
  <hr>

  <p> <b> Writable Computed </b> </p>
  <input v-model="fullName" placeholder="ชื่อ-สกุล" />
  <p>First Name: {{ fName }}</p>
  <p>Last Name: {{ lName }}</p>
  <p>Full Name: {{ fullName }}</p>
  <hr>

  <p> <b> -------------------- Template Refs </b> </p>
  <input ref="myInput" />
  <button @click="logInput"> Reference Input </button>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, watchEffect, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

// ---------- State ----------
const count = ref(0)

// ---------- Directive ----------
const number = ref(0)

// Two Way Binding
const firstName = ref('')
const lastName = ref('')

// Attribute Binding
const src = ref('https://job.science.cmu.ac.th/upload/company/1-2024-01-24-926040289.png')

// Conditional Rendering
const type = ref('B')

// List Rendering
const items = ref([
  { message: 'Foo' },
  { message: 'Bar' }
])

// ---------- Functions ----------
function defining () {
  alert('Hello Defining Function')
}
function logName (name: string) {
  console.log('name: ', name)
}
function returnName (name: string): string {
  return name
}
const arrow = () => {
  alert('Hello Arrow Function')
}

// ---------- Computed ----------
// Computed Ref
const author = reactive({
  name: 'John Doe',
  books: []
})
const book = computed(() => {
  return author.books.length > 0 ? 'Y' : 'N'
})

// Writable Computed
const fName = ref('John')
const lName = ref('Doe')
const fullName = computed({
  get () {
    return `${fName.value} ${lName.value}`
  },
  set (newValue: string) {
    const parts = newValue.split(' ')
    fName.value = parts[0] || ''
    lName.value = parts[1] || ''
  }
})

// ---------- Watcher ----------
const watch1 = ref('watch1')
const watch2 = ref('watch2')
watch(watch1, (newValue, oldValue) => {
  console.log('ทำงานเมื่อ watch1 เปลี่ยน')
  console.log('เปลี่ยนจาก', oldValue, 'เป็น', newValue)
})
watchEffect(() => {
  console.log('watchEffect watch1', watch1.value)
  console.log('watchEffect watch2', watch2.value)
})

// ---------- Template Refs ----------
const myInput = ref<HTMLInputElement | null>(null)
function logInput () {
  if (myInput.value) {
    myInput.value.style.backgroundColor = 'red'
    console.log('my input', myInput.value)
  }
}

// ---------- Lifecycle ----------
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<style scoped>
</style>
