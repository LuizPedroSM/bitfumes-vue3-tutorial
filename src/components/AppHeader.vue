<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2 text-white"
  >
    <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">
      {{ item.title }}
    </router-link>
    <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
      ],
    };
  },
};
</script>

<style>
</style>