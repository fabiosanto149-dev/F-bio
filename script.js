//==========================
// REGISTRO
//==========================
const registerForm = document.getElementById('registerform');


if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // salvar no localstorage
        const user = {
            name,
            email,
            password
        };

        localStorage.setItem('user', JSON.stringify(user));

        // redirecionar para a página de login
        window.location.href = 'login.html';
    });
}

//==========================
// LOGIN
//==========================
const loginForm = document.getElementById('loginform');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            alert("nehum usuario cadastrado!");
            return;
        }

        if (email === storedUser.email && password === storedUser.password) {
            alert('Login bem-sucedido!');
            window.location.href = 'index.html';
        } else {
            alert('Email ou senha incorretos!');
        }
    });
}