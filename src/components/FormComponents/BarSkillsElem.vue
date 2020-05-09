<template>
  <div>
    <div class="row">
      <div v-for="sk in obj" :key="sk.id" class="col-md-6">
        <Select
          :items="skillsList"
          :label="'select a level'"
          :targetElem="objName + '|level|' + sk.id"
          :targetProperty="'label'"
          :defaultValue="sk.level"
        />
        <text-field
          :targetElem="objName + '|skill|' + sk.id"
          :name="'skill with bar' + (sk.id + 1)"
          :defaultValue="sk.skill"
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
import textField from "../Inputs/TextField.vue";
import Select from "../Inputs/Select.vue";

import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {
      objName: "BarSkills"
    };
  },
  components: {
    textField,
    Select
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
      skillsList: state => state.SkillsList
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