import { createRouter, createWebHistory } from "vue-router";
import { practiceRouter } from "./practiceRouter";
import { memberRouter } from "./memberRouter";
import { orderRouter } from "./orderRouter";
import { productRouter } from "./productRouter";

// url 경로와 화면을 매핑
const routes = [
  ...practiceRouter,
  ...memberRouter,
  ...orderRouter,
  ...productRouter,
];

const router = createRouter({
  // 1) createWebHistory  : localhost:3000/member/create
  // 2) createWebHashHistory : /#/member/create
  history: createWebHistory(),
  routes,
});

// export된 router를 main.js에서 import 해줘야함
export default router;
