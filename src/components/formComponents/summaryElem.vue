<template>
    <div>
          <v-content>
            <v-row>
              <v-col cols="12" md="8">
                <text-field :targetElem="'jobTitle'" :name="'Job Title'"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <text-area :targetElem="'summary'" :label="'short discription'"/>
              </v-col>
            </v-row>
          </v-content>
    </div>
</template>

<script>

import textArea from '../generalComponents/textArea.vue'
import textField from '../generalComponents/textField.vue'

import { mapState } from 'vuex'

export default {
    components: {
        textArea,
        textField,
    },
    computed: {
      ...mapState({
        summary: state => state.summary
      }),
    }
}
</script>