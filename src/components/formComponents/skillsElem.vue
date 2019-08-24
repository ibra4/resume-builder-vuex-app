<template>
    <div>
        <titleForm :title="title" :target="objName" />
        <div class="row">
            <div v-for="sk in obj" :key="sk.id" class="col-md-6">
                <form-control :targetElem="objName + '|skill|' + sk.id" :name="'skill ' + (sk.id + 1)"/>
                <button v-if="obj.length > 1" @click="deleteObj(sk.id)" class="btn btn-danger" style="float: right">delete {{sk.id}} </button>
            </div>
        </div>
        <button @click="addObj()" class="btn btn-primary">add new object </button>
    </div>
</template>

<script>

import formControl from '../generalComponents/formControl.vue'
import titleForm from '../generalComponents/titleForm.vue'

import { mapState, mapActions } from 'vuex'

export default {
    props: ['title'],
    data: () => {
        return {
            objName: 'skills'
        }
    },
    components: {
        formControl,
        titleForm
    },
    methods : {
        editTitle() {
          this.$store.commit('showTitleInput')
        },
        ...mapActions(['fetchObject']),
        deleteObj(id) {
            this.$store.dispatch('deleteObj', [id, this.objName])
        },
        addObj() {
            this.$store.dispatch('addObj', this.objName)
        }
    },
    computed: {
      ...mapState({
        titleWindow: 'titleWindow',
      }),
      obj() {
          return this.$store.state[this.objName]
      }
    },
    created() {
      this.fetchObject(this.objName);
    }
}
</script>
<style>


</style>