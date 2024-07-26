document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Alternar entre formulários
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            if (targetTab === 'login') {
                loginFormContainer.classList.add('active');
                registerFormContainer.classList.remove('active');
                this.classList.add('active');
                document.querySelector('.tab-button[data-tab="register"]').classList.remove('active');
            } else if (targetTab === 'register') {
                registerFormContainer.classList.add('active');
                loginFormContainer.classList.remove('active');
                this.classList.add('active');
                document.querySelector('.tab-button[data-tab="login"]').classList.remove('active');
            }
        });
    });

    // Processar o formulário de login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const twoFactor = document.getElementById('login-two-factor').checked;

        if (username && password) {
            console.log('Usuário:', username);
            console.log('Senha:', password);
            console.log('Autenticação de Dois Fatores:', twoFactor ? 'Ativada' : 'Desativada');

            // Simulação de login bem-sucedido
            alert('Login bem-sucedido!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Processar o formulário de registro
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        if (username && email && password) {
            console.log('Usuário:', username);
            console.log('E-mail:', email);
            console.log('Senha:', password);

            // Simulação de registro bem-sucedido
            alert('Registro bem-sucedido!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
