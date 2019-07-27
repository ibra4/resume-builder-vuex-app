<template>
    <div id="floatingInput">
        <input type="text" class="form-control" v-model="updatedTitle"/>
        <form-control :name="'set new name title of `' + title + ' `'"  />
        <button @click="editTitle">save</button>
    </div>
</template>

<script>
import formControl from './formControl.vue'

export default {
    props: {
        title: String,
    },
    components: {
        formControl
    },
    data: function() {
        return {
            updatedTitle: '',
        }
    },
    methods: {
        editTitle() {
            this.$store.commit('updateTitle',{
                target: this.targetElem,
                title: this.updatedTitle
            });
            this.$store.commit('hideTitleInput')
        }
    }
}
</script>

<style>
#floatingInput {
  position: absolute;
  z-index: 50;
  padding: 50px;
  background-color: blueviolet;
}
</style>