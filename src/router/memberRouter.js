import MemberCreate from "@/views/MemberCreate.vue";
import MemberDetail from "@/views/MemberDetail.vue";
import MemberList from "@/views/MemberList.vue";
import MemberLogin from "@/views/MemberLogin.vue";
import MyPage from "@/views/MyPage.vue";

export const memberRouter = [
  { path: "/member/create", name: "memberCreate", component: MemberCreate },
  { path: "/member/login", name: "memberLogin", component: MemberLogin },
  { path: "/member/list", name: "memberList", component: MemberList },
  {
    path: "/member/list/:memberId",
    name: "memberDetail",
    component: MemberDetail,
    props: { pageTitle: "회원상세정보", isMyPage: false },
  },
  { path: "/member/mypage", name: "MyPage", component: MyPage },
];
