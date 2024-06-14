document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const errorDiv = document.getElementById('error');
    const passwordMismatchDiv = document.getElementById('passwordMismatch');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('RegisterLogin').value;
            const password = document.getElementById('RegisterPassword').value;
            const confirmPassword = document.getElementById('ConfirmPassword').value;
            const email = document.getElementById('RegisterEmail').value;
            const dob = document.getElementById('RegisterDOB').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;

            // Clear previous messages
            passwordMismatchDiv.textContent = '';
            errorDiv.textContent = '';

            if (password !== confirmPassword) {
                passwordMismatchDiv.textContent = 'Пароли не совпадают.';
                return;
            }

            if (localStorage.getItem(username)) {
                errorDiv.textContent = 'Пользователь с таким именем уже существует.';
            } else {
                const user = { username, password, email, dob, gender };
                localStorage.setItem(username, JSON.stringify(user));
                alert('Регистрация выполнена!');
                window.location.href = 'index.html';
            }
        });

        const passwordInput = document.getElementById('RegisterPassword');
        const confirmPasswordInput = document.getElementById('ConfirmPassword');

        // Adding event listener to check passwords match as user types
        confirmPasswordInput.addEventListener('input', () => {
            if (passwordInput.value !== confirmPasswordInput.value) {
                passwordMismatchDiv.textContent = 'Пароли не совпадают.';
            } else {
                passwordMismatchDiv.textContent = '';
            }
        });

        passwordInput.addEventListener('input', () => {
            if (passwordInput.value !== confirmPasswordInput.value) {
                passwordMismatchDiv.textContent = 'Пароли не совпадают.';
            } else {
                passwordMismatchDiv.textContent = '';
            }
        });
    }

    const loginButton = document.getElementById('btn');
    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            const username = document.getElementById('Login').value;
            const password = document.getElementById('Password').value;
            const storedUser = localStorage.getItem(username);

            if (storedUser) {
                const user = JSON.parse(storedUser);
                if (user.password === password) {
                    window.location.href = 'menu.html';
                } else {
                    document.getElementById('error').textContent = 'Неверное имя пользователя или пароль';
                }
            } else {
                document.getElementById('error').textContent = 'Пользователь не найден';
            }
        });
    }
});
