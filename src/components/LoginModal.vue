<template>
  <section
    @click="$emit('close-login-modal')"
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rouded shadow z-30 w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <form class="p-2" @submit.prevent="submit">
            <div class="my-4">
              <label for="">Email or Username</label>
              <input
                v-model="form.email"
                class="rounded shadow p-2 w-full"
                type="text"
                placeholder="Enter your email or username"
              />
            </div>
            <div class="my-4">
              <label for="">Password</label>
              <input
                v-model="form.password"
                class="rounded shadow p-2 w-full"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="my-4">
              <input
                class="rounded shadow-md p-2 w-full"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      // submit the form
    },
  },
};
</script>

<style>
</style>