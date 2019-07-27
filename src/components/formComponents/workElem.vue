<template>
    <div class="carousel-item">
        <h6 class="text-secondary">
          click the title to edit <i class="fa fa-arrow-down"></i>
        </h6>
        <h1 class="title" @click="editTitle">
            {{title}}
        </h1>
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
        <titleEditor v-if="titleWindow" :title="this.title" :targetElem="targetElem"/>
    </div>
</template>

<script>

import formControl from '../generalComponents/formControl.vue'
import textArea from '../generalComponents/textArea.vue'
import titleEditor from '../generalComponents/titleEditor.vue'

import { mapState, mapGetters } from 'vuex'

export default {
    props: [
        'title'
    ],
    data: () => {
        return {
            targetElem: 'work'
        }
    },
    components: {
        formControl,
        textArea,
        titleEditor
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