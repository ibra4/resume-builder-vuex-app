<template>
<div class="para lang">
  <div class="title">
      <span><i class="fas fa-language"></i></span>languages
  </div>
  <div class="exp">
      <div v-for="(lang, index) in languages" :key="index">
        <span>{{ lang.lang }}</span><span>{{ lang.level }}</span>
      </div>
  </div>
</div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    props: [
        'title'
    ],
    computed:{
        ...mapState({
            languages: 'languages'
        })
    }

}
</script>