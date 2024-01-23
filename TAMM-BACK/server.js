const express = require('express');
const bodyParser = require('body-parser');
const { supabase } = require('./db/supabase');
const routes = require('./routes/route');


const app = express();
app.use(bodyParser.json())

app.get('/user', async (req, res) => {
  const { data,error } = await supabase.from("user").select("*") 
  if (error) {
    return res.status(500).json({error: "erreur lors de la récupération des utlisateurs"});
    }
  res.json(data)
});



//ecoute du port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

app.use(routes);