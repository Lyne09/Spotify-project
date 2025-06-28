const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(express.json());

// Importation des routes
const songRoutes = require('./routes/song.routes');

// Utilisation des routes
app.use('/api/songs', songRoutes);

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/spotify_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connecté !');
  app.listen(3000, () => {
    console.log('🚀 Serveur démarré sur le port 3000');
  });
})
.catch(err => console.error('❌ Erreur de connexion MongoDB :', err));
