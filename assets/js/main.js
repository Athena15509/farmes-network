$(document).ready(function () {
  // Загрузочный экран ~ минимум 1 секунда анимации
  setTimeout(function () {
    // Не позволяем пользователю листать страницу в момент прогрузки сайта
    const body = $('.body-page');
    body.css("overflow", "hidden");

    // Передаём класс
    const preloader = $('.preloader');

    // Убираем загрузочный экран по прошествии одной секунды
    if (!preloader.hasClass('done')) {
      preloader.addClass('done');
      body.css("overflow", "");

      // Анимации появления элементов шапки
      $('h1').toggleClass('_active');
      $('.header span').toggleClass('_active');
    }
  }, 1000);

  // Bootstrap popover
  $(function () {
    $('[data-bs-toggle="popover"]').popover()
  });


  // Фиксированные элементы

  // Буфер обмена
  copyIP.onclick = () => {
    // Передаём текст в буфер обмена пользователя
    navigator.clipboard.writeText(copyIP.value);
    // Добавляем оповещение
    $('#is-copied-address').toggleClass('done');
    setTimeout(function () {
      $('#is-copied-address').toggleClass('done');
    }, 2000);
  };

  // Якорь
  $(window).scroll(function () {
    const $sections = $('.section, .header');
    $sections.each(function (i, el) {
      let top = $(el).offset().top - 100;
      let bottom = top + $(el).height();
      let scroll = $(window).scrollTop();
      let id = $(el).attr('id');

      if (scroll > top && scroll < bottom) {
        $('.nav-link.active').removeClass('active');
        $('.nav-link[href="#' + id + '"]').addClass('active');
      }

    });

    $(".section").on("click", ".header .nav-link", function (event) {
      // исключаем стандартную реакцию браузера
      event.preventDefault();

      // получем идентификатор блока из атрибута href
      let id = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

      // анимируем переход к блоку, время: 800 мс
      $('body,html').animate({scrollTop: top}, 800);

      // Добавляем active нажатой ссылке
      $('.header .nav-link').on("click", function () {
        $(this).parent('li').siblings().find('.nav-link').removeClass('active');
        $(this).addClass('active');
      });

    });

  });

  // Анимации появления
});
