$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  // Анимация для букв как кубиков
  gsap.fromTo(
    ".animation-text span",
    {
      scale: 0, // Исходный размер (как точка)
      rotateX: 90, // Поворот по X
      opacity: 0, // Полностью невидимо
    },
    {
      scale: 1, // Конечный размер
      rotateX: 0, // Прямое положение
      opacity: 1, // Полностью видно
      duration: 0.8, // Длительность анимации каждой буквы
      ease: "back.out(1.7)", // Эффект "вылета" кубика
      stagger: 0.2, // Задержка между анимацией каждой буквы
      scrollTrigger: {
        trigger: ".animation-text", // Триггер анимации
        start: "top 80%", // Когда начнется анимация
        end: "top 50%", // Когда анимация завершится
        scrub: false, // Не привязывается к скроллу
        once: true, // Анимация выполняется один раз
      },
    }
  );

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });
  $(".touch-form").validate({
    errorPlacement: function (error, element) {},
  });

  $(".our-projects-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
        },
      },
    ],
  });

  $(".digital-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
        },
      },
    ],
  });

  function initializeSliders(selector) {
    $(selector).each(function () {
      $(this).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
              autoplay: true,
            },
          },
        ],
      });
    });
  }

  // Инициализация слайдеров
  $(document).ready(function () {
    initializeSliders(".our-expertise-slider");
  });
});
