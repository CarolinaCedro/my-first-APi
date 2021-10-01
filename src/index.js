//Get => Buscar uma informação dentro do servidor....

//Post => Insire um informação no servidor...

//Put => Alterar uma informação no servidor...

//Patch => Alterar uma informação especifica...

//DELETE => deleta uma informação no servidor...

const express = require('express');

const app = express();

app.get('/courses', (request, response) => {
  return response.json([
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    'Course 5',
  ]);
});

app.post('/courses', (request, response) => {
  return response.json(
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    'Course 5',
    'Course 6',
    'Course 7',
  );
});

app.patch('/courses', (request, response) => {
  return response.json(
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    'Course 5',
    'Course 9',
    'Course 7',
  );
});

app.put('/courses/:id', (request, response) => {
  return response.json('Course 1', 'Course 1', 'Course 1', 'Course 1');
});

app.delete('/courses/:id', (request, response) => {
  return response.json("'Course 1','Course 1','Course 1','Course 1'");
});

app.listen(3333);
