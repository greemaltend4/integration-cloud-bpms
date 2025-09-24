const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue dans le serveur d'intégration Cloud pour BPMS !');
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});