<template>
  <div class="para">
    <div class="title">{{ title }}</div>
    <table>
      <tr v-for="(w, index) in work" :key="index">
        <!-- <div v-if="w.company"> -->
        <td>
          <span>{{ w.start }} - {{ w.end }}</span>
        </td>
        <td>
          <span class="para-title">{{ w.major }}</span>
          <span>-</span>
          <span>{{ w.company }}</span>
          <p class="description">{{ w.disc }}</p>
        </td>
        <!-- </div> -->
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapState({
      work: "Work",
    }),
  },
};
</script>