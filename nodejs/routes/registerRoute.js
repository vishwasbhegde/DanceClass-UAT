// server/routes/registerRoute.js

const express = require('express');
const { registerUser } = require('../controllers/registerController');

const router = express.Router();

// Route to handle user registration
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, city, postcode, country,password, regionState } = req.body;

  const result = await registerUser(firstName, lastName, email, phoneNumber, address, city, postcode, country,password, regionState);

  if (result.success) {
    res.status(201).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
});

module.exports = router;
