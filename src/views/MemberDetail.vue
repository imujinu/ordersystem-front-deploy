<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="text-center text-h5">
            {{ pageTitle }}</v-card-title
          >
          <v-card-text>
            <v-table>
              <tbody>
                <tr>
                  <td>ID : {{ member.id }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>이름 : {{ member.name }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>이메일 : {{ member.email }}</td>
                  <td></td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  props: ["isMyPage", "pageTitle"],
  //화면 간에 매개변수를 넘길 때 ㅅ용하는 변수값을 props라 칭함
  data() {
    return {
      memberId: null,
      member: {},
    };
  },
  async created() {
    try {
      if (this.isMyPage) {
        const response = await axios.get(
          `${process.env.VUE_APP_API_BASE_URL}/member/myinfo`
        );
        console.log(response);
        this.member = response.data.result;
      } else {
        this.memberId = this.$route.params.memberId;
        const response = await axios.get(
          `${process.env.VUE_APP_API_BASE_URL}/member/detail/${this.memberId}`
        );
        console.log(response);
        this.member = response.data.result;
        console.log(this.member);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
