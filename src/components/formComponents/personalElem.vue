<template>
    <div>
      <!-- <button @click="expMe">exp</button> -->
      
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


import { mapState } from 'vuex'

export default {
    data: function() {
        return {
            targetElem: 'personal',
        }
    },
    components: {
        textField,
    },
    methods: {
      expMe() {
        this.$store.dispatch('expMe')
      }
    },
    computed: {
      ...mapState({
        personal: state => state.personal
      }),
    }
}
</script>