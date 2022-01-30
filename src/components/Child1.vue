<template>
  <div>
    子组件
    <h1>{{newCount}}</h1>
    <button @click="increment">子组件+</button>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue"
// export default {
//   props: {
//     count: Number,
//   },
//   setup(props, { emit }) {
//     const newCount = computed({
//       get: () => props.count,
//       set: (value) => emit("increment:count"),
//     });
//     const increment=()=>{
//         newCount.value++
//     }
//     return {
//       newCount,
//       increment,
//     };
//   },
// };
// props, context

const props = defineProps({
  count: Number,

})

const emit = defineEmits(["increment"])

const expose = defineExpose({
    newCount: {
      type: Number,
      required: true
    },
})

const newCount = computed({
  get: () => props.count,
  set: (value) => this.$emit("increment:count"),
})

const increment=()=>{
    newCount.value++
}



</script>

<style></style>


