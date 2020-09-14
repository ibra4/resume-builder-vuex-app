<template>
  <div class="para projects">
    <div class="title">{{ title }}</div>
    <div class="exp">
      <div v-for="(pro, index) in projects" :key="pro.id" style="padding-bottom: 10px">
        <b>{{index +1}}- {{pro.title}}</b>
        <div>{{pro.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapState({
      projects: "Projects",
    }),
  },
};
</script>