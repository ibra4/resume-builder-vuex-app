<template>
  <div>
    <div class="title">languages</div>
    <div class="exp">
      <table style="width: 100%">
        <tr v-for="(lang, index) in languages" :key="index">
          <td style="padding-right: 10px">{{ lang.lang }} :</td>
          <td>{{ lang.level }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapState({
      languages: "Languages",
    }),
  },
};
</script>