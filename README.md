# 🎭 Event Planer

Ein modernes Webprojekt zur einfachen Verwaltung von Veranstaltungen mit Echtzeit-Synchronisation über Firebase.

---

## Überblick

Dieses Projekt ermöglicht das Anlegen, Bearbeiten und Löschen von Events verschiedenster Art (Konzerte, Proben, Präsentationen etc.) inklusive Planung der technischen Ausstattung und der zugeordneten Orte. Die Anwendung bietet eine klare Benutzeroberfläche mit Rollen-Login (Admin und Lehrer) und synchronisiert alle Daten direkt mit der Firebase Realtime Database.

---

## Highlights

- Benutzerfreundliche Rollen-Authentifizierung  
- Echtzeit-Event-Übersicht mit dynamischen Cards  
- Umfangreiche Ressourcenverwaltung (Mikrofone, Beamer, Instrumente, Publikumsbereiche)  
- Intuitive Event-Erstellung und -Bearbeitung via Formular  
- Visuelle Toast-Nachrichten für Aktionen  
- Modernes, responsives Design mit klarer Farbsprache  
- Vollständig modulare JavaScript-Architektur mit ES6 Modulen  
- Firebase als Backend für einfache Skalierung und Datenhaltung  

---

## Technologie-Stack

| Bereich     | Technologie                      |
|-------------|--------------------------------|
| Frontend    | HTML5, CSS3, JavaScript (ES6)  |
| Backend     | Firebase Realtime Database      |
| Authentifizierung | Rollenbasiert, lokal (Demo)   |
| Hosting     | Statischer Webserver (z.B. Live Server) |

---

## Projektstruktur

event-planer/

├── index.html        # Hauptseite mit Event-Übersicht und Login

├── css/│

    └── index.css     # Styling und Layout
    
├── js/│ 

    └── index.js      # Geschäftslogik, Firebase-Anbindung
    
├── firebase.js       # Firebase Initialisierung und Exporte

├── firebase-config.js# Firebase Konfiguration (API Keys)

└── README.md         # Dieses Dokument
---

## Design & Usability

Das visuelle Design verbindet ein dezentes Farbkonzept aus Blau- und Grautönen mit klaren Card-Elementen für eine übersichtliche Darstellung. Interaktive Elemente wie Buttons und Formulare sind prominent und intuitiv ausgelegt, unterstützt durch kurze Animationen und Snackbar-Meldungen.

---

## Nutzungshinweise

Der Demo-Login unterscheidet zwischen Admin und Lehrer, jeweils mit festgelegten Zugangsdaten (bitte für den produktiven Einsatz durch Firebase Auth ersetzen). Die Datenbankregeln sind aktuell offen gestaltet für einfache Nutzung.

---

## Danksagung

Ein großes Dankeschön an Firebase für die unkomplizierte und leistungsstarke Datenlösung sowie an die Open-Source-Community für Tools und Inspiration.

---

🚀 Viel Spaß mit dem Event Planer!  
**Made with ❤️ in Hamburg**
