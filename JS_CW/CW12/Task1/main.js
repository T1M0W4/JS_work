document.addEventListener('DOMContentLoaded', function() {
    // Находим форму и список сообщений
    let messageForm = document.getElementById('messageForm');
    let messageList = document.getElementById('messageList');

    // Обработчик отправки формы
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Получаем значения полей формы
        let username = document.getElementById('username').value;
        let message = document.getElementById('message').value;

        // Создаем новый элемент списка для нового сообщения
        let li = document.createElement('li');
        let currentDate = new Date();
        li.innerHTML = `
            <div class="message-header">${username}</div>
            <div>${message}</div>
            <div class="message-date">${currentDate.toLocaleString()}</div>
        `;

        // Добавляем новое сообщение в список
        messageList.appendChild(li);

        // Очищаем поля формы после отправки сообщения
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    });
});