<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div
            v-for="chat in state.chats"
            :key="chat.key"
            :class="chat.userId === userId ? 'text-right' : 'text-left'"
          >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            type="text"
            v-model="state.message"
            placeholder="Start Typing..."
            class="p-1 border rounded shadow"
            @keydown.enter="addMessage"
            ref="chatInputRef"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { chatsRef } from "../util/firebase";
import { useStore } from "vuex";
export default {
  setup() {
    const chatInputRef = ref("");
    const state = reactive({
      chats: [],
      message: "",
    });

    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);

    onMounted(() => {
      console.log(chatInputRef);
      chatInputRef.value.focus();
      chatsRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    function addMessage() {
      const newChat = chatsRef.push();
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }
    return { state, addMessage, userId, chatInputRef };
  },
};
</script>

<style>
</style>