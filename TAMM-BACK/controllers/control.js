const express = require('express')
const userModel = require("../models/model")


const userController = {
    signup: async (req, res) => {
      try {
        const { firstName, lastName, email, password, confirmationPassword } = req.body;
        
  
        // Validation : Vérifiez si le mot de passe correspond à la confirmation du mot de passe
        if (password !== confirmationPassword) {
          return res.status(400).json({ success: false, message: 'Le mot de passe et la confirmation ne correspondent pas' });
        }
  
        // Logique d'inscription dans le modèle (en utilisant Supabase)
        const userData = { firstName, lastName, email, password };
        await userModel.createUser(userData);
  
        res.json({ success: true, message: 'Inscription réussie' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Erreur lors de l\'inscription' });
      }
    },
  
    // Ajoutez d'autres méthodes de contrôleur ici, par exemple, pour la connexion.
  };

  module.exports = userController;

// exports.patate = (req,res) => {
//     res.send('patated')
// };
// exports.tomate = (req,res) => {
//     res.send('tomatec')
// };

// exports.nomfonction = (req,res) => {
//     res.send('affichédansladb')
// };