<template>
    <div>
        <div class="form-group">
            <label>{{ name }}</label>
            <input type="text" :value="val" class="form-control" @input="updateVar">
        </div>
    </div>
</template>

<script>

export default {
    props: {
        name: String,
        targetElem: String,
        val: String
    },
    methods: {
        updateVar(e) {
            this.$store.dispatch('updateVar', [this.targetElem, e.target.value])
        }
    }
}
</script>