<template>
  <div class="hello">
    <h3>{{ msg }}<span @click="changeMsg">-></span></h3>
    <h3>Essential Links</h3>
    <ul>
      <li v-for="e in arr" :key="e.id">
        <a :href="e.url" target="_blank">
          {{ e.name }}
        </a>
      </li>
    </ul>

    <input type="text" v-model="watchObj.name" />
    <count default="8" @add="add(2)" />
    <!-- <UserCell></UserCell> -->

    <div class="page">
      <div class="page-item" @click="gotoPage">Page</div>
      <div class="page-item" @click="gotoUserList">UserList</div>
      <div class="page-item" @click="gotoGrid">Grid</div>
      <div class="page-item" @click="gotoLayoutTest">layoutTest</div>

      <div class="page-item" @click="gotoFlexDemo">FlexDemo</div>
      <div class="page-item" @click="gotoTableViewDemo">tableViewDemo</div>

      <!-- <router-link v-for='e in RouterMap' :to='{ path: e.path, query: { plan: 'private' } }' class="page-item"
        >{{ e.name }}</router-link> -->
      <router-link :to="{ path: '/pageSetup', query: { plan: 'private' }}" class="page-item" >pageSetup</router-link>
      <router-link :to="{ path: '/girdDemo', query: { plan: 'private' }}" class="page-item" >GirdDemo</router-link>
      <router-link :to="{ path: '/domChange', query: { plan: 'private' }}" class="page-item" >domChange</router-link>
      <router-link :to="{ path: '/layoutDemo', query: { plan: 'private' }}" class="page-item" >layoutDemo</router-link>
      <router-link :to="{ path: '/compDemo', query: { plan: 'private' }}" class="page-item" >compDemo</router-link>
      <router-link :to="{ path: '/slotDemo', query: { plan: 'private' }}" class="page-item" >slotDemo</router-link>
      <router-link :to="{ path: '/setupDemo', query: { plan: 'private' }}" class="page-item" >setupDemo</router-link>
      <router-link :to="{ path: '/dataTransferDemo', query: { plan: 'private' }}" class="page-item" >dataTransferDemo</router-link>
      <router-link :to="{ path: '/tableDemo', query: { plan: 'private' }}" class="page-item" >tableDemo</router-link>
      <router-link :to="{ path: '/userlist', query: { plan: 'private' }}" class="page-item" >userlist</router-link>
      <router-link :to="{ path: '/userlist1', query: { plan: 'private' }}" class="page-item" >userlist1</router-link>
      <router-link :to="{ path: '/alertSheetDemo', query: { plan: 'private' }}" class="page-item" >alertSheetDemo</router-link>
      <router-link :to="{ path: '/pullRefreshDemo', query: { plan: 'private' }}" class="page-item" >pullRefreshDemo</router-link>
      <router-link :to="{ path: '/pullMoreDemo', query: { plan: 'private' }}" class="page-item" >pullMoreDemo</router-link>
      <router-link :to="{ path: '/sceneList', query: { plan: 'private' }}" class="page-item" >sceneList</router-link>
      <router-link :to="{ path: '/vanConfigProvider', query: { plan: 'private' }}" class="page-item" >vanConfigProvider</router-link>
      <router-link :to="{ path: '/father', query: { plan: 'private' }}" class="page-item" >father</router-link>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { RouterMap } from '@/router/routes'

import Count from '@/components/Count.vue'
// import UserCell from '@/components/UserCell.vue'
const router = useRouter();
const route = useRoute();

const msg = 'Welcome to Your Vue.js App'
const arr = [
        {url: 'http://router.vuejs.org/', name: 'vue-router', id: 0},
        {url: 'http://vuex.vuejs.org/', name: 'vuex', id: 1},
        {url: 'http://vue-loader.vuejs.org/', name: 'vue-loader', id: 2},
        {url: 'https://github.com/vuejs/awesome-vue', name: 'awesome-vue', id: 3}
      ]

const changeMsg = () => {
      this.msg = this.msg === 'Welcome to Your Vue.js App' ? '前端框架' : 'Welcome to Your Vue.js App'
    }
const add = (val) => {
      console.log('父组件', val)
    }
const gotoPage = () => {
      router.push({path: '/page/12', query: {name: 'hf'}})
    }
const gotoUserList = () => {
      router.push({path: '/user', query: {name: 'hf'}})
    }
const gotoGrid = () => {
      router.push({path: '/grid', query: {name: 'hf'}})
    }
const gotoLayoutTest = () => {
      router.push({path: '/layoutTest', query: {name: 'hf'}})
    }

const gotoFlexDemo = () => {
      router.push({path: '/flexDemo', query: {name: 'hf'}})
    }
const gotoTableViewDemo = () => {
      router.push({path: '/tableViewDemo', query: {name: 'hf'}})
    }

const watchObj = {
        name: '-----姓名'
      }
    

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.page {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
}

.page-item {
  margin: 0 10px;
  /* border: 1px solid red; */
  color: red;
  text-decoration: underline;
}
</style>
