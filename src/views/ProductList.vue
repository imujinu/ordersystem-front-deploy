<template>
  <v-container>
    <v-row class="d-flex justify-content-between mt-5">
      <v-col>
        <v-form>
          <v-row>
            <v-col cols="auto">
              <v-select
                v-model="searchType"
                :items="searchOptions"
                item-title="text"
                item-value="value"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="searchValue"
                label="검색"
                @keyup.enter="searchProduct"
              />
            </v-col>
            <v-col cols="auto">
              <v-btn @click="searchProduct()">검색</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="auto" v-if="!isAdmin">
        <v-btn @click="addCart()" color="primary">장바구니</v-btn>
        <v-btn @click="createdOrder()" color="secondary">주문하기</v-btn>
      </v-col>
      <v-col cols="auto" v-if="isAdmin">
        <v-btn :to="'/product/create'" color="primary">상품등록</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="text-center text-h5">
            {{ pageTitle }}</v-card-title
          >
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th>제품사진</th>
                  <th>제품명</th>
                  <th>가격</th>
                  <th>재고수량</th>
                  <th v-if="!isAdmin">주문수량</th>
                  <th v-if="!isAdmin">주문선택</th>
                  <th v-if="isAdmin">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in productList" :key="product.id">
                  <td>
                    <v-img :src="product.imagePath"></v-img>
                  </td>
                  <td>{{ product.productName }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.stockQuantity }}</td>
                  <td v-if="!isAdmin">
                    <!-- input 박스는 화면에서 숫자처럼 보여도 실제 입력값은 문자열 -->
                    <v-text-field
                      v-model.number="product.productCount"
                      type="number"
                      style="width: 65px"
                    />
                  </td>
                  <td v-if="!isAdmin">
                    <input type="checkbox" v-model="product.isSelected" />
                  </td>
                  <td v-if="isAdmin">
                    <v-btn color="secondary">상품삭제</v-btn>
                  </td>
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
import { getErrorMessage } from "@/utils/commonDataHandler";
import axios from "axios";

export default {
  props: ["isAdmin", "pageTitle"],
  data() {
    return {
      productList: [],
      order: [],
      pageSize: 7,
      currentPage: 0,
      isLoading: false,
      isLastPage: false,
      searchType: "optional",
      searchValue: "",
      searchOptions: [
        { text: "선택", value: "optional" },
        { text: "상품명", value: "productName" },
        { text: "카테고리", value: "category" },
      ],
    };
  },
  async created() {
    this.loadData();
    window.addEventListener("scroll", this.scrollPaging);
  },
  methods: {
    addCart() {
      const orderProductList = this.productList
        .filter((p) => p.isSelected)
        .map((p) => ({
          productId: p.id,
          name: p.productName,
          productCount: p.productCount,
        }));

      orderProductList.forEach((p) => this.$store.dispatch("addCart", p));
    },
    searchProduct() {
      this.productList = [];
      this.currentPage = 0;
      this.isLastPage = false;
      this.isLoading = false;
      this.loadData();
    },
    scrollPaging() {
      // 현재 화면 높이 + 스크롤로 이동한 거리 > 전체화면 높이 - n(내가 원하는 길이 ) 가 성립되면 추가 데이터 로드
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (isBottom && !this.isLoading && !this.isLastPage) {
        this.loadData();
      }
    },

    async loadData() {
      this.isLoading = true;
      // 문자열로 직접 ?size =xx?page=yy 형태로도 조립가능하지만, params라는 객체를 사용하면 파라미터 형식으로 url 조립
      let params = {
        size: this.pageSize,
        page: this.currentPage,
      };
      if (this.searchType == "productName") {
        params.productName = this.searchValue;
        console.log(params.productName);
      }
      if (this.searchType == "category") {
        params.category = this.searchValue;
      }
      const response = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}/product/list`,
        { params }
      );
      const additionalData = response.data.result.content.map((p) => ({
        ...p,
        productCount: 0,
        isSelected: false,
      }));
      if (additionalData.length == 0) {
        this.isLastPage = true;
      }
      this.productList = [...this.productList, ...additionalData];
      this.currentPage++;
      console.log(this.currentPage);
      this.isLoading = false;
    },

    async createdOrder() {
      try {
        this.order = this.productList
          .filter((p) => p.isSelected)
          .map((p) => ({
            productId: p.id,
            productCount: p.productCount,
          }));
        console.log(this.order);
        if (this.order.length > 0) {
          await axios.post(
            `${process.env.VUE_APP_API_BASE_URL}/ordering/create`,
            this.order
          );
          alert("주문이 정상적으로 완료되었습니다.");
          //   window.location.reload();
        }
      } catch (e) {
        getErrorMessage(e);
      }
    },
  },
};
</script>
