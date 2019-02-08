<script>
import NavBar from './../components/NavBar.vue'
import ProgressBar from './../components/ProgressBar.vue'

export default {
  name: 'SaleView',
  components: {
    NavBar,
    ProgressBar
  },
  created: function () {
    // 백엔드 API에서 현재 상품에 대한 주문액 정보를 가져오고 현황 업데이트
    this.loadData()
  },
  data: function () {
    return { // 테스트 데이터
      name: '', // 공구 이름 
      days: 0, // 공구 남은 일수 
      progress: 0, // 현재 주문 현황(%)
      total: 0, // 현재 주문액 총합 
      goal: 0, // 목표 주문액
      comments: [ // 공구 댓글 
        {
          studentId: '1611',
          name: '문형일',
          payment: 6000,
          product: '모트모트 플래너 핑크 3권',
          url: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320a/p320x320/23032443_1965255737130957_6987903236492122395_n.jpg?_nc_cat=104&_nc_ht=scontent-icn1-1.xx&oh=1be0547ca2362c35b880273ceb446ea1&oe=5CF86625'
        },
        {
          studentId: '1520',
          name: '여준호',
          payment: 6000,
          product: '모트모트 플래너 핑크 3권',
          url: 'https://avatars0.githubusercontent.com/u/32605822'
        }
      ]
    }
  },
  methods: {
    loadData: function () {
      const data = require(`../assets/examples/data/${this.$route.params.sale_id}.json`)
      this.name = data.name
      this.days = data.days
      this.total = data.total
      this.goal = data.goal
      // this.comments = data.comments
      this.updateProgress()
    },
    updateProgress: function () { // 현재 주문 현황 업데이트
      this.progress = Math.floor((this.total/this.goal || 0)*100)
    }
  }
}
</script>

<template>
  <div class="container">
    <NavBar/>
    <div id="title">
      <h1>{{ name }}<span>{{ days + '일' }}</span></h1>
    </div>
    <div id="content">
      <div class="left">
        <div id="product">
          <img :src="require(`../assets/examples/images/${this.$route.params.sale_id}.png`)"/>
          <div class="progress-wrap">
            <ProgressBar v-bind:progress="progress"/>
          </div>
          <span id="goal">{{ total }}/{{ goal }}</span>
          <span id="percent">{{ progress + '%' }}</span>
        </div>
      </div>
      <div class="right">
        <div id="comments">
          <div v-for="(profile, idx) in comments" :key={idx} class="comment">
            <span class="profile">
              <img :src="profile.url"/>
              <span class="name">{{ profile.studentId }} {{ profile.name }}</span>
            </span>
            <span class="payment">{{ profile.payment + '원' }}</span>
            <span class="product">{{ profile.product }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./../css/pages/product.css"></style>
