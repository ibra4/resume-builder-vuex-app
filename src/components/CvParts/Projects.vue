<template>
  <div class="para projects">
    <div class="title">
      <span class="first-right">
        <i class="fas fa-tasks"></i>
      </span>
      {{ title }}
    </div>
    <div class="exp">
      <div v-for="pro in projects" :key="pro.id">
        <span>
          <b>{{pro.title}}</b>
        </span>
        <span>{{pro.description}}</span>
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
      projects: "Projects"
    })
  }
};
</script>