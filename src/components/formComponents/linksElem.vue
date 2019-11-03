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
                    {{category}}
                    <font-awesome-icon :icon="[ 'fab', 'facebook-square' ]" />
                </v-col>
            </v-row>
        </v-content>
    </div>
</template>

<script>

import {mapState} from 'vuex'

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
    }
}
</script>