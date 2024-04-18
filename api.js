document.getElementById('registrocliente').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const valorEnPesos = parseFloat(document.getElementById('value').value);

    try {
        // Realiza una solicitud al API del BCRA para obtener la cotización del dólar
        const response = await fetch('https://api.estadisticasbcra.com/usd', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDMzNzEzOTQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJyYW1vcy5yYW1pcm8uYWxlamFuZHJvQGdtYWkuY29tIn0.VlIvfkEdeNx83OsZzMyE_2qnYmLFkZ8Ae1GEhtvJezB-iMhBhXSeysFZDyFrF-HkNk8oD6jFPnk6M40rSkvRTA' // Reemplaza con tu token real
            }
        });
        const data = await response.json();
        console.log(data[data.length - 1])
        const tasaCambio = data[data.length - 1].v; // Valor de la cotización del dólar

        // Calcula el valor en dólares
        const valorEnDolares = valorEnPesos / tasaCambio;

        // Envía el valor en dólares al servidor o realiza cualquier otra acción necesaria
        console.log(`Valor en dólares: $${valorEnDolares.toFixed(2)}`);
    } catch (error) {
        console.error('Error al obtener la tasa de cambio:', error);
    }
});
