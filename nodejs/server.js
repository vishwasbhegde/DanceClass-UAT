// server/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { createTableIfNotExists } = require('./config/dbConfig');
// const registerRoute = require('./routes/registerRoute');
// const loginUser = require('./routes/loginRoute');
// const contactRoute = require('./routes/contactRoute');
const app = express();
app.use(cors());
const PORT = 6001;
const mysql = require('mysql2/promise');
// Middleware
// app.use(bodyParser.json()); 
// // Parse JSON bodies
// app.use(cors());

// Call the function to create table on server startup
// createTableIfNotExists();

// Route to handle user registration
// app.use('/api/register', registerRoute);
// app.use('/api/login', loginUser);


// app.use('/api/contact', contactRoute);
// const productsRoute = require('./routes/productsRoute'); 
// Update with the correct path to your products route

// app.use('/api', productsRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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

  app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/users/register-users', async (req, res) => {
    console.log('log 2');
    try {
      // Get a connection from the pool
      const connection = await pool.getConnection();
  
      const [rows, fields] = await connection.query('INSERT INTO `users` (`id`, `user_name`, `user_email`, `user_password`, `user_login`, `user_url`, `user_registered`, `user_status`) VALUES (NULL, "vishwas", "email@gmail.com", "asdasd", "uname", "ss.com", current_timestamp(), "active");');
      // Query the database
  
      // Release the connection back to the pool
      connection.release();
      // Send the result as a JSON response
      res.json(rows);
      res.send('User registered');
    } catch (err) {
      // Handle any errors that occur during the query
      console.error('Database error:', err);
      res.status(500).send('Database error');
    }
  });
