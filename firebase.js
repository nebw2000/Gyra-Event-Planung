// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Event-Funktionen
export const saveEvent = (eventData) => {
    const eventsRef = ref(db, 'events');
    return push(eventsRef, eventData);
};

export const updateEvent = (id, eventData) => {
    const eventsRef = ref(db, 'events/' + id);
    return set(eventsRef, eventData);
};

export const deleteEvent = (id) => {
    const eventsRef = ref(db, 'events/' + id);
    return remove(eventsRef);
};

export const loadEvents = (callback) => {
    const eventsRef = ref(db, 'events');
    onValue(eventsRef, snapshot => {
        const data = [];
        snapshot.forEach(childSnap => {
            data.push({ id: childSnap.key, ...childSnap.val() });
        });
        callback(data);
    });
};
