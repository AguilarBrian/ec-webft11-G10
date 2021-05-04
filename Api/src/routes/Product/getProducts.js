const server = require("express").Router();


//Retrieves the details of a Product
server.get("/", async (req, res, next) => {
    res.send("ok")
});
module.exports = server;