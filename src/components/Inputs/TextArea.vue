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
    val: String,
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