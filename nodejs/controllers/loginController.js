
const { pool } = require('../config/dbConfig');

async function loginUser(email, password) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      'SELECT CASE WHEN EXISTS (SELECT 1 FROM userrgister WHERE email = ? AND password = ?) THEN "Match found" ELSE "No match found" END AS result',
      [email, password]
    );
    connection.release();

    if (rows.length > 0 && rows[0].result === "Match found") {
      console.log('User logged in:', rows);
      return { success: true, message: 'User logged in successfully' };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    return { success: false, message: 'Login failed. Please try again.' };
  }
}

module.exports = {
  loginUser
};
