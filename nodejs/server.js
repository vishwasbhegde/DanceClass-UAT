// server/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createTableIfNotExists } = require('./config/dbConfig');
const registerRoute = require('./routes/registerRoute');
const loginUser = require('./routes/loginRoute');
const contactRoute = require('./routes/contactRoute');
const app = express();
const PORT = 3010;

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors());

// Call the function to create table on server startup
// createTableIfNotExists();

// Route to handle user registration
app.use('/api/register', registerRoute);
app.use('/api/login', loginUser);


app.use('/api/contact', contactRoute);
const productsRoute = require('./routes/productsRoute'); // Update with the correct path to your products route

app.use('/api', productsRoute);

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
