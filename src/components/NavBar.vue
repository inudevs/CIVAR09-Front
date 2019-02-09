<script>
import SideMenu from '@/components/SideMenu.vue'

export default {
  name: 'NavBar',
  components: {
    SideMenu
  },
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    onClickLogo: function () {
      this.$router.push({ name: 'index' })
    },
    onClickMenu: function () {
      this.show = (this.show) ? false : true
    },
    onClickSearch: function () {

    }
  }
}
</script>

<template>
  <div>
    <side-menu v-model="show"/>
    <div class="navbar">
      <i class="fas fa-bars fa-2x" v-on:click="onClickMenu"></i>
      <img src="./../assets/logo.png" class="logo" v-on:click="onClickLogo"/>
      <i class="fas fa-search fa-2x" v-on:click="onClickSearch"></i>
    </div>
  </div>
</template>

<style scoped src="./../css/components/navbar.css"></style>
