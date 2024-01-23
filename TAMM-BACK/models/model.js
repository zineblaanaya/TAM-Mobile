const { supabase } = require("../db/supabase")

const userModel = {
  createUser: async (userData) => {
    try {
      // Utilisation de Supabase pour insérer les données de l'utilisateur dans la table "user"
      const { data, error } = await supabase.from('user').insert([userData]);

      if (error) {
        // Gérer les erreurs liées à l'insertion dans la base de données
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        throw error;
      }

      // En cas de succès, la fonction peut retourner les données résultantes, si nécessaire
      return data;
    } catch (error) {
      // Gérer les erreurs générales
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      throw error;
    }
  },

};

module.exports = userModel;
