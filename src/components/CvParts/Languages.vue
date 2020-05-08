<template>
  <div class="para lang" style="position:relative;margin-top:10px;padding-right:5px;">
    <div class="title" style="padding-left: 35px;text-transform:uppercase;letter-spacing:1px;border-bottom: 2px solid #9654d8;width: 100%;line-height: 30px;vertical-align: middle;font-size: 14px;font-weight: bold;">
      <span style="position: absolute;top: 0;left: 0;height: 30px;width: 30px;text-align: center;line-height: 30px;vertical-align: middle;font-size: 16px;color: #e4e9ed;background-color: #9654d8;">
        <i class="fas fa-language"></i>
      </span>languages
    </div>
    <div class="exp" style="padding: 10px 10px;">
      <div v-for="(lang, index) in languages" :key="index" style="font-size: 12px;color: #2e3131;font-weight: bold;">
        <span>{{ lang.lang }}</span>
        <span style="float: right;">{{ lang.level }}</span>
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
      languages: "Languages"
    })
  }
};
</script>