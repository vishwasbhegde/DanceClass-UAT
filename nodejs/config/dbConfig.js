// server/app.js

const express = require('express');
const app = express();
const mysql = require('mysql2/promise');
const PORT = 6001;
const cors = require('cors');
app.use(cors());
// const registerRoute = require('./routes/registerRoute');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'reactApp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Initialize the Express application


// const registerRoute = require('./routes/registerRoute');

app.get('/', (req, res) => {
  res.send('Hello, your backend is running!');
});

// Example route to fetch users from the database
app.get('/users/teachersCount', async (req, res) => {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Query the database
    const [rows, fields] = await connection.query('SELECT COUNT(*) as teacherCount FROM users');

    // Release the connection back to the pool
    connection.release();
    // Send the result as a JSON response
    res.json(rows);
  } catch (err) {
    // Handle any errors that occur during the query
    console.error('Database error:', err);
    res.status(500).send('Database error');
  }
});


// insert query







