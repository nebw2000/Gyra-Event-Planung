// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyCXX4CwnX_eRiKBURJeORfGoYI0k0hdHkA",
  authDomain: "event-plan-c4b36.firebaseapp.com",
  databaseURL: "https://event-plan-c4b36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "event-plan-c4b36",
  storageBucket: "event-plan-c4b36.appspot.com",
  messagingSenderId: "489710650124",
  appId: "1:489710650124:web:6a515ffd6ec3d9983aff29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const eventsRef = ref(db, 'events');

// Event speichern
export function saveEvent(data){
    return push(eventsRef, data);
}

// Event aktualisieren
export function updateEvent(id, data){
    const eventRef = ref(db, 'events/' + id);
    return update(eventRef, data);
}

// Event löschen
export function deleteEvent(id){
    const eventRef = ref(db, 'events/' + id);
    return remove(eventRef);
}

// Alle Events laden
export function loadEvents(callback){
    onValue(eventsRef, (snapshot)=>{
        const eventsObj = snapshot.val() || {};
        const eventsArray = [];
        for(let id in eventsObj){
            eventsArray.push({id,...eventsObj[id]});
        }
        // Sortieren nach Datum und Uhrzeit
        eventsArray.sort((a,b)=>{
            const dateA = new Date(a.date + " " + a.time);
            const dateB = new Date(b.date + " " + b.time);
            return dateA - dateB;
        });
        callback(eventsArray);
    });
}
