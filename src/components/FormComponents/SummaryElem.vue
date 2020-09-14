<template>
  <div>
    <v-main>
      <v-row>
        <v-col cols="12" md="8">
          <text-field :targetElem="'jobTitle'" :name="'Job Title'" :defaultValue="jobTitle" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <text-area :targetElem="'summary'" :label="'short discription'" :defaultValue="summary" />
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import textArea from "../Inputs/TextArea.vue";
import textField from "../Inputs/TextField.vue";

import { mapState } from "vuex";

export default {
  components: {
    textArea,
    textField
  },
  computed: {
    ...mapState({
      summary: state => state.summary,
      jobTitle: state => state.jobTitle
    })
  }
};
</script>