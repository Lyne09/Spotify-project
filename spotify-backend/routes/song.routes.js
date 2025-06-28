const express = require('express');
const {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong
} = require('../controllers/song.controller');

const router = express.Router();

// Ajouter une chanson
router.post('/', createSong);

// Obtenir toutes les chansons
router.get('/', getAllSongs);

// Obtenir une chanson par son ID
router.get('/:id', getSongById);

// 🔄 Mettre à jour une chanson
router.put('/:id', updateSong);

// Supprimer une chanson par son ID
router.delete('/:id', deleteSong);

module.exports = router;
