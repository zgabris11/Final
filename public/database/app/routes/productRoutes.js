const express = require("express");
const router = express.Router();

const ProductController = require("../controller/productController");
const productController = new ProductController();

router.get("/", function (req, res) {
    productController.findAll(res);
});

router.get("/:id", function (req, res) {
    productController.findOne(req, res);
});

router.get("/name/:category", function (req, res) {
    productController.findByName(req, res);
});

router.post('/create', function (req, res) {
    productController.create(req, res);
});

router.put('/edit/:id', function (req, res) {
    productController.update(req, res);
});
router.delete('/:id', function(req, res) {
    productController.deleteById(req, res);
});

module.exports = router;