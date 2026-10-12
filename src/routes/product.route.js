import { Router } from "express";
import { createProductController, getProductsController } from "../controllers/product.controller.js";


const productRouter = Router();

productRouter.post('/create', createProductController);


productRouter.get('/get-product', getProductsController)

export default productRouter;