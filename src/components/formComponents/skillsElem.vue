<template>
    <div>
        <div class="row">
            <div v-for="sk in obj" :key="sk.id" class="col-md-6">
                <text-field :targetElem="objName + '|skill|' + sk.id" :name="'skill ' + (sk.id + 1)"/>
                <button v-if="obj.length > 1" @click="deleteObj(sk.id)" class="btn btn-danger" style="float: right">delete {{sk.id}} </button>
            </div>
        </div>
        <button v-if="obj[Object.keys(obj).length-1].skill != ''" @click="addObj()" class="btn btn-primary">add new object </button>
    </div>
</template>

<script>

import textField from '../generalComponents/textField.vue'

import { mapState, mapActions } from 'vuex'

export default {
    data: () => {
        return {
            objName: 'skills'
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
<style>


</style>