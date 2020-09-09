<template>
  <div class="para">
    <div class="title">{{ title }}</div>
    <div v-for="(edu, index) in education" :key="index" class="exp" :class="{first : index == 0}">
      <div>{{ edu.start }} - {{ edu.end }}</div>
      <div>{{ edu.school }}</div>
      <span class="para-title">{{ edu.name }}</span>
      <p class="description">{{ edu.disc }}</p>
      <p>
        <b>degree :</b>
        {{ edu.grade }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title"],
  computed: {
    ...mapState({
      education: "Education",
    }),
  },
};
</script>