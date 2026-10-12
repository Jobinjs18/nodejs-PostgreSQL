
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

export const DatabaseConnection = async () => {
    try {
        const connectionPool = new Pool({
            connectionString: process.env.POSTGRESQL,
            ssl: {
                rejectUnauthorized: false
            }
        });

        const client = await connectionPool.connect();

        console.log("PostgreSQL Connected Successfully!");

        client.release();

        return connectionPool;

    } catch (error) {
        console.error(
            'Database Connection Failed:',
            error.message
        );
        throw error;
    }
};
