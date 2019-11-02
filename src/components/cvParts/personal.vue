<template>
<div class="header">
    <div class="header-left">
      <div class="image-container">
        <img src="../../assets/pic/user.png" alt="">
      </div>
      <div class="summary">
        <h1 class="title" style="color: #9654d8">{{ fullName }}</h1>
        <h2 class="title">- {{ jobTitle }}</h2>
        <p> {{ summary }}</p>
      </div>
    </div>
    <div class="header-right information">
      <h3 class="title">{{ title }}</h3>
      <div>
        <i class="fas fa-map-marker-alt"></i> <span>{{ personal.address }}</span>
      </div>
      <div>
          <i class="fas fa-birthday-cake"></i> <span>{{ personal.birthday }}</span>
      </div>
      <div>
        <i class="fas fa-envelope-open"></i> <span>{{ personal.email }}</span>
      </div>
      <div>
        <i class="fas fa-phone"></i> <span>{{ personal.phone }}</span>
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
            personal: 'personal',
            summary: 'summary',
            jobTitle: 'jobTitle'
        }),
        fullName() {
            return this.personal.firstName + ' ' + this.personal.lastName 
        }
    }
}
</script>