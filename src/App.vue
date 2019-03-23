<template>
  <div id="app">
    <button @click="startLoading">loading</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    startLoading () {
      this.$loading.show()

      setTimeout(() => {
        this.$loading.hide()
      }, 4000)
    }
  }
}
</script>
