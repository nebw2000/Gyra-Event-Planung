// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXX4CwnX_eRiKBURJeORfGoYI0k0hdHkA",
  authDomain: "event-plan-c4b36.firebaseapp.com",
  databaseURL: "https://event-plan-c4b36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "event-plan-c4b36",
  storageBucket: "event-plan-c4b36.appspot.com",
  messagingSenderId: "489710650124",
  appId: "1:489710650124:web:6a515ffd6ec3d9983aff29"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Login
const loginBtn = document.getElementById('loginBtn');
const loginContainer = document.getElementById('loginContainer');
const mainContainer = document.getElementById('mainContainer');

loginBtn.addEventListener('click', () => {
    const user = document.getElementById('userSelect').value;
    const password = document.getElementById('password').value;
    if((user==='admin' && password==='2309')||(user==='teacher' && password==='event')){
        loginContainer.style.display = 'none';
        mainContainer.style.display = 'block';
        loadEvents();
    } else {
        alert('Falsches Passwort');
    }
});

// Event hinzufügen toggle
const addEventBtn = document.getElementById('addEventBtn');
const addEventForm = document.getElementById('addEventForm');
addEventBtn.addEventListener('click', () => {
    addEventForm.style.display = addEventForm.style.display==='none'?'block':'none';
});

// Home Button
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
    addEventForm.style.display = 'none';
    loadEvents();
});

// Toast Funktion
function showToast(msg){
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.style.display='block';
    setTimeout(()=>{toast.style.display='none';},3000);
}

// Events laden
const eventsContainer = document.getElementById('eventsContainer');
function loadEvents(){
    eventsContainer.innerHTML='';
    const eventsRef = ref(db, 'events');
    onValue(eventsRef, (snapshot)=>{
        eventsContainer.innerHTML='';
        snapshot.forEach((childSnap)=>{
            const data = childSnap.val();
            const id = childSnap.key;
            const card = document.createElement('div');
            card.className='card';
            card.innerHTML = `<h3>${data.name}</h3>
                <p><strong>Leiter:</strong> ${data.leader}</p>
                <p><strong>Typ:</strong> ${data.type}</p>
                <p><strong>Ort:</strong> ${data.location}</p>
                <p><strong>Mikros:</strong> ${data.mic}</p>
                <p><strong>Gesangsmikros:</strong> ${data.vocals}</p>
                <p><strong>Rednerpult:</strong> ${data.podium}</p>
                <p><strong>Beamer:</strong> ${data.beamer}</p>
                <p><strong>Keyboards:</strong> ${data.keyboard}</p>
                <p><strong>Gitarren:</strong> ${data.guitar}</p>
                <p><strong>Kommentar:</strong> ${data.comments}</p>
                <p><strong>Datum:</strong> ${data.date}</p>
                <button onclick="editEvent('${id}')">Bearbeiten</button>
                <button onclick="deleteEvent('${id}')">Löschen</button>`;
            eventsContainer.appendChild(card);
        });
    });
}

// Event löschen
window.deleteEvent = function(id){
    if(confirm('Event wirklich löschen?')){
        remove(ref(db, 'events/'+id));
    }
}

// Event bearbeiten
window.editEvent = function(id){
    const eventsRef = ref(db,'events/'+id);
    onValue(eventsRef, (snapshot)=>{
        const data = snapshot.val();
        addEventForm.style.display='block';
        document.getElementById('name').value=data.name;
        document.getElementById('leader').value=data.leader;
        document.getElementById('type').value=data.type;
        document.getElementById('location').value=data.location;
        document.getElementById('mic').value=data.mic;
        document.getElementById('vocals').value=data.vocals;
        document.getElementById('podium').value=data.podium;
        document.getElementById('beamer').value=data.beamer;
        document.getElementById('keyboard').value=data.keyboard;
        document.getElementById('guitar').value=data.guitar;
        document.getElementById('comments').value=data.comments;
        document.getElementById('eventDate').value=data.date;

        saveEventBtn.onclick = ()=>{
            set(eventsRef,{
                name: document.getElementById('name').value,
                leader: document.getElementById('leader').value,
                type: document.getElementById('type').value,
                location: document.getElementById('location').value,
                mic: document.getElementById('mic').value,
                vocals: document.getElementById('vocals').value,
                podium: document.getElementById('podium').value,
                beamer: document.getElementById('beamer').value,
                keyboard: document.getElementById('keyboard').value,
                guitar: document.getElementById('guitar').value,
                comments: document.getElementById('comments').value,
                date: document.getElementById('eventDate').value
            });
            addEventForm.reset();
            addEventForm.style.display='none';
            showToast('Event aktualisiert!');
            saveEventBtn.onclick = saveNewEvent;
            loadEvents(); // nach Bearbeitung Übersicht zeigen
        };
    });
}

// Neues Event speichern
function saveNewEvent(){
    const eventData = {
        name: document.getElementById('name').value,
        leader: document.getElementById('leader').value,
        type: document.getElementById('type').value,
        location: document.getElementById('location').value,
        mic: document.getElementById('mic').value,
        vocals: document.getElementById('vocals').value,
        podium: document.getElementById('podium').value,
        beamer: document.getElementById('beamer').value,
        keyboard: document.getElementById('keyboard').value,
        guitar: document.getElementById('guitar').value,
        comments: document.getElementById('comments').value,
        date: document.getElementById('eventDate').value
    };
    const eventsRef = ref(db, 'events');
    push(eventsRef, eventData);
    addEventForm.reset();
    addEventForm.style.display='none';
    showToast('Event gespeichert!');
    loadEvents(); // nach Speichern Übersicht anzeigen
}

const saveEventBtn = document.getElementById('saveEvent');
saveEventBtn.onclick = saveNewEvent;