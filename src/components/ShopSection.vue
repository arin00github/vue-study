<template>
  <div>
    <h1 :style="textStyle">This is a Shop Page</h1>
    <div>
      <!-- 
              // MEMO: 반복문
              1. 자료안의 데이터 갯수만큼 반복됨
              2. 작명한 변수는 데이터안의 자료가 됨
              3. key: 꼭 써야 함. 반복문 돌린 요소를 컴퓨터가 구분하기 위해서 사용
              4. index 사용 가능
           -->
      <div class="product" v-for="(product, idx) in rooms" :key="product.name">
        <h4 @:click="handleModal">{{ product.name }} {{ idx }}</h4>
        <h5>{{ product.price }}만원</h5>
        <div class="noti-box">
          <button @:click="increase(product.name)">허위메물신고</button>
          <span>신고 수 {{ product.noti_cnt }}</span>
        </div>
      </div>
      <div>
        <!--
              // MEMO : 이벤트 바인딩 
              notification_cnt += 1 도 같은 효과
           -->
        <!-- <button @:click="notification_cnt++">허위메물신고</button> -->
        <!-- <button @:click="increase">허위메물신고</button>
        <span>신고 수 {{ notification_cnt }}</span> -->
      </div>
    </div>
  </div>
  <div class="modal-overlay" v-if="isOpen">
    <div class="modal">
      <h4>상세페이지 입니다.</h4>
      <p></p>
      <div><button @click="handleModal">닫기</button></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShopSection",
  // MEMO: 데이터 바인딩
  // {{}}: 실시간 데이터 반영
  // HTML 속성도 데이터 바인딩 가능
  data() {
    return {
      isOpen: false,
      textStyle: { color: "red" },
      products: ["XS룸", "SM룸", "MD룸"],
      rooms: [
        { name: "A룸", price: 50, noti_cnt: 0 },
        { name: "B룸", price: 45, noti_cnt: 0 },
        { name: "C룸", price: 30, noti_cnt: 0 },
      ],
      //   notification_cnt: 0,
    };
  },
  methods: {
    // MEMO: 만약 인자 값이 비어 있으면 이벤트 객체 정보가 들어옴
    increase(paramName: string) {
      this.rooms = this.rooms.map((room) => {
        return {
          ...room,
          noti_cnt:
            paramName === room.name ? (room.noti_cnt += 1) : room.noti_cnt,
        };
      });
    },
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    displayAlert() {
      alert("공지사항 있습니다!");
    },
  },
});
</script>

<style>
.product {
  display: flex;
  padding-bottom: 20px;
}
.product h4 {
  padding-right: 10px;
}

.product .noti-box {
  padding-left: 12px;
}

.modal-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
}
.modal-overlay .modal {
  /* width: 100%; */
  background: white;
  border-radius: 8px;
  padding: 24px;
}
</style>
