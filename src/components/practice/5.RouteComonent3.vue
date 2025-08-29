<template>
  <v-btn>일반라우팅3</v-btn>
</template>
<script>
// import axios from "axios";

export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {},
  created() {
    // 라우터에서 전달된 id값(param) 꺼내기
    this.id = this.$route.params.postId;
    // const response = axios.get("http://localhost:8080/post/detail/" + this.id);
    // console.log(response);
  },
};
</script>
