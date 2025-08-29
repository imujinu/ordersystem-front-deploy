<template>
  store componentA
  <p>지역 변수 값 count : {{ count }}</p>
  <v-btn @click="incrementCount()">count 값 증가</v-btn>
  <p>전역 store 변수값 count : {{ getStoreCount }}</p>
  <v-btn @click="incrementStoreCount()">전역 store count 값 증가</v-btn>
  <br />
  <br />
  <br />
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    incrementStoreCount() {
      // store의 actions를 호출할때는 dispatch 함수 사용
      this.$store.dispatch("incrementCount");
    },
  },
  computed: {
    getStoreCount() {
      return this.$store.getters.getCount;
    },
  },
};
</script>
