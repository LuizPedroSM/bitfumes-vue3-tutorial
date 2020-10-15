<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2 text-white"
  >
    <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">
      {{ item.title }}
    </router-link>
    <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
  </nav>
</template>

<script>
import firebase from "../util/firebase";
export default {
  props: { isLoggedIn: { type: Boolean, required: true } },
  data() {
    return {
      list: [
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider-carousel" },
        { title: "Calculator", to: "/calculator" },
        { title: "Reusable Modal", to: "/reusable-modal" },
      ],
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      // .then((res) => {})
      // .catch((e) => {});
    },
  },
};
</script>

<style>
</style>