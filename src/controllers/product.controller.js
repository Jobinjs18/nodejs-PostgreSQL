import { createProduct, getProducts } from "../repositories/product.repo.js";


export const createProductController = async (req, res) => {
    try {

        const { name, description, price, quantity } = req.body;

        const product = await createProduct(
            name,
            description,
            price,
            quantity
        );

        res.status(201).json({
            status: true,
            message: "Product Created Successfully",
            data: product
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "internal Server Error",
            response: error.message
        })
    }
}
export const getProductsController = async(req, res) => {
    try {

        const productData = await getProducts();

        res.status(200).json({
            status: true,
            message: "Get Product Successfully Completed",
            data: productData
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "internal Server Error",
            response: error.message
        })
    }
}