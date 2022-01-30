<template>
  <div>
    <div>{{page}}</div>
    <div>params:{{route.params}}</div>
    <div>query:{{route.query}}</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { ref, onMounted, onBeforeRouteEnter, onBeforeRouteUpdate, onBeforeRouteLeave } from "vue"

const router = useRouter()
const route = useRoute()

let page = '路由-page1'
let params = '-'
let query = '-'

onMounted (() => {
  this.params = route.params
  this.query = route.query
  console.log("onMounted", 'params:', route.params)
  console.log("onMounted", 'query:', route.query)
})

  // onBeforeRouteEnter(() => {
  //   console.log('当进入当前页面路由时，调用回调函数')
  // })

  // onBeforeRouteUpdate(() => {
  //   console.log('当当前路由发生变化时，调用回调函数')
  // })

  // onBeforeRouteLeave(() => {
  //     console.log('当当前页面路由离开的时候调用')
  // })


// onBeforeRouteEnter ((to, from, next) => {
//   console.log('beforeRouteEnter', to)
//   console.log('beforeRouteEnter', from)
//   next()
// })

// onBeforeRouteUpdate ((to, from, next) => {
//   console.log('beforeRouteUpdate', to)
//   console.log('beforeRouteUpdate', from)
//   next()
// })

// onBeforeRouteLeave ((to, from, next) => {
//   console.log('beforeRouteLeave', to)
//   console.log('beforeRouteLeave', from)
//   next()
// })

</script>

<style scoped>
</style>
