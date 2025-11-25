// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

// Deine Firebase-Konfiguration hier einfügen
const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "DEIN_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://DEIN_PROJECT_ID-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "DEIN_PROJECT_ID",
  storageBucket: "DEIN_PROJECT_ID.appspot.com",
  messagingSenderId: "DEIN_MESSAGING_SENDER_ID",
  appId: "DEIN_APP_ID",
  measurementId: "DEIN_MEASUREMENT_ID"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);

// Datenbank exportieren
export const db = getDatabase(app);
