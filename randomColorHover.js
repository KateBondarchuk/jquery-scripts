// скрипт для рандомного цвета фона при наведении на элемент.

$('.box').hover(function() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' // создаем переменную color и присваиваем ей случайное значение цвета
	+ (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';
	$(this).css("background-color", color); // задаем цвет фона при наведении мыши на элемент.
}, function() {
	$(this).css("background-color", color); // задаем цвет фона при уведении мыши с элемента.
});