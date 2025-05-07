document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let mensajeDiv = document.getElementById("mensajeConfirmacion");
    mensajeDiv.style.display = "block";
    mensajeDiv.textContent = "Enviando mensaje...";
    mensajeDiv.className = "info";

    fetch("https://formspree.io/f/xyzweyyy", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error en la respuesta del servidor");
        }
    })
    .then(data => {
        mensajeDiv.textContent = "✅ Mensaje enviado correctamente. ¡Gracias!";
        mensajeDiv.className = "success";
        event.target.reset(); 
    })
    .catch(error => {
        console.error("Error:", error);
        mensajeDiv.textContent = "❌ El mensaje se envió, pero hubo un problema con la confirmación. Si no recibes respuesta, por favor contáctanos por otro medio.";
        mensajeDiv.className = "warning"; 
    });
});