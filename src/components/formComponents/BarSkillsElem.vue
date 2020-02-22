<template>
  <div>
    <div class="row">
      <div v-for="sk in obj" :key="sk.id" class="col-md-6">
        <options
          :items="skillsList"
          :label="'select a level'"
          :targetElem="objName + '|level|' + sk.id"
          :targetProperty="'label'"
        ></options>
        <text-field
          :targetElem="objName + '|skill|' + sk.id"
          :name="'skill with bar' + (sk.id + 1)"
        />
        <button
          v-if="obj.length > 1"
          @click="deleteObj(sk.id)"
          class="btn btn-danger"
          style="float: right"
        >delete {{sk.id}}</button>
      </div>
    </div>
    <button
      v-if="obj[Object.keys(obj).length-1].skill != ''"
      @click="addObj()"
      class="btn btn-primary"
    >add new object</button>
  </div>
</template>

<script>
import textField from "../generalComponents/textField.vue";
import options from "../generalComponents/option.vue";

import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {
      objName: "BarSkills"
    };
  },
  components: {
    textField,
    options
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
    ...mapState({
      skillsList: state => state.skillsList
    }),
    obj() {
      return this.$store.state[this.objName];
    }
  },
  created() {
    this.fetchObject(this.objName);
  }
};
</script>
<style>
</style>