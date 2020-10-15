<template>
  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Modal</h1>
      <Modal v-if="isModalOneOpen" @close="isModalOneOpen = false">
        <template #title> Title </template>
        <template #body>
          <p>This is the body slot</p>
        </template>
      </Modal>
      <button class="border rounded px-2 mx-2" @click="isModalOneOpen = true">
        Open Modal One
      </button>

      <Modal v-if="isModalTwoOpen" @close="isModalTwoOpen = false">
        <template #title> Title 2</template>
        <template #body>
          <p>This is the body slot 2</p>
        </template>
      </Modal>
      <button class="border rounded px-2 mx-2" @click="isModalTwoOpen = true">
        Open Modal Two
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isModalOneOpen = ref(false);
    const isModalTwoOpen = ref(false);

    return { isModalOneOpen, isModalTwoOpen };
  },
};
</script>

<style>
</style>