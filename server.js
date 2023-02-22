const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
app.use(bodyParser.json()) // for parsing application/json

const port = 3000;

const client = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
client.connect();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sayeed
app.get('/events', async (req, res) => {
  // TODO
  // this endpoint should return all events in the database
});

// Gabby
app.get('/events/:id', async (req, res) => {
  // TODO
  // this endpoint should return an event by its id
});

// Damaris
app.post('/events', async (req, res) => {
  // TODO
  // this endpoint should create a new event in the database
});

// Tameem
app.patch('/events/:id', async (req, res) => {
  // TODO
  // this endpoint should update an event by its id
});

// Tameem
app.get('/users', async (req, res) => {
  // TODO
  // this endpoint should return all users in the database
});

// Damaris
app.get('/users/:id', async (req, res) => {
  // TODO
  // this endpoint should return a user by their id 
});

// Sayeed 
app.post('/users', async (req, res) => {
  // TODO
  // this endpoint should create a new user in the database 
});

// Gabby
app.patch('/users/:id', async (req, res) => {
  // TODO
  // this endpoint should update a user by its id
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
