<template>
  <div>
    <div class="row">
      <div v-for="block in obj" :key="block.id" class="col-md-6">
        <text-field :targetElem="objName + '|title|' + block.id" :name="'Block ' + (block.id + 1)" />
        <button
          v-if="obj.length > 1"
          @click="deleteObj(block.id)"
          class="btn btn-danger"
          style="float: right"
        >delete {{block.id}}</button>
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
import textField from "../Inputs/TextField.vue";

import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {
      objName: "Blocks"
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