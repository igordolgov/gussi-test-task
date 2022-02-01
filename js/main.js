$(document).ready(function() { // После загрузки страницы
    // АККОРДЕОН (РАСКРЫВАЮЩИЙСЯ СПИСОК)
    $('.js-accordion-header').on('click', function() { // При клике на "+"
        $(this).parent().toggleClass('is-open'); // Переключить класс
        $(this).siblings('.js-accordion-body').slideToggle(300); // Анимация
    });

    // СЧЁТЧИК
    $('.js-counter .js-counter-plus').on('click', function() { // При клике на "+"
        $(this).siblings('.js-counter-text').text(parseInt($(this).siblings('.js-counter-text').text()) + 1); // Увеличить значение счётчика на 1
        if ($(this).siblings('.js-counter-minus').hasClass('disabled')) { // Удалить класс "неактивно" у элемента "-"
            $(this).siblings('.js-counter-minus').removeClass('disabled');
        }
    });

    $('.js-counter .js-counter-minus').on('click', function() { // При клике на "-"
        if (!$(this).hasClass('disabled') && parseInt($(this).siblings('.js-counter-text').text()) > 1) { // Если счетчик больше 1, удалить класс "неактивно"
            $(this).siblings('.js-counter-text').text(parseInt($(this).siblings('.js-counter-text').text()) - 1); // Уменьшить значение счётчика на 1
            if (parseInt($(this).siblings('.js-counter-text').text()) <= 1) {
                $(this).addClass('disabled'); // Если счетчик меньше или равен 1, добавить класс "неактивно"
            }
        }
    });

    // $(window).resize(function() {
    //     setBgImages();
    // });
    // setBgImages();
});