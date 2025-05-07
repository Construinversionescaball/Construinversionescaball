// Script para el formulario (ocultando el endpoint de Formspree)
        document.getElementById('miFormulario').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Endpoint oculto de Formspree
            const formspreeEndpoint = atob("https://formspree.io/f/myzwwngb");
            
            fetch(formspreeEndpoint, {
                method: "POST",
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
                    document.getElementById('miFormulario').reset();
                } else {
                    throw new Error('Error en el envío');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Hubo un error al enviar el mensaje. Por favor inténtalo de nuevo más tarde.");
            });
        });
