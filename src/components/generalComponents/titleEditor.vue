<template>
    <div id="floatingInput">
        <label>Set new Title for `{{ title }}`</label>
        <input type="text" class="form-control" v-model="updatedTitle"/>
        <!-- <form-control :targetElem="'titles.personal'" :name="'set new name title of `' + title + ' `'"  /> -->
        <button @click="editTitle">save</button>
    </div>
</template>

<script>
import formControl from './formControl.vue'
import { mapState } from 'vuex';

export default {
    props: {
        title: String,
        targetElem: String
    },
    components: {
        formControl
    },
    data: function() {
        return {
            updatedTitle: '',
            titleWindow: ''
        }
    },
    methods: {
        editTitle() {
            alert(this.targetElem)
            this.$store.commit('updateTitle',[this.targetElem, this.updatedTitle]);
            this.$emit('hideWindow', false)
        }
    },
    computed: {
        ...mapState({
            titles: state => state.titles
        })
    }
}
</script>

<style>
#floatingInput {
  position: absolute;
  z-index: 50;
  top: 200px;
  padding: 50px;
  background-color: blueviolet;
  color: #fff
}
</style>