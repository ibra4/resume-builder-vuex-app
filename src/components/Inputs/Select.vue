<template>
  <div>
    <v-select
      :items="items"
      :label="label"
      v-model="value"
      v-on:change="updateVar"
      :item-value="itemValue"
      :item-text="itemLabel"
    ></v-select>
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
    label: String,
    targetElem: String,
    items: Array,
    defaultValue: "",
    itemLabel: "",
    itemValue: ""
  },
  methods: {
    updateVar(e) {
      this.$store.dispatch("updateVar", [this.targetElem, this.value]);
    }
  }
};
</script>