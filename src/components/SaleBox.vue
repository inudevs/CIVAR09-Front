<script>
import ProgressBar from './../components/ProgressBar.vue'

export default {
  name: 'SaleBox',
  components: {
    ProgressBar
  },
  methods: {
    view: function () {
      this.$router.push({ 
        name: 'sale_view', 
        params: { 
          sale_id: this.product.id
        }
      })
    }
  },
  props: {
    product: {
      type: Object
    }
  }
}
</script>

<template>
  <div class="product" v-on:click="view">
    <img :src="require(`../assets/examples/images/${product.id}.png`)"/>
    <div class="info">
      <div class="title">
        <span class="name">{{ product.name }}</span>
        <span class="days">D-{{ product.days }}</span>
      </div>
      <div>
        <span class="profile">{{ product.profile.studentId }} {{ product.profile.name }}</span>
        <span class="progress">{{ product.total }}/{{ product.goal }}</span>
      </div>
      <div class="progress-wrap">
        <ProgressBar :progress="Math.floor((product.total/product.goal || 0)*100)" :minimal="true"/>
      </div>
    </div>
  </div>
</template>

<style scoped src="./../css/components/salebox.css"></style>
