<template>
  <div class="box">
    <input type="button" value="-" @click="sub">
    <span>{{ count }}</span>
    <input type="button" value="+" @click="add">
  </div>
</template>

<script>
export default {
  name: 'Count',
  data () {
    return {
      step: 1,
      count: 9
    }
  },
  props: {
    default: 0
  },
  methods: {
    go (val) {
      console.log(parseInt(val))
      this.count = parseInt(this.count) + parseInt(val)
      this.$emit('add', this.count)
    },
    add () {
      this.go(this.step)
    },
    sub () {
      this.go(-this.step)
    }
  },
  created () {
    this.count = this.default
  }
}
</script>

<style scoped>

.box {
  width: 100px;
  margin: auto;
  padding: 8px;
}

</style>
