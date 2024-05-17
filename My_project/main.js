document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    localStorage.setItem('username', regUsername);
    localStorage.setItem('password', regPassword);

    alert('Регистрация успешна! Теперь вы можете войти.');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'main.html';
    } else {
        document.getElementById('error').textContent = 'Неправильное имя пользователя или пароль';
    }
});