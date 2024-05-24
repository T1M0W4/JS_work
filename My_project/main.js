document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const errorDiv = document.getElementById('error');
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('RegisterLogin').value;
            const password = document.getElementById('RegisterPassword').value;
            const email = document.getElementById('RegisterEmail').value;
            const dob = document.getElementById('RegisterDOB').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;

            if (localStorage.getItem(username)) {
                errorDiv.textContent = 'Пользователь с таким именем уже существует.';
            } else {
                const user = { username, password, email, dob, gender };
                localStorage.setItem(username, JSON.stringify(user));
                alert('Регистрация выполнена!');
                window.location.href = 'index.html';
            }
        });
    }

    document.getElementById('btn').addEventListener('click', function() {
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
});
