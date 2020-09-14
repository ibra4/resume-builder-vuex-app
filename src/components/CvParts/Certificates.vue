<template>
  <div>
    <div class="title">
      <span class="first-right"></span>
      {{ title }}
    </div>
    <div class="exp">
      <table style="width: 100%">
        <tr v-for="(cert, index) in Certificates" :key="index" class="certificate-item">
          <td>
            <b>{{cert.name}}</b>
            -
            {{cert.company}}
          </td>
          <td style="text-align: right">
            {{cert.hours}}
            <span v-if="cert.hours">hours</span>
          </td>
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
      Certificates: "Certificates",
    }),
  },
};
</script>