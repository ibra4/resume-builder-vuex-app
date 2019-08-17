<template>
    <div>
        <title-editor v-if="this.titleWindow" :title="this.title" :targetElem="target" @hideWindow="setWindow"/>
        <h6 class="text-secondary">
          click the title to edit <i class="fa fa-arrow-down"></i>
        </h6>
        <h1 class="title" @click="editTitle">
            {{title}}
        </h1>
    </div>
</template>

<script>

import titleEditor from './titleEditor.vue'

export default {
    props: [
        'title',
        'target'
    ],
    data: () => {
        return {
            titleWindow: false
        }
    },
    components: {
        titleEditor
    },
    methods: {
      editTitle: function() {
        this.titleWindow = true;
      },
      setWindow(visible) {
        this.titleWindow = visible
      }
    }
}
</script>