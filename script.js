function validateForm() {
	var name = document.forms["checkout-form"]["name"].value;
	var address = document.forms["checkout-form"]["address"].value;
	var phone = document.forms["checkout-form"]["phone"].value;
	if (name == "") {
		alert("Please enter your name");
		return false;
	}
	if (address == "") {
		alert("Please enter your address");
		return false;
	}
	if (phone == "") {
		alert("Please enter your phone number");
		return false;
	}
}
