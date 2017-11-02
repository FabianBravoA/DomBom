window.onload = function() {
    var input = window.document.getElementById("ingresa");
    input.onkeyup = function() {
        var text = input.value;
        //Javascript es maldito y no quizo == o ===
        if (isNaN(parseInt(text))) {
            var pAlert = document.createElement("p");
            pAlert.id = "alerta";
            pAlert.innerText = "No es un número";

            //Checkear que sea el unico "alerta"
            var inputDiv = document.getElementById("inputDiv");
            var posibleAlert = document.getElementById("alerta");
            if (posibleAlert) {
                inputDiv.removeChild(posibleAlert);
            }
            inputDiv.appendChild(pAlert);
        } else {
            //Checkear que sea el unico "alerta"
            var inputDiv = document.getElementById("inputDiv");
            var posibleAlert = document.getElementById("alerta");
            if (posibleAlert) {
                inputDiv.removeChild(posibleAlert);
            }
        }
    }
}