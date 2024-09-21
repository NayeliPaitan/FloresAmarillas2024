document.getElementById('welcomeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    const name = document.getElementById('name').value;
    localStorage.setItem('userName', name); // Almacena el nombre en localStorage
    window.location.href = 'bienvenida/inicio.html'; // Redirige a gato.html
});
