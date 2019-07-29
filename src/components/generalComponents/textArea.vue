<template>
    <div class="form-group">
      <label for="te">{{ label }}</label>
      <textarea class="form-control rounded-0" id="te" rows="4" @input="updateVar"></textarea>
    </div>
</template>

<script>

export default {
    props: {
        label: String,
        targetElem: String,
        val: String
    },
    data: function() {
        return {
        }
    },
    methods: {
        updateVar(e) {
            this.$store.dispatch('updateVar', [this.targetElem, e.target.value])
        }
    }
}
</script>