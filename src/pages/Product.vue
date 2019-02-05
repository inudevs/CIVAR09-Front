<script>
import NavBar from './../components/NavBar.vue'

export default {
  name: 'Product',
  components: {
    NavBar
  }
}
</script>

<template>
  <div class="container">
    <NavBar/>
    <div id="title">
      <h1>모트모트 플래너 <span>7일</span></h1>
    </div>
    <div id="content">
      <div class="left">
        <div id="product">
          <img src="../assets/preview.png"/>
          <div id="progress">
            <div/>
          </div>
          <span id="goal">12000/30000</span>
          <span id="percent">40%</span>
        </div>
      </div>
      <div class="right">
        <div id="comments">
          <div class="comment">
            <span class="profile">
              <img src="../assets/profile.png"/>
              <span class="name">1611 문형일</span>
            </span>
            <span class="payment">9000원</span>
            <span class="product">모트모트 플래너 핑크 3권</span>
          </div>
          <div class="comment">
            <span class="profile">
              <img src="https://avatars0.githubusercontent.com/u/32605822?s=460&v=4"/>
              <span class="name">1520 여준호</span>
            </span>
            <span class="payment">3000원</span>
            <span class="product">모트모트 플래너 핑크 3권</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#content {
  padding-left: 2em;
  padding-right: 2.5em;
}
#title h1 {
  /* 공구 이름 (예: 모트모트 플래너 공구) */
  color: #ffca12;
  font-weight: 900;
  font-size: 3em;
  margin: .3em;
  margin-left: .6em;
}
#title h1 span {
  /* 공구 기간 (예: 7일) */
  color: #ffe589;
  font-weight: 700;
  font-size: .9em;
}

div.left, div.right {
  /* 데스크탑 화면에서 각각 왼쪽, 오른쪽 div */
  float: left;
  width: 50%;
  text-align: center;
}

/* div.left */
/* 왼쪽 div의 스타일 */

#product img {
  /* 상품 이미지 */
  width: 100%;
}

#progress {
  /* 상태 바 (바깥쪽) */
  margin-top: 2em;
  background-color: #ffe589;
  width: 100%;
}
#progress > div {
  /* 상태 바 (안쪽) */
  background-color: #ffca12;
  width: 40%;
  height: 2em;
}

#goal, #percent {
  /* 목표 주문액 및 현재 공구 퍼센트 공통 스타일 */
  color: #ffca12;
  font-size: 1.5em;
}
/* 아래는 각각 float를 다르게 줘서 양옆에 배치 */
#goal {
  float: left;
}
#percent {
  float: right;
}

/* div.right */
/* 오른쪽 div의 스타일 */

#comments {
  /* 댓글 리스트가 표시되는 div */
  margin-left: 3em;
  text-align: center;
}
div.comment {
  /* 하나의 댓글 */
  width: 100%;
  border-top: 7px solid #fff3c9;
  margin-bottom: 1em;
  text-align: left;
}
div.comment:first-child {
  /* 첫 번째 댓글은 총대(공구 생성자)의 주문이므로 디자인을 차별화할 필요가 있음 */
  border: 7px solid #ffe589;
  border-radius: 12px;
}

div.comment span.profile {
  /* 주문자 프로필 */
  background: #ffca12;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  display: inline-block;
  margin-left: .8em;
  margin-top: .5em;
}
div.comment:first-child span.profile {
  /* 총대 프로필 -> 댓글 양옆에 테두리가 존재하기 때문에 왼쪽 마진을 조금 덜 준다 */
  margin-left: .5em;
}
div.comment img {
  /* 주문자 프로필 사진 */
  width: 35px;
  height: 35px;
  border: 1px solid #D1D5DA;
  border-radius: 50%;
  object-fit: cover;
  display: inline-block;
  vertical-align: text-bottom;
  margin-right: 5px;
}
div.comment span.name {
  /* 주문자 이름 */
  font-weight: 500;
  font-size: 1.8em;
  color: white;
  display: inline-block;
}

div.comment span.payment {
  /* 주문 금액 */
  margin-left: 1em;
  font-size: 1.8em;
  color: #ffca12;
}
div.comment span.product {
  /* 주문 상품 */
  display: block;
  color: #ffca12;
  font-size: 1.5em;
  margin-left: .4em;
}
div.comment:first-child span.product {
  /* 총대 주문 상품 -> 댓글 양옆에 테두리가 존재하기 때문에 왼쪽 마진을 조금 덜 준다 */
  margin-left: .2em;
}

@media (max-width: 800px) {
  /* 화면이 작은 디바이스용 -> 두 부분으로 안 나눠지고 하나로 보여짐 */
  div.left, div.right {
    float: none; 
    width: 100%;
  }

  /* div.left */
  #progress {
    margin-top: 1em;
  }

  /* div.right */
  div.right {
    margin-top: 3.5em;
  }
  #comments {
    margin: 0;
  }
}

@media (max-width: 500px) {
  /* 더 작은 모바일 기기 */
  #content {
    padding-left: 1em;
    padding-right: 1em;
  }
  #title h1 {
    font-size: 2em;
  }
  #title h2 {
    font-size: .8em;
  }

  /* div.right */
  div.comment {
    width: 95%;
  }
  div.comment span.name {
    font-size: 1.2em;
    vertical-align: middle;
  }
  div.comment img {
    vertical-align: middle;
  }
  div.comment span.payment {
    font-size: 1.7em;
  }
  div.comment span.product {
    font-size: 1.3em;
  }
}
</style>
