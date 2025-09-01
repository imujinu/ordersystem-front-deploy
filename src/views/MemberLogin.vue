<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <!-- v-card -> v-card-title or (v-card-text -> v-form -> v-text-field(label) -->
          <v-card-title class="text-h5 text-center">로그인 </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="이메일"
                type="email"
                prepend-icon="mdi-email"
                v-model="email"
              />
              <v-text-field
                label="비밀번호"
                type="password"
                prepend-icon="mdi-lock"
                v-model="password"
              />
              <v-row>
                <v-col>
                  <v-btn color="red lighten-2" block @click="memberLogin()"
                    >등록</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { getErrorMessage, getResultData } from "@/utils/commonDataHandler";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async memberLogin() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post(
          `${process.env.VUE_APP_API_BASE_URL}/member/doLogin`,
          data
        );
        const result = getResultData(response);
        const accessToken = result.accessToken;
        const refreshToken = result.refreshToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        window.location.href = "/";
      } catch (e) {
        // 에러가 터지는 경우 e 변수 안에 서버에서 주는 error 메시지가 담김
        console.log(e);
        alert(getErrorMessage(e));
      }
    },
  },
};
</script>
