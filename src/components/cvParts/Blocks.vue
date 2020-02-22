<template>
  <div class="para pro-lang">
    <div class="title">
      <span>
        <i class="fas fa-swimmer"></i>
      </span>
      {{ title }}
    </div>
    <ul class="no-style">
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
      blocks: "blocks"
    })
  }
};
</script>