/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Каждая мечта тебе даётся вместе с силами, необходимыми для её осуществления. Однако тебе, придётся для этого потрудиться')
})