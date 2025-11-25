import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Push Nachricht
function showToast(text) {
    const box = document.getElementById("toast");
    box.innerText = text;
    box.style.display = "block";

    setTimeout(() => {
        box.style.display = "none";
    }, 3000);
}

// ===============================
// Event speichern
// ===============================
async function saveEvent(data) {
    await addDoc(collection(db, "events"), data);
    showToast("Event gespeichert");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 800);
}

// Diese Funktion rufst du in create.html beim Klick auf "Speichern" auf:
window.saveEvent = saveEvent;

// ===============================
// Events laden
// ===============================
async function loadEvents() {
    const list = document.getElementById("event-list");
    if (!list) return;

    const q = query(collection(db, "events"), orderBy("datum", "asc"));
    const result = await getDocs(q);

    list.innerHTML = "";

    result.forEach(doc => {
        const e = doc.data();
        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <b>${e.name}</b><br>
            Datum: ${e.datum}<br>
            Leiter: ${e.leiter}<br>
            Rednerpult: ${e.rednerpult}
        `;

        list.appendChild(card);
    });
}

loadEvents();
