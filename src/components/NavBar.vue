<script>
export default {
    name: 'NavBar',
    methods: {
        onClickLogo: function () {
            this.$router.push({ name: 'index' })
        },
        onClickMenu: function () {

        },
        onClickSearch: function () {

        }
    }
}
</script>

<template>
  <div>
      <i class="fas fa-bars fa-2x" v-on:click="onClickMenu"></i>
      <img src="./../assets/logo.png" class="logo" v-on:click="onClickLogo"/>
      <i class="fas fa-search fa-2x" v-on:click="onClickSearch"></i>
  </div>
</template>

<style scoped src="./../css/components/navbar.css"></style>
