<template>
  <div>
    <div class="title">
      <span class="first-right">
      </span>
      {{ title }}
    </div>
    <div class="exp">
      <div v-for="(link, index) in links" :key="index" class="link">
        <font-awesome-icon v-if="link.type != ''" :icon="[ 'fab', getIcon(link.type) ]" />
        <p>{{ link.type }}</p>
        <p>{{ link.username }}</p>
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