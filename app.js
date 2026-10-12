import express from 'express';
import dotenv from 'dotenv';
import { DatabaseConnection } from './src/config/database.js';
import productRouter from './src/routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json());

DatabaseConnection();


// Api

app.use('/api', productRouter)

app.get('/test', (req, res) => {
    try {

        res.status(200).json({
            status: true,
            message: "Test Successfully Completed"
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
            resposne: error.message
        })
    }
})


export default app;