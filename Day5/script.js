var products = [
    {
        id: 1,
        name: "Laptop",
        price: 18500,
        category: "Electronics",
        quantity: 4
    },

    {
        id: 2,
        name: "Mouse",
        price: 180,
        category: "Electronics",
        quantity: 25
    },

    {
        id: 3,
        name: "Notebook",
        price: 35,
        category: "Stationery",
        quantity: 100
    },

    {
        id: 4,
        name: "Desk Lamp",
        price: 420,
        category: "Home",
        quantity: 0
    }
];


// ==================== CREATE ====================

function createProduct(name, price, category, quantity) {

    name = name.trim();
    category = category.trim();

    if (name === "" || quantity==="") {
        console.log("Error: Name and quantaty is required");
        return;
    }

    if (price <= 0) {
        console.log("Error: Price must be greater than 0");
        return;
    }

    if (quantity < 0) {
        console.log("Error: Quantity cannot be negative");
        return;
    }

    var product = {
        id: products.length + 1,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };

    products.push(product);

    return product;
}


// ==================== READ ALL ====================

function getAllProducts() {

    console.table(products);

    return products;
}


// ==================== READ ONE ====================

function getProductById(id) {

    var product = products.find(function (p) {
        return p.id == id;
    });

    if (!product) {
        console.log("Error: Product not found");
        return null;
    }

    return product;
}


// ==================== UPDATE ====================

function updateProduct(id, name, price, category, quantity) {

    var index = products.findIndex(function (p) {
        return p.id == id;
    });

    if (index === -1) {
        console.log("Error: Product not found");
        return null;
    }

    var product = products[index];

    if (name !== undefined && name.trim() !== "") {
        product.name = name.trim();
    }

    if (price !== undefined && price > 0) {
        product.price = price;
    }

    if (category !== undefined && category.trim() !== "") {
        product.category = category.trim();
    }

    if (quantity !== undefined && quantity >= 0) {
        product.quantity = quantity;
    }

    return product;
}


// ==================== DELETE ====================

function deleteProduct(id) {

    var index = products.findIndex(function (p) {
        return p.id == id;
    });

    if (index === -1) {
        console.log("Error: Product not found");
        return null;
    }

    var confirmed = window.confirm(
        "Delete product with id = " + id + "?"
    );

    if (!confirmed) {
        return null;
    }

    var deletedProduct = products[index];

    products.splice(index, 1);

    return deletedProduct;
}
// ====================Filter ====================
function filterProducts(keyword) {
    var result = products.filter(function (product) {

        var search = keyword.trim().toLowerCase();

        return product.name.toLowerCase().includes(search) ||
               product.category.toLowerCase().includes(search);
    });

    return result;
}
 //====================startApp ====================
function startApp() {

    var choice = Number(window.prompt(`
===== NTI Mini Store =====

1) Add product
2) Show all products
3) Show product by ID
4) Update product
5) Delete product
6) Search / Filter
0) Exit
`));
var result;

if(!choice)
{return null;}


    if (choice >= 0 && choice <= 6) {
        switch (choice) {
            case 0:
                break;
            case 1:
               result= createProduct("chair",500,"farniture",4);
                break;
            case 2:
                result= getAllProducts();
                break;
            case 3:
                result= getProductById(2);
                break;
            case 4:
                result= updateProduct(1,"HeadPhone",180,"Electronics",6);
                break;
            case 5:
                result= deleteProduct(1)
                break;
            case 6:
               result= filterProducts("Mouse");
                break;
           
        }

        console.log(result);
    }

    else
        console.log(`Entered number(${choice}) not in the list!`);
        


}

startApp();