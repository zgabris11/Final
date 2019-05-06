const express = require("express");
const router = express.Router();

router.use("/product", require("./productRoutes"));

module.exports = router;