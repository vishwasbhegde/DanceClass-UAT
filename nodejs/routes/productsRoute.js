const express = require('express');
const router = express.Router();
const { pool } = require('../config/dbConfig');

// Define the route to get products
router.get('/product', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.execute('SELECT * FROM product');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch product.' });
  }
});
router.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM product WHERE id = ?', [id]);
    connection.release();
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
