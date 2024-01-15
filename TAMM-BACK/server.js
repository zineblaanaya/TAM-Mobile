const express = require('express');
const { supabase } = require('./db/supabase');

const app = express();




//ecoute du port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});