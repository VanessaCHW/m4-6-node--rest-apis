'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {getClientList, getClientByID, addClient, deleteClient} = require('./handlers/clientHandlers');
const {getWordByID, getRandomWord, guessLetter} = require('./handlers/hangmanHandlers');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get('/clients', getClientList)
  .get('/client/:id', getClientByID)
  .post('/clients', addClient)
  .delete('/clients', deleteClient)

  .get("/hangman/word/:id", getWordByID)
  .get("/hangman/word",getRandomWord)
  .get("/hangman/guess/:id/:letter",guessLetter)

  .listen(8000, () => console.log(`Listening on port 8000`));
