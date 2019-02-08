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
  font-size: 2.3em;
}

div.products {
  margin-left: 2em;
  margin-right: 2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

div.product {
  justify-content: flex-start;
  text-align: left;
  display: inline-block;
  margin: .5em;
  width: 30%;
}

@media (max-width: 800px) {
  div.products {
    margin-left: 2em;    
    margin-right: 2em;
  }
  div.product {
    width: 45%;
    margin: .3em;
  }
}

@media (max-width: 700px) {
  div.category h1 {
    font-size: 1.9em;
  }
}

@media (max-width: 500px) {
  div.category h1 {
    font-size: 1.5em;
  }
  div.products {
    margin-left: 1.2em;    
    margin-right: 1.2em;
  }
}
</style>
