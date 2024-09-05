const { pool } = require('../config/dbConfig');

async function contact(firstName, email, phoneNumber, message) {
  try {
    const connection = await pool.getConnection();
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const [rows, fields] = await connection.execute(
      'INSERT INTO contact (firstName, email, phoneNumber, message, createdAt) VALUES (?, ?, ?, ?, ?)',
      [firstName, email, phoneNumber, message, now]
    );
    connection.release();
    console.log('User contact:', rows);
    return { success: true, message: 'User contact successfully' };
  } catch (error) {
    console.error('Error contacting user:', error);
    return { success: false, message: 'Contact failed. Please try again.' };
  }
}

module.exports = {
  contact
};
