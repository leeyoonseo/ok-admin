<template>
  <div>
    <!-- <Tutorial /> -->
    <div>
      <h1>버튼</h1>
      <base-button />
    </div>
    <button @click="handleClick">
      테스트
    </button>
  </div>
</template>

<script lang="ts">
// import Vue, { PropOptions } from 'vue'
import Vue from "vue";
import BaseButton from "~/components/common/Button/Button.vue";

export default Vue.extend({
  name: "MainPage",
  components: {
    BaseButton
  },
  methods: {
    handleClick () {
      this.test("string");
      const a = {
        a: 1,
        b: 2,
        c: 3
      };
      if (true) {
        // ....
      }
    },
    test (val: number) {
      console.log("test", val);
    }
  }
});
</script>
