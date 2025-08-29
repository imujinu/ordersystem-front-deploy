import OrderCart from "@/views/OrderCart.vue";
import OrderList from "@/views/OrderList.vue";

export const orderRouter = [
  {
    path: "/order/list",
    name: "orderList",
    component: OrderList,
    props: { isMyPage: false, pageTitle: "주문전체목록" },
  },
  {
    path: "/order/cart",
    name: "OrderCart",
    component: OrderCart,
  },
];
