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
    name: 'form-group',
    props: {
        name: String,
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