// server/controllers/registerController.js

const { pool } = require('../config/dbConfig');

async function registerUser(firstName, lastName, email, phoneNumber, address, city, postcode, country,password, regionState) {
  try {
    const connection = await pool.getConnection();
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const [rows, fields] = await connection.execute(
      'INSERT INTO userrgister (firstName, lastName, email, phoneNumber, address, city, postcode, country,password, regionState, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, email, phoneNumber, address, city, postcode, country, password,regionState, now]
    );
    connection.release();
    console.log('User registered:', rows);
    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, message: 'Registration failed. Please try again.' };
  }
}

module.exports = {
  registerUser
};
