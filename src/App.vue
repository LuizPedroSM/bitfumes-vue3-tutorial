<template>
  <AppHeader />
  <div class="w-full flex">
    <!-- <DcHeros /> -->
    <Calendar />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
// import DcHeros from "./components/DcHeros";
import Calendar from "./components/Calendar";
export default {
  components: {
    AppHeader,
    // DcHeros
    Calendar,
  },
};
</script>

<style>
</style>