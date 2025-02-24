$(document).ready(function () {


  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999-99-99",
  });
  $(".touch-form").validate({
    errorPlacement: function (error, element) {},
  });
  $(".contact-form").validate({
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

  $(".project-info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".project-info-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".project-info-slider-wrap .slider-navigation .slick-next"),
  });


document.querySelectorAll(".mtc-banner .img, .stickermania-banner .img, .monopoly-banner .img").forEach(image => {
  // Создаём плавные анимированные свойства
  let smoothX = gsap.quickTo(image, "x", { duration: 1, ease: "power2.out" });
  let smoothY = gsap.quickTo(image, "y", { duration: 1, ease: "power2.out" });

  image.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = image.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      const maxMove = 50; // Насколько далеко элемент может "убегать"
      const moveX = (deltaX / distance) * maxMove;
      const moveY = (deltaY / distance) * maxMove;

      // Плавное движение к нужной точке
      smoothX(moveX);
      smoothY(moveY);
  });

  image.addEventListener("mouseleave", () => {
      // Возвращаемся в центр плавно
      smoothX(0);
      smoothY(0);
  });
});



  $(".merch-slider-wrap").each(function () {
    const $wrap = $(this); // Контейнер слайдера
    const $slider = $wrap.find(".merch-slider"); // Сам слайдер
    const $counter = $wrap.find(".slider-counter"); // Счетчик
  
    // Инициализация слайдера
    $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
      const current = (currentSlide ? currentSlide : 0) + 1;
      $counter.text(`${current} / ${slick.slideCount}`);
    });
  
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: $wrap.find(".slick-prev"),
      nextArrow: $wrap.find(".slick-next"),
    });
  });


  $(".header .border-btn").smoothScroll({
    speed: 1200,
  });

  $(".objectives-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".objectives-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".objectives-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });

  

  $(".other-projects-slider").slick({
    slidesToShow: 2,
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
          autoplaySpeed: 2000,
          speed: 1000,
          cssEase: "ease",
        },
      },
    ],
  });
  


  $(".recording-btn").on("click", function() {
    $(this).hide();
    
    let video = $(this).closest(".video").find("video");
    
    video.addClass("show");  // Добавляем класс
    video[0].play();         // Запускаем видео через JS

    $(this).closest(".video").find(".image").addClass("hide");
});

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".style", {
    rotation: 360, // Один полный оборот
    scrollTrigger: {
      trigger: ".style", // Триггер — элемент с классом .style
      start: "top bottom", // Начало анимации
      end: "bottom top", // Конец анимации
      scrub: true, // Анимация синхронизируется с прокруткой
      onUpdate: (self) => {
        const direction = self.direction; // Определяем направление (1 — вниз, -1 — вверх)
        const rotate = direction === 1 ? "+=5" : "-=5"; // Меняем вращение
        gsap.to(".style", { rotation: rotate, duration: 0.5 });
      },
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  function initAnimations() {
    // Удаляем все ScrollTrigger
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  
    // Если ширина больше 1024px — запускаем анимацию
    if (window.innerWidth > 1024) {
      gsap.to(".trused-img1", {
        y: -200,
        scrollTrigger: {
          trigger: ".trused-img1",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
  
      gsap.to(".trused-img2", {
        y: 150,
        scrollTrigger: {
          trigger: ".trused-img2",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }
  
  // Инициализация при загрузке
  initAnimations();
  
  // Повторная проверка при изменении размеров окна
  window.addEventListener("resize", initAnimations);

  if (window.innerWidth > 767) {
    gsap.to(".sticker-img1", {
      y: -100,
      scrollTrigger: {
        trigger: ".sticker-img1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  
    gsap.to(".sticker-img2", {
      x: 100,
      scrollTrigger: {
        trigger: ".sticker-img2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  
    gsap.to(".sticker-img3", {
      x: -100,
      scrollTrigger: {
        trigger: ".sticker-img3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  
    gsap.to(".main-info .img2", {
      x: 50,
      scrollTrigger: {
        trigger: ".main-info .img2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  
    gsap.to(".main-info .img3", {
      x: -50,
      scrollTrigger: {
        trigger: ".main-info .img3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }
  

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

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $(".header-info").toggleClass("no-radius");
    $("body, html").toggleClass("overflow");
  });

  $(".drop-item").click(function () {
    $(this).closest("li").find(".sub-menu").toggleClass("show");
    $(this).find("img").toggleClass("rotate");
  });

  $(".cases .tags button").click(function () {
    $(".cases .tags button").removeClass("active");
    $(this).addClass("active");
  });

  $(".cases .tab-content .border-btn").click(function () {
    $(".cases .cases-items .main-info").removeClass("hide");
  });

  $(".tab-content").hide();
  $('.tab-content[data-tab="tab1"]').addClass("active").show();
  $('.tab-button[data-tab="tab1"]').addClass("active");

  // Обработка кликов по кнопкам
  $(".tab-button").on("click", function () {
    const target = $(this).data("tab");

    // Убрать активные классы и скрыть все вкладки
    $(".tab-button, .tab-content").removeClass("active");
    $(".tab-content").hide();

    // Показать активную вкладку
    $(this).addClass("active");
    $(`.tab-content[data-tab="${target}"]`).addClass("active").show();
  });




  $(".tags button").on("click", function(){
    $(this).closest(".wrapper").find(".tabs").show();
    $(this).closest(".wrapper").find(".top .tab-buttons").show();
    $(".merch-info-block").removeClass("show");
  })
  $(".tags .content").on("click", function(){
    $(this).closest(".wrapper").find(".tabs").hide();
    $(this).closest(".wrapper").find(".top .tab-buttons").hide();
    $(".merch-info-block").addClass("show");
  })

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".essence-info .img-wrap img").forEach((img) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: "top bottom", // Начало анимации, когда элемент появляется внизу экрана
        end: "bottom top",   // Конец анимации, когда элемент уходит вверх
        scrub: true,         // Плавная анимация при скролле
      },
      rotateY: -60,          // Поворот по горизонтали
      rotateX: -5,         // Поворот по вертикали
      translateZ: 100,       // Двигаем изображение вперёд
      ease: "none"
    });
  });

  if (window.innerWidth > 767) {
    gsap.to(".left-img", {
        y: 150, 
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".information-block",
            start: "top bottom", 
            end: "bottom top",
            scrub: true 
        }
    });

    gsap.to(".right-img", {
        y: -150, 
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".information-block",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}


});
