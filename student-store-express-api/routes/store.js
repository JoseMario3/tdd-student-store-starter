const express = require("express");
const Store = require("../models/Store");
const { NotFoundError } = require("../utils/Error");
const router = express.Router();

//list all products
router.get("/", async(req, res, next) => {
    try {
        const products = await Store.listProducts();
        res.status(200).json({ products });
    } catch (error) {
        throw new NotFoundError("Could not find products");
    }
});

//list all purchases
router.get("/purchases", async(req, res, next) => {
    try {
        const purchases = await Store.listPurchases();
        res.status(200).json({ purchases });
    } catch (error) {
        throw new NotFoundError("Could not find purchases");
    }
});

//fetch a single product by its Id
router.get("/:productId", async(req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await Store.singleProduct(productId);
        if (!product) {
            throw new NotFoundError("Product not found");
        }
        res.status(200).json({ product });
    } catch (error) {
        next(error);
    }
});

//create new purchase
router.post("/", async(req, res, next) => {
    try {
        console.log("req.body", req.body);
        const purchase = req.body;
        const newPurchase = await Store.purchaseOrder(purchase);
        res.status(201).json({ purchase: newPurchase });
    } catch (error) {
        next(error);
    }
});

module.exports = router;