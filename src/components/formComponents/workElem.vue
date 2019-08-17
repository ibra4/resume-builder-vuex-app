<template>
    <div class="carousel-item">
        
        <titleForm :title="title" :target="objName" />

        <div v-for="w in obj" :key="w.id">
            <div class="row">
                <div class="col-md-6">
                    <form-control :targetElem="objName + '|' + 'company' + '|' + w.id" :name="'major'"/>
                </div>
                <div class="col-md-6">
                    <form-control :targetElem="objName + '|' + 'major' + '|' + w.id" :name="'major'"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <form-control :targetElem="objName + '|' + 'start' + '|' + w.id" :name="'from'"/>
                </div>
                <div class="col-md-4">
                    <form-control :targetElem="objName + '|' + 'end' + '|' + w.id" :name="'to'"/>
                </div>
            </div>
            <!-- <button class="btn btn-primary">add list</button> -->
            <div class="row">
                <div class="col-md-12">
                    <text-area :targetElem="objName + '|' + 'disc' + '|' + w.id" :label="'discripiton'"/>
                </div>
            </div>
            <button v-if="obj.length > 1" @click="deleteObj(w.id)" class="btn btn-danger" style="float: right">delete {{w.id}} </button>


            <div class="hr"></div>
        </div>
        <button @click="addObj()" class="btn btn-primary">add new object </button>

    </div>
</template>

<script>

import formControl from '../generalComponents/formControl.vue'
import textArea from '../generalComponents/textArea.vue'
import titleForm from '../generalComponents/titleForm.vue'

import { mapState, mapActions } from 'vuex'

export default {
    props: ['title'],
    data: () => {
        return {
            objName: 'work'
        }
    },
    components: {
        formControl,
        textArea,
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
    .hr {
        height: 2px;
        background-color: blue;
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>