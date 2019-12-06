<template>
    <div>
        <v-select 
        :items="items" 
        :lebel="label"
        item-text="type"
        v-model="ll"
        v-on:change="updateVar"
        >
        </v-select>
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
        label: String,
        targetElem: String,
        items: Array
    },
    methods: {
        updateVar(e) {
            this.$store.dispatch('updateVar', [this.targetElem, this.ll])
        }
    }
}
</script>