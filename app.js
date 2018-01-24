function onIngresaKeyUp() {
    var text = ingresa.value;
    //Javascript es maldito y no quizo == o ===
    if (isNaN(parseInt(text))) {
        console.log("Holi, no es un número");
    } else {
        console.log("Holi, es un número");
    }
}

function onButtonMouseOver(event) {
    console.log("Evento 1 > " + JSON.stringify(event));
    console.log("Click X : " + event.clientX + " Click Y : " + event.clientY);
    let button = event.target;
    button.style.backgroundColor = 'teal';
}

function onButtonMouseOver2(event) {
    console.log("Evento 2 > " + JSON.stringify(event));
    let button = event.target;
    button.style.borderColor = "purple";
}

window.onload = function() {
    console.log("Cargó la página...");
    let botonFeo = document.getElementById("feo");
    botonFeo.addEventListener("mouseover", onButtonMouseOver2, true);
    botonFeo.addEventListener("mouseover", onButtonMouseOver, false);
}