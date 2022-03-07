const express = require('express');

// Créer le server
const server = express();

// Ajout des actions sur les routes
server.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

server.get('/product/:id', (req, res) => {
    res.send(`<h1>Product ${req.params.id}</h1>`);
});

// Demarrer le server
server.listen(3000, () => {
    console.log('Server up on port 3000');
});