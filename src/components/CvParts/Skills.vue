<template>
  <div class="para skills" style="position:relative;margin-top:10px;padding-right:5px;">
    <div
      class="title"
      style="padding-left: 35px;text-transform:uppercase;letter-spacing:1px;border-bottom: 2px solid #9654d8;width: 100%;line-height: 30px;vertical-align: middle;font-size: 14px;font-weight: bold;"
    >
      <span
        class="first-right"
        style="position: absolute;top: 0;left: 0;height: 30px;width: 30px;text-align: center;line-height: 30px;vertical-align: middle;font-size: 16px;color: #9654d8;"
      >
        <i class="fas fa-swimmer"></i>
      </span>
      {{ title }}
    </div>
    <ul class="no-style exp" style="list-style: none;padding:10px">
      <li
        v-for="(sk, index) in skills"
        :key="index"
        style="margin-top: 5px;position: relative;padding-left: 20px;font-size: 12px;text-transform: initial;display: flex;align-items: center;"
      >
        <div
          class="before"
          style="position: absolute;left: 0;height: 5px;width: 10px;border-left: 3px solid #9654d8;border-bottom: 3px solid #9654d8;"
        ></div>
        {{ sk.skill }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapState({
      skills: "Skills"
    })
  }
};
</script>