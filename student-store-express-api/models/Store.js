const { storage } = require("../data/storage");
const { BadRequestError } = require("../utils/Error");

class Store {
    //List all products currently in the db.json file
    static listProducts() {
        const products = storage.get("products").value();
        return products;
    }

    //List all purchases currently in the db.json file
    static listPurchases() {
        const purchases = storage.get("purchases").value();
        return purchases;
    }

    //Fetch a single product by its id
    static singleProduct(productId) {
        const product = storage
            .get("products")
            .find({ id: Number(productId) })
            .value();
        return product;
    }

    //Fetch the price of a single product by its id
    static singleProductPrice(productId) {
        const price = storage
            .get("products")
            .find({ id: Number(productId) })
            .get("price")
            .value();
        return price;
    }

    //Create a purchase order
    static purchaseOrder(purchase) {
        console.log("purchase", purchase);

        if (!purchase) {
            throw new Error("No purchase sent");
        }

        let subTotal = 0;
        let total = 0;
        let user = purchase.user;
        let shoppingCart = purchase.shoppingCart;
        const requiredFields = ["user", "shoppingCart"];
        const requiredFields2ElectricBoogaloo = ["name", "email"];
        const requiredFields3TheSqueakquel = ["itemId", "quantity"];

        requiredFields.forEach((field) => {
            if (!purchase[field] && purchase[field] !== 0) {
                throw new BadRequestError(
                    "Field: " + { field } + " is required in purchase"
                );
            }
        });

        requiredFields2ElectricBoogaloo.forEach((field) => {
            if (!user[field] && user[field] == "") {
                throw new BadRequestError(
                    "User field: " + field + " is required in purchase"
                );
            }
        });

        for (let i = 0; i < shoppingCart.length; i++) {
            requiredFields3TheSqueakquel.forEach((field) => {
                if (!shoppingCart[i][field] && shoppingCart[i][field] !== 0) {
                    throw new BadRequestError(
                        "Shopping Cart field: " + { field } + " is required in purchase"
                    );
                }
            });

            let unitPrice = Store.singleProductPrice(shoppingCart[i].itemId);
            let subPrice = unitPrice * shoppingCart[i].quantity;
            subTotal += subPrice;
        }

        total = subTotal + subTotal * 0.0875;

        const purchases = Store.listPurchases();
        const purchaseId = purchases.length + 1;
        const createdAt = new Date().toISOString();

        const newPurchase = {
            id: purchaseId,
            createdAt: createdAt,
            name: user.name,
            email: user.email,
            total: total.toFixed(2),
            order: purchase.shoppingCart,
        };

        storage.get("purchases").push(newPurchase).write();
        shoppingCart = [];
        return newPurchase;
    }
}

module.exports = Store;