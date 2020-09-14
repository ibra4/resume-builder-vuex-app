<template>
  <div>
    <div v-for="cert in obj" :key="cert.id">
      <span>
        <text-field :targetElem="objName + '|name|' + cert.id" :name="'Name'" :defaultValue="cert.name" />
        <text-field :targetElem="objName + '|company|' + cert.id" :name="'Company'" :defaultValue="cert.company" />
        <text-field :targetElem="objName + '|hours|' + cert.id" :name="'No. of hours'" type="number" :defaultValue="cert.hours" />
      </span>
      <button
        v-if="obj.length > 1"
        @click="deleteObj(cert.id)"
        class="btn btn-danger"
        style="float: right"
      >delete {{cert.id}}</button>
    </div>
    <button @click="addObj()" class="btn btn-primary">add new object</button>
  </div>
</template>

<script>
import textField from "../Inputs/TextField.vue";

import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {
      category: "",
      objName: "Certificates"
    };
  },
  components: {
    textField
  },
  computed: {
    obj() {
      return this.$store.state[this.objName];
    }
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
  created() {
    this.fetchObject(this.objName);
  }
};
</script>