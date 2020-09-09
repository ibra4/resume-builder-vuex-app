<template>
  <div>
    <div class="title">languages</div>
    <div class="exp">
      <div v-for="(lang, index) in languages" :key="index">
        <span style="padding-right: 10px">{{ lang.lang }} :</span>
        <span>{{ lang.level }}</span>
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
      languages: "Languages",
    }),
  },
};
</script>