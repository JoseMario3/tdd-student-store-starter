const { storage } = require("../data/storage");

class Store {
    //List all products currently in the db.json file
    static async listProducts() {
        const products = storage.get("products").value();
        return products;
    }

    //List all purchases currently in the db.json file
    static async listPurchases() {
        const purchases = storage.get("purchases").value();
        return purchases;
    }

    //Fetch a single product by its id
    static async singleProduct(productId) {
        const product = storage
            .get("products")
            .find({ id: Number(productId) })
            .value();
        return product;
    }

    //Create a purchase order
    static async purchaseOrder(purchase) {
        if (!purchase) {
            throw new Error("No purchase sent");
        }

        const requiredFields = ["description", "category", "amount"];

        requiredFields.forEach((field) => {
            if (!purchase[field] && purchase[field] !== 0) {
                throw new Error("Field: " + { field } + " is required in purchase");
            }
        });

        const purchases = await Store.listPurchases();
        const purchaseId = purchases.length + 1;
        const postedAt = new Date().toISOString();

        const newPurchase = { id: purchaseId, postedAt, ...purchase };

        storage.get("purchases").push(newPurchase).write();

        return newPurchase;
    }
}

module.exports = Store;