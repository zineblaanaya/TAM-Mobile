const express = require('express');
const { supabase } = require('./db/supabase');
const routes = require('./routes/route');


const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})



//ecoute du port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

app.use(routes);