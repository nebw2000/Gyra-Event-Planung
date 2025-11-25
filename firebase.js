// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyCXX4CwnX_eRiKBURJeORfGoYI0k0hdHkA",
  authDomain: "event-plan-c4b36.firebaseapp.com",
  databaseURL: "https://event-plan-c4b36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "event-plan-c4b36",
  storageBucket: "event-plan-c4b36.appspot.com",
  messagingSenderId: "489710650124",
  appId: "1:489710650124:web:6a515ffd6ec3d9983aff29"
};

// Firebase App initialisieren
export const app = initializeApp(firebaseConfig);

// Realtime Database
export const db = getDatabase(app);

// Funktion: Neues Event speichern
export function saveEvent(eventData){
    const eventsRef = ref(db, 'events');
    push(eventsRef, eventData);
}

// Funktion: Event bearbeiten/aktualisieren
export function updateEvent(id, eventData){
    const eventRef = ref(db, 'events/' + id);
    set(eventRef, eventData);
}

// Funktion: Event löschen
export function deleteEvent(id){
    const eventRef = ref(db, 'events/' + id);
    remove(eventRef);
}

// Funktion: Alle Events laden und Callback aufrufen
export function loadEvents(callback){
    const eventsRef = ref(db, 'events');
    onValue(eventsRef, (snapshot)=>{
        const events = [];
        snapshot.forEach(childSnap=>{
            events.push({id: childSnap.key, ...childSnap.val()});
        });
        callback(events);
    });
}
