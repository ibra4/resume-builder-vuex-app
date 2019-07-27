<template>
    <div class="carousel-item active">
      <!-- <button @click="expMe">exp</button> -->
      
      <titleEditor v-if="this.titleWindow" :title="this.title" :targetElem="targetElem" @hideWindow="setWindow"/>

      <h6 class="text-secondary">
        click the title to edit <i class="fa fa-arrow-down"></i>
      </h6>
      <h1 class="title" @click="editTitle">
          {{title}}
      </h1>

      <div class="row">
        <div class="col-md-3 col-sm-6">
          <form-control :targetElem="'personal.firstName'" :name="'first name'"/>
        </div>
        <div class="col-md-3 col-sm-6">
          <form-control :targetElem="'personal.lastName'" :name="'last name'"/>
        </div>
        <div class="col-md-6">
          <form-control :targetElem="'personal.email'" :name="'E-mail'"/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 col-sm-6">
          <form-control :targetElem="'personal.phone'" :name="'phone number'"/>
        </div>
        <div class="col-md-3 col-sm-6">
          <form-control :targetElem="'personal.birthday'" :name="'date of birth'"/>
        </div>
        <div class="col-md-6">
          <form-control :targetElem="'personal.address'" :name="'address'"/>
        </div>
        <div class="col-md-6">
          <form-control :targetElem="'personal.summary'" :name="'summary'"/>
        </div>
      </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">Select a picture</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1">
        </div>
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
    data: function() {
        return {
            targetElem: 'personal',
            titleWindow: false
        }
    },
    components: {
        formControl,
        titleEditor
    },
    methods: {
      editTitle: function() {
        this.titleWindow = true
        this.$store.commit('showTitleInput')
      },
      expMe() {
        this.$store.dispatch('expMe')
      },
      setWindow(visible) {
        this.titleWindow = visible
      }
    },
    computed: {
      ...mapState({
        personal: state => state.personal
      }),
    }
}
</script>