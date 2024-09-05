const express = require('express');
const { loginUser } = require('../controllers/loginController');

const router = express.Router();

// Route to handle user login
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    const result = await loginUser( email, password);

  if (result.success) {
    res.status(201).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
});

module.exports = router;