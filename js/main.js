(function ($) {
  "use strict";

  // ── Loader ──────────────────────────────────────
  setTimeout(function () {
    $('#loader').removeClass('show');
  }, 350);

  // ── WOW animations ──────────────────────────────
  new WOW().init();

  // ── Back to top ─────────────────────────────────
  $(window).on('scroll.btt', function () {
    if ($(this).scrollTop() > 200) {
      $('#backToTop').addClass('show').css('display', 'flex');
    } else {
      $('#backToTop').removeClass('show').hide();
    }
  });

  $('#backToTop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 700, 'easeInOutExpo');
  });

  // ── Sticky navbar ───────────────────────────────
  $(window).on('scroll.nav', function () {
    if ($(this).scrollTop() > 40) {
      $('#mainNav').addClass('nav-sticky');
    } else {
      $('#mainNav').removeClass('nav-sticky');
    }
  });

  // ── Smooth scroll ───────────────────────────────
  $('a[href^="#"]').on('click', function (e) {
    var target = this.hash;
    if (target && $(target).length) {
      e.preventDefault();
      $('html, body').animate(
        { scrollTop: $(target).offset().top - 72 },
        700, 'easeInOutExpo'
      );
      // Close mobile menu
      $('#navCollapse').collapse('hide');
    }
  });

  // ── Active nav link on scroll ───────────────────
  var sections = $('section[id], footer[id]');
  $(window).on('scroll.spy', function () {
    var scrollPos = $(this).scrollTop() + 100;
    sections.each(function () {
      if (scrollPos >= $(this).offset().top && scrollPos < $(this).offset().top + $(this).outerHeight()) {
        $('#mainNav .nav-link').removeClass('active');
        $('#mainNav a[href="#' + this.id + '"]').addClass('active');
      }
    });
  });

  // ── Typed.js ────────────────────────────────────
  if ($('.hero-role').length && $('.typed-strings').length) {
    var strings = $('.typed-strings').text().split(', ');
    new Typed('.hero-role', {
      strings: strings,
      typeSpeed: 75,
      backSpeed: 35,
      backDelay: 2400,
      startDelay: 600,
      smartBackspace: false,
      loop: true,
    });
  }

})(jQuery);
