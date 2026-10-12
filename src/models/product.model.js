import { getPool } from "../config/connection.pool.js";

export const createProductTable = async () => {
    const pool = await getPool();

    await pool.query(`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(150) NOT NULL,
            description TEXT,
            price NUMERIC(10, 2) NOT NULL,
            quantity INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);

    console.log('Products table created successfully!');
};
