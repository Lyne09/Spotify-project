const Song = require('../models/song.model');

// Ajouter une chanson
const createSong = async (req, res) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de la chanson', error: error.message });
  }
};

// Obtenir toutes les chansons
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des chansons', error: error.message });
  }
};

// Obtenir une chanson par ID
const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Chanson non trouvée' });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la chanson', error: error.message });
  }
};

// Mettre à jour une chanson
const updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!song) {
      return res.status(404).json({ message: 'Chanson non trouvée' });
    }

    res.json(song);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour', error: error.message });
  }
};

// Supprimer une chanson
const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Chanson non trouvée' });
    }
    res.json({ message: 'Chanson supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error: error.message });
  }
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong
};
