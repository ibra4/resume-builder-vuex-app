<template>
  <div>
    <div v-for="w in obj" :key="w.id">
      <v-row>
        <v-col cols="12" md="6">
          <text-field :targetElem="objName + '|' + 'company' + '|' + w.id" :name="'Company'" :defaultValue="w.company" />
        </v-col>
        <v-col cols="12" md="6">
          <text-field :targetElem="objName + '|' + 'major' + '|' + w.id" :name="'major'" :defaultValue="w.major" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="objName + '|' + 'start' + '|' + w.id" :name="'from'" :defaultValue="w.start" />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <text-field :targetElem="objName + '|' + 'end' + '|' + w.id" :name="'to'" :defaultValue="w.end" />
        </v-col>
      </v-row>
      <!-- <button class="btn btn-primary">add list</button> -->
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <text-area :targetElem="objName + '|' + 'disc' + '|' + w.id" :label="'discripiton'" :defaultValue="w.disc" />
        </v-col>
      </v-row>
      <v-btn
        color="error"
        v-if="obj.length > 1"
        @click="deleteObj(w.id)"
        class="btn btn-danger"
      >delete {{w.id}}</v-btn>

      <v-divider></v-divider>
    </div>
    <v-btn color="success" @click="addObj()" class="btn btn-primary">add new object</v-btn>
  </div>
</template>

<script>
import textField from "../Inputs/TextField.vue";
import textArea from "../Inputs/TextArea.vue";

import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {
      objName: "Work"
    };
  },
  components: {
    textField,
    textArea
  },
  methods: {
    ...mapActions(["fetchObject"]),
    deleteObj(id) {
      this.$store.dispatch("deleteObj", [id, this.objName]);
    },
    addObj() {
      this.$store.dispatch("addObj", this.objName);
    }
  },
  computed: {
    obj() {
      return this.$store.state[this.objName];
    }
  },
  created() {
    this.fetchObject(this.objName);
  }
};
</script>