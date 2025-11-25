// Deine Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

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

// Initialisiere Firebase
const app = initializeApp(firebaseConfig);

// Realtime Database
const db = getDatabase(app);

// Export
export { db };
