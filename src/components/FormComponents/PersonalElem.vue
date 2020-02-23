<template>
  <div>
    <v-content>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="'Personal.firstName'" :name="'first name'" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="'Personal.lastName'" :name="'last name'" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="'Personal.email'" :name="'E-mail'" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="'Personal.phone'" :name="'phone number'" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="'Personal.birthday'" :name="'date of birth'" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="'Personal.address'" :name="'address'" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="'Personal.summary'" :name="'summary'" />
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
import textField from "../Inputs/TextField.vue";

import { mapState } from "vuex";

export default {
  data: function() {
    return {
      targetElem: "Personal"
    };
  },
  components: {
    textField
  },
  methods: {
    expMe() {
      this.$store.dispatch("expMe");
    }
  },
  computed: {
    ...mapState({
      Personal: state => state.Personal
    })
  }
};
</script>