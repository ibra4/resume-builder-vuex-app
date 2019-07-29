<template>
    <div class="carousel-item">
      <!-- <button @click="expMe">exp</button> -->
      
      <titleForm :title="title" :target="'personal'" />


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
import titleForm from '../generalComponents/titleForm.vue'


import { mapState } from 'vuex'

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
        titleForm
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