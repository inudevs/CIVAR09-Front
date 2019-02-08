<script>
import NavBar from '@/components/NavBar.vue'
import SaleBox from '@/components/SaleBox.vue'

export default {
  name: 'Index',
  components: {
    NavBar,
    SaleBox
  },
  data: function () {
    return {
      products: {
        stationery: [
          {
            id: 0,
            name: '모트모트 플래너',
            days: 7,
            total: 10500,
            goal: 15000,
            profile: {
              studentId: '1420',
              name: '윤서진'
            }
          },
          {
            id: 1,
            name: '맥북 프로 13인치',
            days: 2,
            total: 1520000,
            goal: 2000000,
            profile: {
              studentId: '1520',
              name: '여준호'
            }
          },
          {
            id: 2,
            name: '미니언즈 가방',
            days: 20,
            total: 91300,
            goal: 25000,
            profile: {
              studentId: '1320',
              name: '윤영창'
            }
          },
        ]
      }
    }
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
          <SaleBox v-for="product in products.stationery" :key="product.id" :product="product"/>
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
