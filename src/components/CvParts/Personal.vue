<template>
  <div class="header">
    <div class="header-left">
      <div class="image-container">
        <img src="../../assets/pic/user.png" alt />
      </div>
      <div class="summary">
        <h1 class="title" style="color: #9654d8">{{ fullName }}</h1>
        <h2 class="title">- {{ jobTitle }}</h2>
        <p>{{ summary }}</p>
      </div>
    </div>
    <div class="header-right information">
      <h3 class="title">{{ title }}</h3>
      <div>
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ Personal.address }}</span>
      </div>
      <div>
        <i class="fas fa-birthday-cake"></i>
        <span>{{ Personal.birthday }}</span>
      </div>
      <div>
        <i class="fas fa-envelope-open"></i>
        <span>{{ Personal.email }}</span>
      </div>
      <div>
        <i class="fas fa-phone"></i>
        <span>{{ Personal.phone }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapState({
      Personal: "Personal",
      summary: "summary",
      jobTitle: "jobTitle"
    }),
    fullName() {
      return this.Personal.firstName + " " + this.Personal.lastName;
    }
  }
};
</script>