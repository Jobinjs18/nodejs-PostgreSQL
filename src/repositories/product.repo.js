import { getPool } from "../config/connection.pool.js";

export const createProduct = async (
    name,
    description,
    price,
    quantity
) => {
    const pool = await getPool();

    const result = await pool.query(
        `INSERT INTO products
         (name, description, price, quantity)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [name, description, price, quantity]
    );

    return result.rows[0];
};

export const getProducts = async () => {
    const pool = await getPool();

    const result = await pool.query(
        'SELECT * FROM products ORDER BY id DESC'
    );

    return result.rows;
};
