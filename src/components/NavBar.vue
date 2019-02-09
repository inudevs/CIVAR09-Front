<script>
import SideMenu from '@/components/SideMenu.vue'

export default {
  name: 'NavBar',
  components: {
    SideMenu
  },
  data: function () {
    return {
      menuShow: false,
      searchShow: false
    }
  },
  methods: {
    onClickLogo: function () {
      this.$router.push({ name: 'index' })
    },
    onClickMenu: function () {
      this.menuShow = (this.menuShow) ? false : true
    },
    onClickSearch: function () {
      this.searchShow = (this.searchShow) ? false : true
    }
  }
}
</script>

<template>
  <div>
    <side-menu v-model="menuShow">
      <div v-if="menuShow" class="content">
        <div class="profile">
          <img src="https://avatars0.githubusercontent.com/u/32605822"/>
          <span class="name">1520 여준호</span>
          <span class="stats">진행건 1 참여건 1 완료건 1</span>
        </div>
        <div>
          <ul>
            <li>참여한 공구</li>
            <li>완료된 공구</li>
            <li>알림함</li>
          </ul>
        </div>
      </div>
    </side-menu>
    <side-menu v-model="searchShow" :right="true">
      <p>검색 메뉴입니다.</p>
    </side-menu>
    <div class="navbar">
      <i class="fas fa-bars fa-2x" v-on:click="onClickMenu"></i>
      <img src="./../assets/logo.png" class="logo" v-on:click="onClickLogo"/>
      <i class="fas fa-search fa-2x" v-on:click="onClickSearch"></i>
    </div>
  </div>
</template>

<style scoped src="./../css/components/navbar.css"></style>

<style scoped>
div.content {
  color: white;
}
div.profile {
  /* border: 5px solid white; */
  border: 5px solid #fff3c9;
  border-radius: 25px;
  margin: .8em;
  transition: 0.5s;
}
div.profile img {
  width: 50px;
  height: 50px;
  border: 2px solid #fff3c9;
  border-radius: 50%;
  object-fit: cover;
  display: inline-block;
  vertical-align: middle;
  margin: .5em;
}
span.name {
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5em;
  font-weight: 500;
}
span.stats {
  display: block;
  font-size: 1em;
  margin-left: 1em;
}
</style>

<style scoped>
div.search {
  height: 100%;
  width: 20em;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: #ffca12;
  overflow-x: hidden;
  transition: 0.5s;
}
</style>
