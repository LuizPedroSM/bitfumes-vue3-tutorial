<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p
        class="text-3xl text-right mt-8 mb-2 w-48 overflow-x-scroll h-16"
        style="direction: rtl"
      >
        {{ currentValue }}
      </p>
      <div class="h-8">
        <small v-if="selectedOperation">
          {{ prevValue }}{{ selectedOperation }}{{ currentValue }}
        </small>
      </div>
      <div class="grid grid-cols-4 gap-2">
        <button
          @click="pressed('1')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          *
        </button>
        <button
          @click="pressed('0')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          0
        </button>
        <button
          @click="pressed('c')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          C
        </button>
        <button
          @click="pressed('=')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-2 w-10 h-=10 border rounded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentValue = ref("");
    const prevValue = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }
    function appendNumber(value) {
      currentValue.value = currentValue.value + value;
    }
    function applyOperation(value) {
      calculate();
      prevValue.value = currentValue.value;
      currentValue.value = "";
      selectedOperation.value = value;
    }
    function calculate() {
      if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "/") divide();
      else if (selectedOperation.value === "+") sum();
      else if (selectedOperation.value === "-") subtract();
      prevValue.value = "";
      selectedOperation.value = "";
    }
    function multiply() {
      currentValue.value = prevValue.value * currentValue.value;
    }
    function divide() {
      currentValue.value = prevValue.value / currentValue.value;
    }
    function subtract() {
      currentValue.value = prevValue.value - currentValue.value;
    }
    function sum() {
      currentValue.value = +prevValue.value + +currentValue.value;
    }
    const clear = () => (currentValue.value = "");

    const handleKeyDown = (e) => pressed(e.key);

    onMounted(() => window.addEventListener("keydown", handleKeyDown));

    onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));

    return { pressed, currentValue, selectedOperation, prevValue };
  },
};
</script>

<style>
</style>