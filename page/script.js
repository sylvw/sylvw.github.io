window.onload = function () {
	var iframeWin = document.getElementById("da-iframe").contentWindow,
		form = document.getElementById("the-form"),
		myMessage = document.getElementById("my-message");

	myMessage.select();
	let para = document.createElement("script");
	para.innerHTML = 'document.domain="sylvw.github.io"';
	form.onsubmit = function () {
		iframeWin.postMessage(document.querySelector("head").appendChild(para), '*');
		return false;
	};
};



