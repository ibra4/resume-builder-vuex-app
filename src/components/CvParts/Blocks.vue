<template>
  <div class="para pro-lang">
    <div class="title">
      {{ title }}
    </div>
    <ul class="no-style exp">
      <li v-for="(b, index) in blocks" :key="index">{{ b.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapState({
      blocks: "Blocks"
    })
  }
};
</script>