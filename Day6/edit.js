document.addEventListener("DOMContentLoaded", function () {

    // Get id from URL
    var params = new URLSearchParams(window.location.search);

    var id = Number(params.get("id"));

    console.log("Product ID:", id);

   
    var product = getProductById(id);

    console.log("Product:", product);


    
    if (product) {

        document.getElementById("productId").value = product.id;

        document.getElementById("productName").value = product.name;

        document.getElementById("productPrice").value = product.price;

        document.getElementById("productCategory").value = product.category;

        document.getElementById("productQuantity").value = product.quantity;

    }
    else {

        alert("Product not found");

        window.location.href = "index.html";

        return;
    }


    
    document.getElementById("updateBtn").addEventListener("click", function () {

        var name = document.getElementById("productName").value;

        var price = Number(
            document.getElementById("productPrice").value
        );

        var category = document.getElementById("productCategory").value;

        var quantity = Number(
            document.getElementById("productQuantity").value
        );


        updateProduct(
            id,
            name,
            price,
            category,
            quantity
        );


        alert("Product updated successfully");

        window.location.href = "index.html";

    });

});