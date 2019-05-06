const ProductDao = require("../dao/productDao");
const ControllerCommon = require("../common/controllerCommon")

const Product = require("../model/product");

class ProductController {
    constructor() {
        this.productDao = new ProductDao();
        this.common = new ControllerCommon();
    }
    findAll(res) {
        this.productDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
    findOne(req, res) {
        let id = req.params.id;
        this.productDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    findByName(req, res) {
        let name = req.params.name;
        this.productDao.findByName(name)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    create(req, res) {
        let product = new Product();

        product.id = req.body.id;
        product.category = req.body.category;
        product.name = req.body.name;
        product.price = req.body.price;


        return this.productDao.create(product)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };
    update(req, res) {
        let product = new Product();

        product.id = req.body.id;
        product.category = req.body.category;
        product.name = req.body.name;
        product.price = req.body.price;


        return this.productDao.update(product)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };
    findOne(req, res) {
        let id = req.params.id;

        this.productDao.findOne(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.findError(res));
    };
    deleteById(req, res) {
        let id = req.params.id;

        this.productDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = ProductController;