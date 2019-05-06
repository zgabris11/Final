const Product = require("../model/product");
const daoCommon = require("../common/daoCommon");

class ProductDao {
    constructor() {
        this.common = new daoCommon();
    }

    findAll() {
        let sqlRequest = "SELECT * FROM product";

        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for(const row of rows) {
                products.push(new Product(
                    row.id,
                    row.category,
                    row.name,
                    row.price
                ));
            }
            return products;
        });
    }
    findByName(id) {
        let sqlRequest = "SELECT * FROM product WHERE id = '" + id + "'";
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for (const row of rows) {
                products.push(new Product(
                    row.id,
                    row.category, 
                    row.name,
                    row.price
                    )
                );
            }
            return products;
        });
    }
    create(Product) {
        let sqlRequest = "INSERT into product (id, category, name, price) " + "VALUES ($id, $category, $name, $price)";

        let sqlParams = {
            $id: Product.id,
            $category: Product.category,
            $name: Product.name,
            $price: Product.price
        };
        return this.common.run(sqlRequest, sqlParams);
    };
    update(Product) {
        let sqlRequest = "UPDATE product SET id=$id, category=$category, name=$name,  price=$price WHERE id=$id";

        let sqlParams = {
            $id: Product.id,
            $category: Product.category,
            $name: Product.name,
            $price: Product.price
        };
        return this.common.run(sqlRequest, sqlParams);
    };
    deleteById(id) {
        let sqlRequest = "DELETE FROM product WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    }
}

module.exports = ProductDao;