<template>
  <!-- 내 정보 조회 -->
  <!-- 문자열로 props를 넘길 경우 변수명 ="값", 그 외에는 :변수명 형태로 전달 -->
  <MemberDetail :isMyPage="true" pageTitle="내회원정보" />
  <!-- 내 주문 내역 조회 -->
  <OrderList :isMyPage="true" pageTitle="내주문목록" />
</template>
<script>
import MemberDetail from "./MemberDetail.vue";
import OrderList from "./OrderList.vue";

export default {
  components: {
    MemberDetail,
    OrderList,
  },
};
</script>
