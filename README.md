# 📍 findYourWay

findYourWay est une **plateforme web interactive** qui recense toutes les **églises de France** sur une carte, avec un système d’avis, un forum communautaire et un calendrier d’événements.
L’objectif est de permettre à chacun de **trouver, découvrir, partager et interagir** autour des lieux de culte — le tout dans une expérience moderne et communautaire.

🚀 **Hébergement prévu :** Google Cloud
🌐 **Domaine :** findyourway.com

---

## 📌 Fonctionnalités principales

✅ Carte interactive affichant les églises géolocalisées
✅ Fiches détaillées (nom, adresse, confession, horaires, contact, site web)
✅ Système d’authentification sécurisé
✅ Avis et notes des utilisateurs
✅ Filtrage des églises par critères (branche, localisation, note…)
✅ Forum communautaire pour échanger, poser des questions ou discuter
✅ Calendrier pour événements partagés par les églises (cultes, rencontres, concerts…)

---

## 🧠 Objectifs du projet

findYourWay est conçu pour :

* 🌍 **Faciliter la découverte** d’églises partout en France
* 🤝 **Créer un espace communautaire** chrétien interactif
* 💬 **Favoriser les échanges, les partages d’expériences et de questions de foi**
* 📅 **Mettre en avant les événements locaux** pour mieux connecter les paroisses et les visiteurs

Ce projet est open source pour encourager les **contributions, améliorations et extensions**, tout en offrant un code clair et bien structuré.

---

## 🧱 Architecture & Stack technique

| Couche                   | Technologie                    |
| ------------------------ | ------------------------------ |
| Frontend                 | **React.js**                   |
| Cartographie interactive | **Leaflet.js** (OpenStreetMap) |
| Backend                  | **Node.js + Express**          |
| Base de données          | **SQL** (MySQL / PostgreSQL)   |
| Authentification         | JWT / Sessions                 |
| Hébergement              | **Google Cloud Platform**      |
| API                      | RESTful API                    |

✅ Le choix de React garantit une **interface réactive et modulable**
✅ Leaflet permet une **carte interactive performante et open source**
✅ Node.js/Express facilite le **développement des API backend**
✅ SQL permet une **structure relationnelle robuste** des données

---

## 🧾 Installation locale

### 🛠 Prérequis

Assurez-vous d’avoir installé :

* Node.js (v14+)
* NPM ou Yarn
* SQL (MySQL ou PostgreSQL)
* Git

---

### 🔽 Cloner le dépôt

```bash
git clone https://github.com/TON-UTILISATEUR/findYourWay.git
cd findYourWay
```

---

### 📦 Backend

```bash
cd backend
npm install
```

Créez un fichier `.env` :

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=ton_mot_de_passe
DB_NAME=findyourway
JWT_SECRET=une_phrase_secrete
```

Démarrer le serveur :

```bash
npm start
```

---

### 🧠 Frontend

```bash
cd ../frontend
npm install
npm start
```

Le frontend s’exécutera par défaut sur : **[http://localhost:3000](http://localhost:3000)**

---

## 🗄️ Structure du projet

```
findYourWay/
├─ backend/
│   ├─ src/
│   │   ├─ controllers/
│   │   ├─ models/
│   │   ├─ routes/
│   │   ├─ middlewares/
│   │   └─ app.js
│   ├─ .env
│   └─ package.json
├─ frontend/
│   ├─ public/
│   ├─ src/
│   │   ├─ components/
│   │   ├─ pages/
│   │   ├─ services/
│   │   ├─ App.js
│   │   └─ index.js
│   └─ package.json
├─ README.md
└─ LICENSE
```

---

## 📜 API documentation (exemples)

### 🔹 Utilisateurs

| Route        | Méthode | Description |
| ------------ | ------- | ----------- |
| /auth/signup | POST    | Inscription |
| /auth/login  | POST    | Connexion   |
| /auth/logout | POST    | Déconnexion |

---

### 🔹 Églises

| Route        | Méthode | Description               |
| ------------ | ------- | ------------------------- |
| /eglises     | GET     | Liste des églises         |
| /eglises/:id | GET     | Détails d’une église      |
| /eglises     | POST    | Ajouter une église (auth) |
| /eglises/:id | PUT     | Mettre à jour (auth)      |

---

### 🔹 Avis

| Route             | Méthode | Description            |
| ----------------- | ------- | ---------------------- |
| /eglises/:id/avis | GET     | Liste des avis         |
| /eglises/:id/avis | POST    | Ajouter un avis (auth) |

---

### 🔹 Forum

| Route              | Méthode | Description        |
| ------------------ | ------- | ------------------ |
| /forum             | GET     | Liste des sujets   |
| /forum/:id         | GET     | Détail sujet       |
| /forum             | POST    | Créer sujet (auth) |
| /forum/:id/comment | POST    | Commentaire (auth) |

---

## 🛠 Standards & bonnes pratiques

✅ Conventions de nommage claires
✅ Routes RESTful
✅ Gestion des erreurs centralisée
✅ Tests unitaires et d’intégration à venir
✅ Validation des données côté backend et frontend

---

## 🤝 Contribution

Tu veux contribuer ? Merci !
Voici comment :

1. Fork le dépôt
2. Crée une branche (`feature/mon-ajout`)
3. Commit ton code (`git commit`)
4. Push sur ta branche
5. Ouvre une Pull Request

➡ Précise dans ta PR :
✔ description claire
✔ issue associée (le cas échéant)
✔ captures d’écran ou tests

---

## 📜 Licence

Ce projet est publié sous la **licence MIT** — consulte le fichier `LICENSE` pour plus de détails.

---

## 📬 Contact

Pour toute question ou suggestion, tu peux :

✅ ouvrir une issue
✅ participer au forum interne
✅ me contacter directement via GitHub

---

🎉 Merci d’être intéressé par **findYourWay** — que ce projet serve une communauté large et bienveillante !
