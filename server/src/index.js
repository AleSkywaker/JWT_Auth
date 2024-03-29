require('dotenv/config');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { verify } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');

// 1. Register user
// 2. Login a user
// 3. logout a user
// 4. setup a protected route
// 5. get a new accessToken with a refresh token

const server = express();

// Use express middleware for easier cookie handling
server.use(cookieParser());

server.use(
  cors({
    origin: 'http:/localhost:3000',
    credentials: true
  })
);

// Needed to be able to read body data
server.use(express.json()); // to support JSON-encoded bodies
server.use(express.urlencoded({ extended: true })); // support URL-encoded bodies

server.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en puerto ${process.env.PORT}`);
});
