// Firebase-Konfiguration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXX4CwnX_eRiKBURJeORfGoYI0k0hdHkA",
  authDomain: "event-plan-c4b36.firebaseapp.com",
  databaseURL: "https://event-plan-c4b36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "event-plan-c4b36",
  storageBucket: "event-plan-c4b36.firebasestorage.app",
  messagingSenderId: "489710650124",
  appId: "1:489710650124:web:6a515ffd6ec3d9983aff29",
  measurementId: "G-CPW8C0JVZX"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
