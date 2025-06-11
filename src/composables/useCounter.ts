import { ref } from 'vue'

// export default --> ตอนเรียกจะไม่ใส่ ปีกกา {}
// ฟังชันใช้หลายๆ ครั้ง
export function useCounter() {
  const count = ref(0)

  function increment() {
    // เข้าถึงตัวแปรที่เป็น ref ต้องใช้ .value
    // count.value = count.value + 1
    // count.value += 1
    count.value++
  }

  return {count, increment}
}


