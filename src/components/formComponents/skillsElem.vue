<template>
    <div class="carousel-item active">
        <titleForm :title="title" :target="'skills'" />
        <div class="row">
            <div v-for="(sk, index) in skills" :key="index" class="col-md-6">
                <form-control :targetElem="'skills|skill|' + index"/>
            </div>
        </div>
        <button @click="addSkill" class="btn btn-primary">Add This Skill</button>
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
        addSkill() {
            this.$store.commit('addObj', 'skills')
        }
    },
    computed: {
      ...mapState({
        titleWindow: 'titleWindow',
        skills: state => state.skills
      }),
    }
}
</script>