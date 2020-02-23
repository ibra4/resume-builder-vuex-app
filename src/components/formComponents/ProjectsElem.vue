<template>
  <div>
    <div class="row">
      <div v-for="project in obj" :key="project.id" class="col-md-6">
        <text-field
          :targetElem="objName + '|title|' + project.id"
          :name="'project ' + (project.id + 1)"
        />
        <text-field
          :targetElem="objName + '|description|' + project.id"
          :name="'project ' + (project.id + 1)"
        />
        <button
          v-if="obj.length > 1"
          @click="deleteObj(project.id)"
          class="btn btn-danger"
          style="float: right"
        >delete {{project.id}}</button>
      </div>
    </div>
    <button
      v-if="obj[Object.keys(obj).length-1].title != ''"
      @click="addObj()"
      class="btn btn-primary"
    >add new object</button>
  </div>
</template>

<script>
import textField from "../generalComponents/textField.vue";

import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {
      objName: "projects"
    };
  },
  components: {
    textField
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
<style>
</style>