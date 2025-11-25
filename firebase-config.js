import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "DEINE_APIKEY",
  authDomain: "DEIN_AUTHDOMAIN",
  databaseURL: "DEINE_DATABASEURL",
  projectId: "DEIN_PROJECTID",
  storageBucket: "DEIN_STORAGEBUCKET",
  messagingSenderId: "DEINE_MESSAGINGID",
  appId: "DEINE_APPID"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
