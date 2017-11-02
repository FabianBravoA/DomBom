window.onload = function() {
    var input = window.document.getElementById("ingresa");
    input.onkeypress = function() {
        var text = input.value;
        //Javascript es maldito y no quizo == o ===
        if (isNaN(parseInt(text))) {
            var pAlert = document.createElement("p");
            pAlert.innerText = "No es un número";
            var inputDiv = document.getElementById("inputDiv");
            inputDiv.appendChild(pAlert);
        } else {
            console.log("Es un número");
        }
    }
}