window.onload = function() {
    var input = window.document.getElementById("ingresa");
    input.onkeypress = function() {
        var text = input.value;
        //Javascript es maldito y no quizo == o ===
        if (isNaN(parseInt(text))) {
            console.log("No es un número");
        } else {
            console.log("Es un número");
        }
    }
}