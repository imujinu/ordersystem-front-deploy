import ProductCreate from "@/views/ProductCreate.vue";
import ProductList from "@/views/ProductList.vue";

export const productRouter = [
  {
    path: "/product/list",
    name: "ProductList",
    component: ProductList,
    props: { pageTitle: "상품목록", isAdmin: false },
  },
  {
    path: "/product/manage",
    name: "ProductListManage",
    component: ProductList,
    props: { pageTitle: "상품관리", isAdmin: true },
  },
  {
    path: "/product/create",
    name: "ProductCreate",
    component: ProductCreate,
  },
];
