const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

const connectionPool = mysql.createPool({
  host: 'my-rds-instance.c2ab8htr9r15.us-east-1.rds.amazonaws.com',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
  connectionLimit: 10
});

app.get('/backend', async (req, res) => {
  try {
    const [rows] = await connectionPool.query('SELECT * FROM mytable');
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error retrieving data from database');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
