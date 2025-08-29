<template>
  <v-container>
    <v-row>
      <!-- 한 row전체 cols는 12 -->
      <v-col cols="8">helloworld1</v-col>
      <v-col cols="4">helloworld2</v-col>
    </v-row>
    <v-row>
      <v-card>
        <v-card-title>회원가입</v-card-title>
        <v-card-text>회원가입을 해주세요</v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-simple-table>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>진우</td>
            <td>wlsdn@naver.com</td>
          </tr>
          <tr>
            <td>진우2</td>
            <td>wlsdn2@naver.com</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-row>
  </v-container>

  <v-card>
    <v-card-title id="signup-title" style="font-size: 200px"
      >회원가입</v-card-title
    >
    <v-card-text>
      <v-form>
        <v-text-field label="name" type="text" />
        <v-text-field label="email" type="email" />
        <v-text-field label="password" type="password" />
      </v-form>
    </v-card-text>
    <v-btn color="secondary">제출하기</v-btn>
  </v-card>

  <!-- 모달창(팝업) v-dialog -->
  <v-btn @click="cancel()">취소버튼</v-btn>
  <!-- v-dialog는 내부적으로 true 또는 false 값을 가지고 외부 공개될지 말지 여부가 결정된다.  -->
  <v-dialog v-model="trueOrFalse" max-width="400px">
    <v-card>
      <v-card-title>정말 취소하시겠습니까?</v-card-title>
      <v-card-actions>
        <v-btn @click="modalOff()">예</v-btn>
        <v-btn @click="modalOff()">아니오</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      trueOrFalse: false,
    };
  },
  methods: {
    cancel() {
      this.trueOrFalse = true;
    },
    modalOff() {
      this.trueOrFalse = false;
    },
  },
};
</script>

<style>
#signup-title {
  color: red;
}
</style>
