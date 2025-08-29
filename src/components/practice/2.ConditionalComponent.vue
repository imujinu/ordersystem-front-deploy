<template>
  <h1>vue 조건식</h1>
  <button v-if="!isLogined" @click="login()">로그인</button>
  <button v-if="isLogined" @click="login()">로그 아웃</button>
  <div v-if="!isLogined">로그인 해주세요</div>
  <div v-if="isLogined">환영합니다</div>
  <h1>상품목록조회</h1>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>상품명</th>
        <th>상품가격</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productList" :key="product.id">
        <th>{{ product.id }}</th>
        <th>{{ product.name }}</th>
        <th>{{ product.price }}</th>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      isLogined: false,
      productList: [],
    };
  },
  methods: {
    login() {
      this.isLogined = !this.isLogined;
    },
  },
  //화면이 열림과 동시에 실행되는 hook 함수 : created
  async created() {
    const response = await axios.get("http://localhost:8080/product/list");
    console.log(response);
    this.productList = response.data.result.content;
  },
};
</script>
