// Espera a que el contenido del documento esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
  
  // Obtiene referencias a los elementos del DOM por su ID
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');

  // Función para verificar si los campos de usuario y contraseña están completos
  function checkInputs() {
    // Obtiene y limpia los valores de los campos de entrada
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Verifica si ambos campos están completos
    if (usernameValue !== '' && passwordValue !== '') {
      // Habilita los botones y aplica un estilo activo
      loginBtn.classList.add('active');
      registerBtn.classList.add('active');
      loginBtn.removeAttribute('disabled');
      registerBtn.removeAttribute('disabled');
    } else {
      // Deshabilita los botones y quita el estilo activo
      loginBtn.classList.remove('active');
      registerBtn.classList.remove('active');
      loginBtn.setAttribute('disabled', true);
      registerBtn.setAttribute('disabled', true);
    }
  }

  // Función para redirigir a la página de registro al hacer clic en el botón de "Registrarse"
  function redirectToRegisterPage() {
    // Redirige a la página de register.html
    window.location.href = 'register.html';
  }

  // Agrega escuchadores de eventos para los cambios en los campos de entrada
  usernameInput.addEventListener('input', checkInputs);
  passwordInput.addEventListener('input', checkInputs);

  // Agrega un escuchador de eventos para el clic en el botón de "Registrarse"
  registerBtn.addEventListener('click', redirectToRegisterPage);
});