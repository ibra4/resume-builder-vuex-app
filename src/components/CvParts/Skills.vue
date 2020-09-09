<template>
  <div class="para skills">
    <div class="title">{{ title }}</div>
    <ul class="no-style exp">
      <li v-for="(sk, index) in skills" :key="index">{{ sk.skill }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapState({
      skills: "Skills",
    }),
  },
};
</script>