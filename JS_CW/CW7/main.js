let text = document.getElementById('text')

text.style.fontStyle = 'italic';
text.style.textDecoration = 'underline';

for (let i = 1; i <= 10; i++) {
    text.style.fontSize = i * 10 + 'px'
    console.log('Размер текста:', text.style.fontSize)
  }