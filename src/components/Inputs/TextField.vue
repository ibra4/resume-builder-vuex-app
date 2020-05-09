<template>
  <div>
    <v-text-field v-model="value" @input="updateVar" :label="name"></v-text-field>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      value: ""
    };
  },
  props: {
    name: String,
    targetElem: String,
    defaultValue: ""
  },
  mounted() {
    this.value = this.defaultValue
  },
  methods: {
    updateVar(e) {
      this.$store.dispatch("updateVar", [this.targetElem, this.value]);
    }
  }
};
</script>