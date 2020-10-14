<template>
  <section
    @click="close"
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rouded shadow z-30 w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <LoginGoogle @close-login-from-google="close" />
          <p class="mt-2 text-center">Or</p>
          <form class="p-2" @submit.prevent="submit">
            <div class="my-4">
              <label for="">Email or Username</label>
              <input
                v-model="email"
                class="rounded shadow p-2 w-full"
                type="text"
                placeholder="Enter your email or username"
                ref="loginRef"
              />
            </div>
            <div class="my-4">
              <label for="">Password</label>
              <input
                v-model="password"
                class="rounded shadow p-2 w-full"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="my-4">
              <button class="rounded shadow-md p-2 w-full" type="submit">
                <span v-if="!isLoading"> Login </span>
                <span v-else> ⌛ </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../util/firebase";
import LoginGoogle from "../components/Login/LoginGoogle";
export default {
  components: { LoginGoogle },
  mounted() {
    this.$refs.loginRef.focus();
  },
  data() {
    return {
      // form: {
      email: "teste@gmail.com",
      password: "teste1",
      // },
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch(function (error) {
          // Handle Errors here.
          console.log(error);
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login-modal");
    },
  },
};
</script>

<style>
</style>