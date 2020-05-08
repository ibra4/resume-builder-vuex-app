<template>
  <div class="para edu" style="position:relative;margin-top:10px;padding-right:5px;">
    <div class="title" style="padding-left: 35px;text-transform:uppercase;letter-spacing:1px;border-bottom: 2px solid #9654d8;width: 100%;line-height: 30px;vertical-align: middle;font-size: 14px;font-weight: bold;">
      <span style="position: absolute;top: 0;left: 0;height: 30px;width: 30px;text-align: center;line-height: 30px;vertical-align: middle;font-size: 16px;color: #e4e9ed;background-color: #9654d8;">
        <i class="fas fa-graduation-cap"></i>
      </span>
      {{ title }}
    </div>
    <div v-for="(edu, index) in education" :key="index" class="exp" :class="{first : index == 0}" style="padding: 10px;">
      <div style="font-size: 12px;color: #2e3131;font-weight: bold;">{{ edu.start }} - {{ edu.end }}</div>
      <div style="font-weight: bold;margin-top: 3px;text-transform: capitalize;">{{ edu.school }}</div>
      <div class="clearer" style="clear:both;"></div>
      <div class="spec" style="border-bottom: 1px solid #9654d8;color: #9654d8;display: inline-block;font-weight: bold;text-transform: capitalize;">{{ edu.name }}</div>
      <p style="color: #2e3131;font-size: 12px;margin-top: 2px;">degree : {{ edu.grade }}</p>
      <p style="color: #2e3131;font-size: 12px;margin-top: 2px;">{{ edu.disc }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title"],
  computed: {
    ...mapState({
      education: "Education"
    })
  }
};
</script>