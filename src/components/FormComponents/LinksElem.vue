<template>
  <div>
    <div v-for="link in obj" :key="link.id">
      <Select
        :items="linksList"
        :label="'select a link'"
        :targetElem="objName + '|type|' + link.id"
        :itemValue="'type'"
        :itemLabel="'label'"
      />
      <span>
        <text-field :targetElem="objName + '|username|' + link.id" :name="'link'" />
      </span>
      <button
        v-if="obj.length > 1"
        @click="deleteObj(link.id)"
        class="btn btn-danger"
        style="float: right"
      >delete {{link.id}}</button>
    </div>
    <button @click="addObj()" class="btn btn-primary">add new object</button>
  </div>
</template>

<script>
import textField from "../Inputs/TextField.vue";
import Select from "../Inputs/Select.vue";

import { mapState, mapActions } from "vuex";

export default {
  data: () => {
    return {
      category: "",
      objName: "Links"
    };
  },
  components: {
    textField,
    Select
  },
  computed: {
    ...mapState({
      linksList: state => state.LinksList
    }),
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