<template>
    <div class="carousel-item">
        
        <titleForm :title="title" :target="'languages'" />

        <div v-for="(lang, index) in languages" :key="index">
            <div class="row">
                <div class="col-md-6">
                    <form-control :targetElem="'languages|lang|' + index" :name="'language'" />
                </div>
                <div class="col-md-6">
                    <form-control :targetElem="'languages|level|' + index" :name="'level'" />
                </div>
            </div>
        </div>
        <button @click="addLanguage" class="btn btn-primary" style="float: right; margin-right:50px;">Add This Language</button>

    </div>
</template>

<script>

import formControl from '../generalComponents/formControl.vue'
import titleForm from '../generalComponents/titleForm.vue'

import { mapState } from 'vuex'

export default {
    props: ['title'],
    data: () => {
        return {
            formControl,
            targetElem: 'languages'
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
        addLanguage() {
            this.$store.commit('addObj', 'languages')
        }
    },
    computed: {
      ...mapState({
        titleWindow: 'titleWindow',
        languages: state => state.languages
      }),
    }
}
</script>