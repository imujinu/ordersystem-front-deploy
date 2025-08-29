<template>
  <h1>훅 테스트 입니다</h1>
  <button @click="moveScreen()">다른 화면으로 화면 이동</button>
  <h1>{{ count1 }}</h1>
  <button @click="incrementCount()">count1 증가</button>
  <h1>computed된 값 : {{ doubleCount }}</h1>
  <h1>count2 : {{ count1 * 2 }}</h1>
</template>
<script>
export default {
  data() {
    return {
      count1: 1,
    };
  },
  //   화면이 열리기 전 ( vue 인스턴스가 생성되기 전 ) 실행되는 함수
  //   created() {
  //     alert("created 테스트");
  //   },
  // 채팅 화면을 벗어나 다른 화면으로 이동 시에 실시간 연결 종료

  beforeUnmount() {
    alert("화면 종료");
  },
  computed: {
    //this.count1 변경되면 doubleCount 값이 변하는 로직
    // 예시 ) 장바구니 수량 보여줄 떄
    doubleCount() {
      return this.count1 * 2;
    },
  },
  // 특정 변수값의 변경사항을 인지하여 함 수를 실행하는 hook 함수
  // 예시 ) 검색어 입력시 자동 api 호출
//   watch: {
//     //인지하고자 하는 변수값과 일치되는 함수명 사용
//     count1() {
//       alert("watch 함수 실행");
//     },
//   },
  //화면의 변경사항을 인지하는 hook 함수
  updated() {
    alert("updated 함수 호출")
  },
  methods: {
    moveScreen() {
      this.$router.push("/practice/vuetify");
    },
    incrementCount() {
      this.count1++;
    },
  },
};
</script>
