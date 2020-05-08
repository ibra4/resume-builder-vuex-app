<template>
  <div class="para links" style="position:relative;margin-top:10px;padding-right:5px;">
    <div class="title" style="padding-left: 35px;text-transform:uppercase;letter-spacing:1px;border-bottom: 2px solid #9654d8;width: 100%;line-height: 30px;vertical-align: middle;font-size: 14px;font-weight: bold;">
      <span  style="position: absolute;top: 0;left: 0;height: 30px;width: 30px;text-align: center;line-height: 30px;vertical-align: middle;font-size: 16px;color: #9654d8;border-left: #9654d8 2px solid;">
        <i class="fa fa-link"></i>
      </span>
      {{ title }}
    </div>
    <div class="exp" style="padding: 10px 10px;">
      <div v-for="(link, index) in links" :key="index" class="link" style="font-size: 12px;color: #2e3131;font-weight: bold;">
        <font-awesome-icon v-if="link.type != ''" :icon="[ 'fab', getIcon(link.type) ]" />
        <p style="color: #2e3131;font-size: 12px;margin-top: 2px;">{{ link.type }}</p>
        <p style="color: #2e3131;font-size: 12px;margin-top: 2px;">{{ link.username }}</p>
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
      links: "Links"
    })
  },
  methods: {
    getIcon(category) {
      if (category && category != "") {
        return this.$store.state.LinksList.find(el => el.type == category).icon;
      }
    }
  }
};
</script>