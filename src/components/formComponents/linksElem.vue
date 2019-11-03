<template>
    <div>
        <v-content>
            <v-row>
                <v-col cols="12" md="6" lg="4">
                    <v-select 
                    :items="linksList" 
                    lebel="select a link"
                    item-text="type"
                    v-model="category"
                    >
                    </v-select>
                    <font-awesome-icon v-if="category" :icon="[ 'fab', this.getIcon(category) ]" />
                </v-col>
            </v-row>
        </v-content>
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
    data: () => {
        return {
            category: ''
        }
    },
    computed: {
      ...mapState({
        linksList: state => state.linksList
      }),
    },
    methods: {
        ...mapActions(['fetchObject']),
        getIcon(category) {
            if (category && category != '') {
                return this.$store.state.linksList.find(el => el.type == category).icon
            }
        }
    },
    created() {
      this.fetchObject(this.objName);
    }
}
</script>