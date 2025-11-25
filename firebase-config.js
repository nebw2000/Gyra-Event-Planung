// Firebase konfigurieren
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXX4CwnX_eRiKBURJeORfGoYI0k0hdHkA",
  authDomain: "event-plan-c4b36.firebaseapp.com",
  databaseURL: "https://event-plan-c4b36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "event-plan-c4b36",
  storageBucket: "event-plan-c4b36.appspot.com",
  messagingSenderId: "489710650124",
  appId: "1:489710650124:web:05423665acc223a83aff29",
  measurementId: "G-KRY2MM4JEV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
