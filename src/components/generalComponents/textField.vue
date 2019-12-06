<template>
    <div>
        <v-text-field v-model="ll" @input="updateVar" :label="name" ></v-text-field>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            ll: ''
        }
    },
    props: {
        name: String,
        targetElem: String,
    },
    methods: {
        updateVar(e) {
            this.$store.dispatch('updateVar', [this.targetElem, this.ll])
        }
    }
}
</script>