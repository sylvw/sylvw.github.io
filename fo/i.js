function displayMessage (evt) {
	var message;
	// if (evt.origin !== "https://robertnyman.com") {
	// 	message = "You are not worthy";
	// }
	// else {
	// 	message = "I got " + evt.data + " from " + evt.origin;
	//
    // document.getElementById("received-message").innerHTML = message;
    // let para = document.createElement("script");
    // para.innerHTML = 'document.domain="sylvw.github.io"';
    // document.querySelector("head").appendChild(para);
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", false);
}
else {
	window.attachEvent("onmessage", displayMessage);
}
