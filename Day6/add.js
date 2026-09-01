document.getElementById("addProductBtn").addEventListener("click", function () {

    var name = document.getElementById("productName").value;

    var price = Number(
        document.getElementById("productPrice").value
    );

    var category = document.getElementById("productCategory").value;

    var quantity = Number(
        document.getElementById("productQuantity").value
    );


    

    if (name.trim() === "") {
        alert("Product name is required");
        return;
    }

    if (price <= 0) {
        alert("Price must be greater than 0");
        return;
    }

    if (category.trim() === "") {
        alert("Category is required");
        return;
    }

    if (quantity < 0) {
        alert("Quantity cannot be negative");
        return;
    }


   
    

    var product = createProduct(
        name,
        price,
        category,
        quantity
    );


    if (product) {

        alert("Product added successfully");

        window.location.href = "index.html";

    }

});