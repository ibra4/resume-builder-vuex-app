<template>
    <div>
      <!-- <button @click="expMe">exp</button> -->
      
      <titleForm :title="title" :target="'personal'" />

      <v-content>
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="'personal.firstName'" :name="'first name'"/>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="'personal.lastName'" :name="'last name'"/>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="'personal.email'" :name="'E-mail'"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="'personal.phone'" :name="'phone number'"/>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="'personal.birthday'" :name="'date of birth'"/>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="'personal.address'" :name="'address'"/>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <text-field :targetElem="'personal.summary'" :name="'summary'"/>
          </v-col>
        </v-row>
      </v-content>
    </div>
</template>



<script>

import textField from '../generalComponents/textField.vue'
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
        textField,
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