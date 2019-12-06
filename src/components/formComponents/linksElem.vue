<template>
    <div>
        <div v-for="link in obj" :key="link.id">
            <options
            :items="linksList"
            :label="'select a link'"
            :targetElem="objName + '|type|' + link.id"
            >

            </options>
            <!-- <span>
                <font-awesome-icon v-if="category" :icon="[ 'fab', getIcon(category) ]" />
            </span> -->
            <span>
                <!-- <options :targetElem="objName + '|type|' + link.id" :name="'link'" /> -->
                <text-field :targetElem="objName + '|username|' + link.id" :name="'link'" />
            </span>
            <button v-if="obj.length > 1" @click="deleteObj(link.id)" class="btn btn-danger" style="float: right">delete {{link.id}} </button>
        </div>
        <button @click="addObj()" class="btn btn-primary">add new object </button>
    </div>
</template>

<script>

import textField from '../generalComponents/textField.vue'
import options from '../generalComponents/option'

import {mapState, mapActions} from 'vuex'

export default {
    data: () => {
        return {
            category: '',
            objName: 'links',
            items: ['facebook', 'twitter', 'linkedin']
        }
    },
    components: {
        textField,
        options
    },
    computed: {
      ...mapState({
        linksList: state => state.linksList
      }),
      obj() {
          return this.$store.state[this.objName]
      }
    },
    methods: {
        ...mapActions(['fetchObject']),
        deleteObj(id) {
            this.$store.dispatch('deleteObj', [id, this.objName])
        },
        addObj() {
            this.$store.dispatch('addObj', this.objName)
        }
    },
    created() {
      this.fetchObject(this.objName);
    }
}
</script>