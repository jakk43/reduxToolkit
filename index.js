const express = require('express');
const app = express()
const cors = require('cors');
require('dotenv').config()

console.log(process.env.NAME || "NO NAME FOUND!");

app.use(cors());



app.listen('3001', () => console.log('Listening on port 3001'))