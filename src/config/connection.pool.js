import { DatabaseConnection } from "../config/database.js";

let poolPromise;

export const getPool = async () => {
    if (!poolPromise) {
        poolPromise = DatabaseConnection();
    }
    return poolPromise;
};