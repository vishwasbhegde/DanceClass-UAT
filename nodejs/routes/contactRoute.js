const express = require('express');
const { contact } = require('../controllers/contactController');

const router = express.Router();

// Route to handle user registration
router.post('/', async (req, res) => {
  const { firstName,  email, phoneNumber, message,  } = req.body;

  const result = await contact(firstName,  email, phoneNumber, message,);

  if (result.success) {
    res.status(201).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
});

module.exports = router;