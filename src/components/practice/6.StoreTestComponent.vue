<template>
  <StoreTestComponentA />
  <div>
    <StoreTestComponentB />
  </div>
</template>
<script>
import StoreTestComponentA from "./6.StoreTestComponentA.vue";
import StoreTestComponentB from "./6.StoreTestComponentB.vue";

export default {
  components: { StoreTestComponentA, StoreTestComponentB },
};
</script>
