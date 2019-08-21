<template>
    <div class="carousel-item active">

        <titleForm :title="title" :target="'education'" />test karen
        
        <div v-for="edu in obj" :key="edu.id">
            <div class="row">
                <div class="col-md-6">
                    <form-control :targetElem="objName + '|' + 'name' + '|' + edu.id" :name="'major'"/>
                </div>
                <div class="col-md-6">
                    <form-control :targetElem="objName + '|' + 'school' + '|' + edu.id" :name="'school name'"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <form-control :targetElem="objName + '|' + 'start' + '|' + edu.id" :name="'from'"/>
                </div>
                <div class="col-md-4">
                    <form-control :targetElem="objName + '|' + 'end' + '|' + edu.id" :name="'to'"/>
                </div>
                <div class="col-md-4">
                    <form-control :targetElem="objName + '|' + 'grade' + '|' + edu.id" :name="'grade'"/>
                </div>
            </div>
            <div class="row">ss
                <div class="col-md-12">
                    <text-area :targetElem="objName + '|' + 'disc' + '|' + edu.id" :label="'discripiton'"/>
                </div>
            </div>
            <button v-if="obj.length > 1" @click="deleteObj(edu.id)" class="btn btn-danger" style="float: right">delete {{edu.id}} </button>

        </div>
        <button @click="addObj()" class="btn btn-primary">add new object </button>

        <titleEditor v-if="titleWindow" :title="this.title" :targetElem="objName"/>
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
            objName: 'education'
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