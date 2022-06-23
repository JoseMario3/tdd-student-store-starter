const express = require("express");
const Store = require("../models/Store");
const router = express.Router();

//list all products
router.get("/", async(req, res, next) => {
    try {
        const products = await Store.listProducts();
        res.status(200).json({ products });
    } catch (error) {
        next(error);
    }
});

//list all purchases
router.get("/purchases", async(req, res, next) => {
    try {
        const purchases = await Store.listPurchases();
        res.status(200).json({ purchases });
    } catch (error) {
        next(error);
    }
});

//fetch a single product by its Id
router.get("/:productId", async(req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await Store.singleProduct(productId);
        if (!product) {
            throw new Error("Product not found");
        }
        res.status(200).json({ product });
    } catch (error) {
        next(error);
    }
});

//create new purchase
router.post("/", async(req, res, next) => {
    try {
        const purchase = req.body.purchase;
        const newPurchase = await Store.purchaseOrder(purchase);
        res.status(201).json({ purchase: newPurchase });
    } catch (error) {
        next(error);
    }
});

module.exports = router;