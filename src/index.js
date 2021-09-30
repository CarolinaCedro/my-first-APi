//Get => Buscar uma informação dentro do servidor....

//Post => Insire um informação no servidor...

//Put => Alterar uma informação no servidor...

//Patch => Alterar uma informação especifica...

//DELETE => deleta uma informação no servidor...

const express = require('express');

const app = express();

app.get('/courses', (request, response) => {
  return response.json([
    'O Poderoso Chefão. 2h 55min / Policial, Drama',
    'A Lista de Schindler. 3h 15min / Histórico, Guerra',
    'Um Sonho de Liberdade. 2h 20min / Drama. ...',
    'O Rei Leão. 1h 29min / Aventura, Animação, Musical. ...',
    'Forrest Gump - O Contador de Histórias. ...',
    'O Senhor dos Anéis - O Retorno do Rei. ...',
    ' Vingadores: Ultimato...',
    'À Espera de um Milagre.',
    'Matrix - / Ação / 1h 29min',
  ]);
});

app.listen(3333);
