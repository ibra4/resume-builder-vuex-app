<template>
  <div class="para sw-skills">
    <div class="title">
      <span>
        <i class="fab fa-stack-overflow"></i>
      </span>
      {{title}}
    </div>
    <div class="exp">
      <div v-for="(sk, index) in BarSkills" :key="index">
        {{sk.skill}}
        <div class="skill">
          <div v-bind:class="[sk.level, 'level']">{{sk.level}}</div>
        </div>
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
      BarSkills: "BarSkills"
    })
  }
};
</script>