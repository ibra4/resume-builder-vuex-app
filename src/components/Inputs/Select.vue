<template>
  <div>
    <v-select
      :items="items"
      :lebel="label"
      :item-text="targetProperty"
      v-model="value"
      v-on:change="updateVar"
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
    targetProperty: String
  },
  methods: {
    updateVar(e) {
      this.$store.dispatch("updateVar", [this.targetElem, this.value]);
    }
  }
};
</script>