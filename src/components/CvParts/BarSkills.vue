<template>
  <div class="para sw-skills" style="position:relative;margin-top:10px;padding-right:5px;">
    <div
      class="title"
      style="padding-left: 35px;text-transform:uppercase;letter-spacing:1px;border-bottom: 2px solid #9654d8;width: 100%;line-height: 30px;vertical-align: middle;font-size: 14px;font-weight: bold;"
    >
      <span
        style="position: absolute;top: 0;left: 0;height: 30px;width: 30px;text-align: center;line-height: 30px;vertical-align: middle;font-size: 16px;color: #9654d8;border-left: #9654d8 2px solid;"
      >
        <i class="fab fa-stack-overflow"></i>
      </span>
      {{title}}
    </div>
    <div class="exp" style="padding: 10px 10px;">
      <div
        v-for="(sk, index) in BarSkills"
        :key="index"
        style="font-size: 12px;color: #2e3131;font-weight: bold;"
      >
        {{sk.skill}}
        <div
          class="skill"
          style="margin-bottom: 17px;margin-top: 3px;height: 19px;background-color: #e4e9ed;border: 1px solid #9654d8;padding: 1px;position: relative;text-align: center;color: #9654d8;"
        >
          <div
            v-bind:class="[sk.level, 'level']"
            style="position: absolute;top: 1px;left: 1px;height: 15px;background-color: #e4e9ed;line-height: 15px;vertical-align: middle;text-align: center;"
          >{{sk.level}}</div>
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