<script>
import ProgressBar from './../components/ProgressBar.vue'

export default {
  name: 'SaleBox',
  components: {
    ProgressBar
  },
  methods: {
    view: function () {
      this.$router.push({ name: 'sale_view' })
    }
  }
}
</script>

<template>
  <div class="product" v-on:click="view">
    <img src="./../assets/product.png"/>
    <div class="info">
      <div class="title">
        <span class="name">모트모트 플래너</span>
        <span class="days">D-7</span>
      </div>
      <div>
        <span class="profile">1420 윤서진</span>
        <span class="progress">10500/15000</span>
      </div>
      <div class="progress-wrap">
        <ProgressBar :progress="40" :minimal="true"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

div.info {
  margin-left: .7em;
  margin-right: .7em;
}

div.title span.name {
  color: #ffba00;
  font-weight: 900;
  font-size: 2em;
}

div.title span.days {
  color: #ffd668;
  font-weight: 500;
  font-size: 1.5em;
  margin-left: 5px;
}

span.profile {
  color: #ffd668;
  font-weight: 700;
  font-size: 1.5em;
  display: inline-block;
  /* float: left; */
}

span.progress {
  color: #ffca12;
  font-weight: 700;
  font-size: 1.3em;
  float: right;
}
</style>
