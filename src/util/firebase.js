import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIRE_BASE_API_KEY,
    authDomain: process.env.VUE_APP_FIRE_BASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIRE_BASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIRE_BASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIRE_BASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIRE_BASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIRE_BASE_APP_ID
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");
export default firebase
