<template>
  <section class="text-center my-2">
    <button class="border px-2 rounded" @click="loginWithGoogle">
      Login With Google
    </button>
  </section>
</template>
<script>
import firebase from "../../util/firebase";
export default {
  methods: {
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          // const token = result.credential.accessToken;
          // const user = result.user;
          this.$emit("close-login-from-google");
        });
    },
  },
};
</script>

<style>
</style>