<script>
import NavBar from '@/components/NavBar.vue'
import SaleBox from '@/components/SaleBox.vue'

export default {
  name: 'Index',
  components: {
    NavBar,
    SaleBox
  }
}
</script>

<template>
  <div class="container">
    <NavBar/>
    <div id="content">
      <div class="category">
        <h1>문구 <i class="fas fa-angle-right"></i></h1>
        <div class="products">
          <SaleBox/>
          <SaleBox/>
          <SaleBox/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.category h1 {
  margin-left: .8em;
  margin-bottom: .2em;
  color: #ffca12;
  font-weight: 900;
}

div.products {
  text-align: center;
}

div.product {
  text-align: left;
  display: inline-block;
  margin: .8em;
  width: 30%;
}
</style>
