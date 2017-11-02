window.onload = function() {
    var input = window.document.getElementById("ingresa");
    input.onkeypress = function() {
        console.log("Me cambiaron > " + input.value);
    }
}