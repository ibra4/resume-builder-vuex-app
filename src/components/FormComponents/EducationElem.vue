<template>
  <div>
    <div v-for="edu in obj" :key="edu.id">
      <v-main>
        <v-row>
          <v-col cols="12" md="6">
            <text-field :targetElem="objName + '|' + 'name' + '|' + edu.id" :name="'major'" :defaultValue="edu.name" />
          </v-col>
          <v-col cols="12" md="6">
            <text-field
              :targetElem="objName + '|' + 'school' + '|' + edu.id" :name="'school name'" :defaultValue="edu.school" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="objName + '|' + 'start' + '|' + edu.id" :name="'from'" :defaultValue="edu.start" />
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="objName + '|' + 'end' + '|' + edu.id" :name="'to'" :defaultValue="edu.end" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <text-field :targetElem="objName + '|' + 'grade' + '|' + edu.id" :name="'degree'" :defaultValue="edu.disc" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <text-area :targetElem="objName + '|' + 'disc' + '|' + edu.id" :label="'discripiton'" :defaultValue="edu.grade" />
          </v-col>
        </v-row>
      </v-main>
      <v-btn
        color="error"
        v-if="edu.length > 1"
        @click="deleteObj(edu.id)"
        class="btn btn-danger"
      >delete {{edu.id}}</v-btn>
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
      objName: "Education"
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