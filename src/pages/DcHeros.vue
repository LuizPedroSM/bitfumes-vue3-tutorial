<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Dc Heros {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button @click="remove(index)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded p-1"
        v-model.lazy.trim="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button class="border rounded p-1 ml-1" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      { name: "Supergirl" },
      { name: "Flash" },
      { name: "Batman" },
      { name: "Arrow" },
      { name: "SuperMan" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    const herosCount = computed({
      get: () => dcHeros.value.length,
    });

    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
    }
    function addHero() {
      if (newHero.value !== "") {
        dcHeros.value.push({ name: newHero.value });
        newHero.value = "";
      }
    }

    return { dcHeros, newHero, remove, addHero, newHeroRef, herosCount };
  },
};
</script>

<style>
</style>