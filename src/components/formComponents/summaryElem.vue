<template>
    <div class="carousel-item">
          <titleForm :title="title" :target="title" />
          <form-control :targetElem="'jobTitle'" :name="'Job Title'"/>
          <text-area :targetElem="'summary'" :label="'short discription'"/>
    </div>
</template>

<script>

import textArea from '../generalComponents/textArea.vue'
import formControl from '../generalComponents/formControl.vue'
import titleForm from '../generalComponents/titleForm.vue'

import { mapState } from 'vuex'

export default {
    props: ['title'],
    components: {
        textArea,
        formControl,
        titleForm
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