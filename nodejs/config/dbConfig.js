// server/app.js

const express = require('express');
const mysql = require('mysql2/promise');
const registerRoute = require('./routes/registerRoute');

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
const app = express();
const cors = require('cors');
app.use(cors());

// const registerRoute = require('./routes/registerRoute');

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




app.get('/users/register-users', async (req, res) => {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    const [rows, fields] = await connection.query('INSERT INTO `users` (`id`, `user_name`, `user_email`, `user_password`, `user_login`, `user_url`, `user_registered`, `user_status`) VALUES (NULL, "vishwas", "email@gmail.com", "asdasd", "uname", "ss.com", current_timestamp(), "active");');
    // Query the database
  // INSERT INTO `users` (`id`, `user_name`, `user_email`, `user_password`, `user_login`, `user_url`, `user_registered`, `user_status`) VALUES (NULL, 'vishwas', 'email@gmail.com', 'asdasd', 'uname', 'ss.com', current_timestamp(), 'active');

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


// Start the server
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('log 1');