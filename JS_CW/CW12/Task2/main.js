document.addEventListener('DOMContentLoaded', function() {
    // Находим элементы теста и результатов
    let test = document.querySelector('.container');
    let results = document.getElementById('results');

    // Находим все вопросы теста
    let questions = test.querySelectorAll('.question');

    // Обработчик нажатия кнопки "Завершить тест"
    document.getElementById('submit').addEventListener('click', function() {
        let score = 0; // Переменная для хранения количества правильных ответов

        // Перебираем каждый вопрос теста
        questions.forEach(function(question) {
            let selectedAnswer = question.querySelector('input[type="radio"]:checked');

            // Если ответ выбран и он правильный, увеличиваем счетчик правильных ответов
            if (selectedAnswer && selectedAnswer.value === 'correct') {
                score++;
            }
        });

        // Показываем результаты теста
        showResults(score);
    });

    // Функция для отображения результатов теста
    function showResults(score) {
        // Скрываем тест и показываем результаты
        test.style.display = '';
        results.style.display = 'block';

        // Выводим количество правильных ответов
        document.getElementById('score').textContent = score;
    }
});