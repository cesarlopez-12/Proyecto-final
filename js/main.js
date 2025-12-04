function iniciarSesion() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // Validar campos vacíos
    if (usuario === "" || password === "") {
        alert("Por favor ingresa usuario y contraseña.");
        return;
    }

    // Guardar sesión en localStorage
    localStorage.setItem("sesionActiva", "true");
    localStorage.setItem("usuarioActivo", usuario);

    // Alerta de éxito
    alert("Inicio de sesión exitoso ✔");

    // Redirigir a la página principal
    window.location.href = "index.html";
}
