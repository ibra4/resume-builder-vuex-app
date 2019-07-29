<template>
    <div class="carousel-item active">
        
        <titleForm :title="title" :target="'work'" />

        <button @click="addWork" class="btn btn-primary" style="float: right; margin-right:50px;">Add Work</button>
        <div v-for="(w, index) in work" :key="index">
            <div class="row">
                <div class="col-md-6">
                    <form-control :targetElem="'work|company|' + index" :name="'company'"/>
                </div>
                <div class="col-md-6">
                    <form-control :targetElem="'work|major|' + index" :name="'major'"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <form-control :targetElem="'work|start|' + index" :name="'from'"/>
                </div>
                <div class="col-md-4">
                    <form-control :targetElem="'work|end|' + index" :name="'to'"/>
                </div>
            </div>
            <button class="btn btn-primary">add list</button>
            <div class="row">
                <div class="col-md-12">
                    <text-area :targetElem="'work|disc|' + index" :label="'discripiton'"/>
                </div>
            </div>
            <div class="hr"></div>
        </div>
    </div>
</template>

<script>

import formControl from '../generalComponents/formControl.vue'
import textArea from '../generalComponents/textArea.vue'
import titleForm from '../generalComponents/titleForm.vue'

import { mapState } from 'vuex'

export default {
    props: ['title'],
    data: () => {
        return {
            targetElem: 'work'
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
        addWork() {
            this.$store.commit('addObj', 'work')
        }
    },
    computed: {
      ...mapState({
        titleWindow: 'titleWindow',
        work: state => state.work
      }),
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