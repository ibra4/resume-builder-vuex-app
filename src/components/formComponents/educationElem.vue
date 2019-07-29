<template>
    <div class="carousel-item">
        
        <titleForm :title="title" :target="'education'" />
        
        <button @click="addEdu" class="btn btn-primary" style="float: right; margin-right:50px;">Add Education</button>
        <div v-for="(edu, index) in education" :key="index">
            <div class="row">
                <div class="col-md-6">
                    <form-control :val="'dsaasd'" :targetElem="'education|name|' + index" :name="'major'"/>
                </div>
                <div class="col-md-6">
                    <form-control :targetElem="'education|school|' + index" :name="'school name'"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <form-control :targetElem="'education|start|' + index" :name="'from'"/>
                </div>
                <div class="col-md-4">
                    <form-control :targetElem="'education|end|' + index" :name="'to'"/>
                </div>
                <div class="col-md-4">
                    <form-control :targetElem="'education|grade|' + index" :name="'grade'"/>
                </div>
            </div>
            <div class="row">ss
                <div class="col-md-12">
                    <text-area :targetElem="'education|disc|' + index" :label="'discripiton'"/>
                </div>
            </div>
            <!-- <div class="hr"></div> -->
        </div>
        <titleEditor v-if="titleWindow" :title="this.title" :targetElem="targetElem"/>
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
            targetElem: 'education'
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
        addEdu() {
            this.$store.commit('addObj', 'education')
        }
    },
    computed: {
      ...mapState({
        titleWindow: 'titleWindow',
        education: state => state.education
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