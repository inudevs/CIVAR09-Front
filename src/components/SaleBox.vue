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

@media (max-width: 1000px) {
  div.title span.name {
    font-size: 1.5em;
  }
  div.title span.days {
    font-size: 1em;
  }
  span.profile {
    font-size: 1.2em;
  }
  span.progress {
    font-size: 1em;
  }
}

@media (max-width: 570px) {
  div.info {
    margin-left: .1em;
    margin-right: .1em;
  }
  div.title span.name {
    font-size: 1em;
  }
  div.title span.days {
    font-size: .8em;
  }
  span.profile {
    font-size: .8em;
    float: none;
  }
  span.progress {
    font-size: .5em;
    float: none;
    margin-left: .4em;
  }
}
</style>
