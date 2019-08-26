<template>
    <div>

        <div v-for="edu in obj" :key="edu.id">
            <v-content>
                <v-row>
                    <v-col cols="12" md="6">
                        <text-field :targetElem="objName + '|' + 'name' + '|' + edu.id" :name="'major'"/>
                    </v-col>
                    <v-col cols="12" md="6">
                        <text-field :targetElem="objName + '|' + 'school' + '|' + edu.id" :name="'school name'"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6" lg="4">
                        <text-field :targetElem="objName + '|' + 'start' + '|' + edu.id" :name="'from'"/>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <text-field :targetElem="objName + '|' + 'end' + '|' + edu.id" :name="'to'"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4">
                        <text-field :targetElem="objName + '|' + 'grade' + '|' + edu.id" :name="'degree'"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <text-area :targetElem="objName + '|' + 'disc' + '|' + edu.id" :label="'discripiton'"/>
                    </v-col>
                </v-row>
            </v-content>
            <v-btn color="error" v-if="obj.length > 1" @click="deleteObj(edu.id)" class="btn btn-danger">delete {{edu.id}} </v-btn>
            <v-divider></v-divider>

        </div>
        <v-btn color="success" @click="addObj()" class="btn btn-primary">add new object </v-btn>

    </div>
</template>

<script>

import textField from '../generalComponents/textField.vue'
import textArea from '../generalComponents/textArea.vue'
import { mapState, mapActions } from 'vuex'

export default {
    data: () => {
        return {
            objName: 'education'
        }
    },
    components: {
        textField,
        textArea,
    },
    methods : {
        ...mapActions(['fetchObject']),
        deleteObj(id) {
            this.$store.dispatch('deleteObj', [id, this.objName])
        },
        addObj() {
            this.$store.dispatch('addObj', this.objName)
        }
    },
    computed: {
      obj() {
          return this.$store.state[this.objName]
      }
    },
    created() {
      this.fetchObject(this.objName);
    }
}
</script>

<style>
    .hr {
        height: 2px;
        background-color: blue;
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>