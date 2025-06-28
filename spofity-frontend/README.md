🎵 Spotify-Like App – Projet de Rattrapage M1
Ce projet est une application complète de type Spotify développée dans le cadre du rattrapage M1, combinant une API backend Node.js, une interface frontend Angular 19, une base de données MongoDB, et un tableau de bord Power BI.

✅ Objectif du projet
Créer une plateforme musicale permettant :

D’ajouter, modifier et supprimer des chansons

D’afficher les chansons avec leurs détails (titre, artiste, genre…)

D’interagir avec une base de données MongoDB

De visualiser des statistiques musicales avec Power BI

🛠️ Technologies utilisées
Backend
Node.js

Express.js

MongoDB (avec Mongoose)

Postman (tests des endpoints)

Frontend
Angular 19 (sans Bootstrap)

Angular Material pour l'UI (optionnel selon tes composants)

BI & Analyse
Power BI (visualisation des titres, genres, artistes...)

📁 Structure du projet
bash
Copier
Modifier
/backend          → Code Node.js + Express
/frontend         → Application Angular 19
/database         → MongoDB hébergée en local
/BI               → Fichier Power BI (dashboard)
🚀 Fonctionnalités
🎧 Gestion des chansons
Ajout de chansons avec formulaire

Suppression par ID

Modification avec formulaire pré-rempli

Visualisation en liste

📊 Business Intelligence (BI)
Analyse des genres les plus populaires

Top 5 des artistes

Nombres de chansons par artistes 

Données visualisées avec des graphiques dans Power BI

⚙️ Installation
1. Cloner le projet
bash
Copier
Modifier
git clone https://github.com/Lyne09/Spotify-project.git
cd spotify-project
2. Lancer le backend
bash
Copier
Modifier
cd spotify-backend
npm install
npm start
Le backend sera accessible sur http://localhost:3000.

3. Lancer le frontend
bash
Copier
Modifier
cd spofity-frontend
npm install
ng serve
L’interface Angular s’affiche sur http://localhost:4200.

📬 Tests avec Postman
Les opérations CRUD (GET, POST, PUT, DELETE) ont été testées via Postman. Voici quelques exemples :

GET /api/songs

POST /api/songs

PUT /api/songs/:id

DELETE /api/songs/:id

📈 Dashboard Power BI
Le fichier Power BI inclut plusieurs visualisations :

Histogrammes

Diagrammes circulaires

Graphiques en barres regroupées
Ces analyses permettent de mieux comprendre les tendances musicales de la base de données.

☁️ Hébergement (théorique)
Une réflexion théorique sur un déploiement cloud (ex. : AWS EC2 + MongoDB Atlas) est incluse dans le rapport. Le projet n’a pas été hébergé mais un plan d’hébergement a été proposé dans la documentation.

📋 Auteur
Projet réalisé par Lyna Ait Braham dans le cadre du rattrapage M1 (juin 2025).