<template>
  <div class="para links">
    <div class="title">
      <span class="first-right">
        <i class="fa fa-link"></i>
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
      links: "links"
    }),
  },
  methods: {
    getIcon(category) {
        if (category && category != '') {
            return this.$store.state.linksList.find(el => el.type == category).icon
        }
    },
  }
};
</script>