<template>

  <v-textarea :label="label" @input="updateVar" v-model="value"></v-textarea>
</template>

<script>
export default {
  data: () => {
    return {
      value: ""
    };
  },
  props: {
    label: String,
    targetElem: String,
    val: String
  },
  methods: {
    updateVar(e) {
      this.$store.dispatch("updateVar", [this.targetElem, this.value]);
    }
  }
};
</script>