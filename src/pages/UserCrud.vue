<template>
  <div class="m-auto">
    <div class="mt-10">
      <Create @new-user-added="addUser" />
      <table class="my-2">
        <thead>
          <tr>
            <th class="border px-4 py-2">ID</th>
            <th class="border px-4 py-2">Avatar</th>
            <th class="border px-4 py-2">Name</th>
            <th class="border px-4 py-2">Email</th>
            <th class="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in state.users" :key="user._id">
            <td class="border px-4 py-2">{{ user._id }}</td>
            <td class="border px-4 py-2">
              <img
                :src="user.avatar"
                :alt="user.name"
                width="80"
                class="rounded-full"
              />
            </td>
            <td class="border px-4 py-2">{{ user.name }}</td>
            <td class="border px-4 py-2">{{ user.email }}</td>
            <td class="border px-4 py-2">
              <button
                class="px-2 py-1 bg-red-600 rounded text-white hover:bg-red-800"
                @click="destroy(user._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between">
        <button
          class="px-3 py-2 border rounded"
          @click="prev"
          :disabled="state.users.page === 1"
          :class="state.users.page === 1 ? 'opacity-50' : ' hover:shadow'"
        >
          Prev
        </button>
        <button
          class="px-3 py-2 border rounded"
          @click="next"
          :disabled="state.users.page === state.users.total_pages"
          :class="
            state.users.page === state.users.total_pages
              ? 'opacity-50'
              : ' hover:shadow'
          "
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
import Create from "../components/UserCrud/Create";
export default {
  components: { Create },
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });

    async function next() {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }

    async function prev() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }

    function addUser(data) {
      state.users.push(data);
    }

    async function destroy(id) {
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter((user) => user._id !== id);
    }

    return { state, next, prev, destroy, addUser };
  },
};
</script>

<style>
</style>
