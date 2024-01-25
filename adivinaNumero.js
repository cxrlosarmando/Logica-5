const numeroSecreto = Math.floor(Math.random() * 100) + 1;
function verificarAdivinanza() {
    const respuestaUsuario = document.getElementById("numeroInput").value;
    if (respuestaUsuario === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número.";
    } else {
        const numeroUsuario = parseInt(respuestaUsuario, 10);

        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
            document.getElementById("resultado").innerHTML = "Ingresa un número válido entre 1 y 100.";
        } else {
            if (numeroUsuario === numeroSecreto) {
                document.getElementById("resultado").innerHTML = "¡Correcto! Has adivinado el número.";
            } else {
                const mensaje = numeroUsuario < numeroSecreto ? "Demasiado bajo." : "Demasiado alto.";
                document.getElementById("resultado").innerHTML = mensaje;
            }
        }
    }
}
