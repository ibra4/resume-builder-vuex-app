<template>
    <div class="carousel-item">
        <div class="container">
        <title-editor v-if="titleWindow" :title="this.title" :targetElem="'summary'"/>

        </div>
      
      <h6 class="text-secondary">
        click the title to edit <i class="fa fa-arrow-down"></i>
      </h6>
      <h1 class="title" @click="editTitle">
          {{title}}
      </h1>
      <form-control :targetElem="'jobTitle'" :name="'Job Title'"/>
      <text-area :targetElem="'summary'" :label="'short discription'"/>
    </div>
</template>

<script>

import textArea from '../generalComponents/textArea.vue'
import formControl from '../generalComponents/formControl.vue'
import titleEditor from '../generalComponents/titleEditor.vue'

import { mapState, mapGetters } from 'vuex'

export default {
    props: ['title'],
    data: function() {
        return {
            // summary: ''
        }
    },
    components: {
        textArea,
        formControl,
        titleEditor
    },
    methods: {
      editTitle: function() {
        this.$store.commit('showTitleInput')
      }
    },
    computed: {
      ...mapState({
        titleWindow: 'titleWindow',
        summary: state => state.summary
      }),
    }
}
</script>