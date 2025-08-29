<!-- 렌더링 페이지 -->
<template>
  <!-- vue(vuetify) 에서는 모든 태그의 최상단에 v-app으로 감싸져 있어야 정상적으로 동작한다. -->
  <v-app>
    <!-- header,footer를 제외한 실질적인 화면의 내용 v-main 안에 들어감 -->
    <HeaderComponent />
    <v-main>
      <router-view />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<!-- js -->
<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

// vue는 export를 통하여 해당 요소를 다른 화면에서도 import 할 수 있도록 설정
// App.vue 파일을 다른 화면에서도 import할 수 있도록 컴포넌트화 시킨 것.
export default {
  name: "App",
  // 다른 화면을 import 한 이후에 template 에서 사용하려고 할때는 components에 추가
  components: { HeaderComponent, FooterComponent },
};
</script>

<!-- 디자인 요소는 style 태그 안에  코딩 -->
<style></style>
