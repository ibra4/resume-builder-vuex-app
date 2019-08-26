<template>
    <div>
        
        <div v-for="lang in obj" :key="lang.id">
            <div class="row">
                <div class="col-md-6">
                    <text-field :targetElem="objName + '|lang|' + lang.id" :name="'language'" />
                </div>
                <div class="col-md-6">
                    <text-field :targetElem="objName + '|level|' + lang.id" :name="'level'" />
                </div>
            </div>
            <button v-if="obj.length > 1" @click="deleteObj(lang.id)" class="btn btn-danger" style="float: right">delete {{lang.id}} </button>
        </div>
        <button @click="addObj()" class="btn btn-primary">add new object </button>

    </div>
</template>

<script>

import textField from '../generalComponents/textField.vue'

import { mapState, mapActions } from 'vuex'

export default {
    data: () => {
        return {
            objName: 'languages'
        }
    },
    components: {
        textField,
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