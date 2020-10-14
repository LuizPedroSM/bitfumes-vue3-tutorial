<template>
  <div class="flex flex-wrap w-full relative">
    <div class="w-full absolute" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-1 rounded-full cursor-pointer shadow-md"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: [" bg-red-600", " bg-green-600", "bg-blue-600"],
      interval: "",
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide >= 2 ? (this.currentSlide = 0) : this.currentSlide++;
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in;
}

.fade-enter-from {
  transform: translateX(100%);
  opacity: 0.5;
}
.fade-leave-to {
  opacity: 0.5;
  transform: translateX(-100%);
}
</style>