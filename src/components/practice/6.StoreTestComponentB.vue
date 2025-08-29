<template>
  store componentB
  <p>지역 변수 값 count : {{ count }}</p>
  <v-btn @click="incrementCount()">count 값 증가</v-btn>
  <p>전역 store 변수값 count : {{ getStoreCount }}</p>
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
  },
  computed: {
    getStoreCount() {
      return this.$store.getters.getCount;
    },
  },
};
</script>
