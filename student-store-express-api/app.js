const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
//const { NotFoundError } = require("./utils/errors");
const storeRouter = require("./routes/store");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/store", storeRouter);

app.get("/", (req, res) => {
    res.send({ ping: "pong" });
    res.sendStatus(200);
});

/* Handle all 404 errors that weren't matched by a route */
//app.use((req, res, next) => {
//    return next(new NotFoundError());
//});

/* Generic error handler - anything that is unhandled will be handled here 
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message;

    return res.status(status).json({
        error: { message, status },
    });
});
*/
module.exports = app;