<template>
  <div class="para pro-lang" style="position:relative;margin-top:10px;padding-right:5px;">
    <div
      class="title"
      style="padding-left: 35px;text-transform:uppercase;letter-spacing:1px;border-bottom: 2px solid #9654d8;width: 100%;line-height: 30px;vertical-align: middle;font-size: 14px;font-weight: bold;"
    >
      <span
        style="position: absolute;top: 0;left: 0;height: 30px;width: 30px;text-align: center;line-height: 30px;vertical-align: middle;font-size: 16px;color: #9654d8;border-left: #9654d8 2px solid;"
      >
        <i class="fas fa-swimmer"></i>
      </span>
      {{ title }}
    </div>
    <ul class="no-style exp" style="list-style: none;padding: 10px 10px;">
      <li
        v-for="(b, index) in blocks"
        :key="index"
        style="display: inline-block;background-color: #9654d8;color: #e4e9ed;padding: 4px 8px;border-radius: 5px;margin-top: 5px;margin-right: 5px;"
      >{{ b.title }}</li>
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