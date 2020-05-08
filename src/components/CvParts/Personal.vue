<template>
  <div class="header" style="margin-top:30px;">
    <div class="header-left" style="float:left;width: 65%;display:flex">
      <div
        class="image-container"
        style="height:150px;width:150px;margin-left:15px;display:inline-block;overflow:hidden"
      >
        <img src="../../assets/pic/user.png" alt style="width:100%;" />
      </div>
      <div class="summary" style="width:60%;display:inline-block;overflow:hidden;padding-left:20px">
        <h1 class="title full-name" style="color:#9654d8;font-size: 20px; !important;text-transform:uppercase;letter-spacing:1px">{{ fullName }}</h1>
        <h2 class="title" style="text-transform:uppercase;letter-spacing:1px;font-size:18px">- {{ jobTitle }}</h2>
        <p>{{ summary }}</p>
      </div>
    </div>
    <div
      class="header-right information"
      style="padding:10px;background-color:#e4e9ed !important;width:35%;float:right"
    >
      <h3 class="title" style="text-transform:uppercase;letter-spacing:1px;font-size:18px;margin-left:5px">>{{ title }}</h3>
      <div style="margin-top:10px;">
        <i
          class="fas fa-map-marker-alt"
          style="color:#e4e9ed;background-color:#9655d8;padding:5px;border-radius:50%"
        ></i>
        <span style="color:#212529;margin-left:5px">{{ Personal.address }}</span>
      </div>
      <div style="margin-top:10px;">
        <i
          class="fas fa-birthday-cake"
          style="color:#e4e9ed;background-color:#9655d8;padding:5px;border-radius:50%"
        ></i>
        <span style="color:#212529;margin-left:5px">{{ Personal.birthday }}</span>
      </div>
      <div style="margin-top:10px;">
        <i
          class="fas fa-envelope-open"
          style="color:#e4e9ed;background-color:#9655d8;padding:5px;border-radius:50%"
        ></i>
        <span style="color:#212529;margin-left:5px">{{ Personal.email }}</span>
      </div>
      <div style="margin-top:10px;">
        <i
          class="fas fa-phone"
          style="color:#e4e9ed;background-color:#9655d8;padding:5px;border-radius:50%"
        ></i>
        <span style="color:#212529;margin-left:5px">{{ Personal.phone }}</span>
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