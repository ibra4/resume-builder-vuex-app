<template>
    <div class="carousel-item">
        <h6 class="text-secondary">
          click the title to edit <i class="fa fa-arrow-down"></i>
        </h6>
        <h1 class="title" @click="editTitle">
            {{title}}
        </h1>
        <button @click="addLanguage" class="btn btn-primary" style="float: right; margin-right:50px;">Add Language</button>

    </div>
</template>

<script>

import formControl from '../generalComponents/formControl.vue'
import titleEditor from '../generalComponents/titleEditor.vue'

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
        titleEditor
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