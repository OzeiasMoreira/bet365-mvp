document.querySelector('.show-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Esconder';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Mostrar';
    }
});
