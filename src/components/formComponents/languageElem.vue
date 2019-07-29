<template>
    <div class="carousel-item">
        
        <titleForm :title="title" :target="'languages'" />
        
        <button @click="addLanguage" class="btn btn-primary" style="float: right; margin-right:50px;">Add Language</button>

    </div>
</template>

<script>

import formControl from '../generalComponents/formControl.vue'
import titleForm from '../generalComponents/titleForm.vue'

import { mapState, mapGetters } from 'vuex'

export default {
    props: [
        'title'
    ],
    data: () => {
        return {
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