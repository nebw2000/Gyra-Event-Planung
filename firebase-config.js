// Firebase App konfigurieren
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXX4CwnX_eRiKBURJeORfGoYI0k0hdHkA",
  authDomain: "event-plan-c4b36.firebaseapp.com",
  databaseURL: "https://event-plan-c4b36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "event-plan-c4b36",
  storageBucket: "event-plan-c4b36.appspot.com",
  messagingSenderId: "489710650124",
  appId: "1:489710650124:web:6a515ffd6ec3d9983aff29",
  measurementId: "G-CPW8C0JVZX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
