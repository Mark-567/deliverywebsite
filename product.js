var quantityInput = document.getElementById("quantity");
var addToCartButton = document.querySelector("button");

addToCartButton.addEventListener("click", addToCart);

function addToCart() {
	var quantity = parseInt(quantityInput.value);
	alert("Added " + quantity + " item(s) to your cart.");
}
