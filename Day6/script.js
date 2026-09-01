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


// Get saved products
var savedProducts = localStorage.getItem("products");

if (savedProducts) {
    products = JSON.parse(savedProducts);
}


// ==================== CREATE ====================

function createProduct(name, price, category, quantity) {

    name = name.trim();
    category = category.trim();

    if (name === "" || category === "") {
        console.log("Error: Name and category are required");
        return null;
    }

    if (price <= 0) {
        console.log("Error: Price must be greater than 0");
        return null;
    }

    if (quantity < 0) {
        console.log("Error: Quantity cannot be negative");
        return null;
    }


    var product = {

        id: products.length + 1,

        name: name,

        price: price,

        category: category,

        quantity: quantity

    };


    products.push(product);


    // Save in localStorage

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


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
        console.log("Product not found");
        return null;
    }

    return product;
}


// ==================== UPDATE ====================
function updateProduct(id, name, price, category, quantity) {

    var product = getProductById(id);

    if (!product) {
        return null;
    }

    if (name.trim() !== "") {
        product.name = name.trim();
    }

    if (price > 0) {
        product.price = price;
    }

    if (category.trim() !== "") {
        product.category = category.trim();
    }

    if (quantity >= 0) {
        product.quantity = quantity;
    }

    // Save changes
    localStorage.setItem("products", JSON.stringify(products));

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

    // Save after delete
    saveProducts();

    return deletedProduct;
}


// ==================== SAVE ====================

function saveProducts() {

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
}
//=============================================
function displayProducts() {

    var allProducts = getAllProducts();

    var table = document.getElementById("productTable");

    table.innerHTML = "";

    for (var i = 0; i < allProducts.length; i++) {

        table.innerHTML += `
            <tr>
                <td>${allProducts[i].id}</td>
                <td>${allProducts[i].name}</td>
                <td>${allProducts[i].price}</td>
                <td>${allProducts[i].category}</td>
                <td>${allProducts[i].quantity}</td>

                <td>
                    <button 
                        class="edit" 
                        data-id="${allProducts[i].id}">
                        Edit
                    </button>

                    <button 
                        class="delete" 
                        data-id="${allProducts[i].id}">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }

    addEditEvents();
    addDeleteEvents();
}


// ==================== EDIT ====================

function addEditEvents() {

    var edit = document.getElementsByClassName("edit");

    for (var i = 0; i < edit.length; i++) {

        edit[i].addEventListener("click", function () {

            var id = this.getAttribute("data-id");

            window.location.href = `edit.html?id=${id}`;

        });
    }
}


// ==================== DELETE ====================

function addDeleteEvents() {

    var deleteButtons = document.getElementsByClassName("delete");

    for (var i = 0; i < deleteButtons.length; i++) {

        deleteButtons[i].addEventListener("click", function () {

            var id = Number(this.getAttribute("data-id"));

            var deletedProduct = deleteProduct(id);

            if (deletedProduct) {

                alert("Product deleted successfully");

                displayProducts();
            }

        });
    }
}




window.onload = function () {

    displayProducts();

};

//==================Add============
document.getElementById("addBtn").addEventListener("click", function () {

    window.location.href = "add.html";

});