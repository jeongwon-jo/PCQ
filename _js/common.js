$(function () {
	/* Nice Select */
	$(".nice-select").niceSelect();

	/* Datepicker */
  $(".datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
  });

  $('nav.gnb li.gnb_li').mouseover(function () {
    $(this).children('ul.lnb_ul').stop().slideDown()
  }).mouseout(function () {
    $(this).children('ul.lnb_ul').stop().slideUp()
  })

  $('.header .btn_mo_menu').click(function () {
    if ($(this).hasClass('active')) {
      // 열려있는 상태
      const top = $("body").css("top").replace("px", "");
      const topNum = (Number(-top));

      $("body.fixed").css("top", `0px`);
      $("body.fixed").css("position", "static");
      $(window).scrollTop(topNum);
      $("body").removeClass("fixed");
    } else {
      // 닫혀있는 상태
      $("body").addClass("fixed");
      const pageY = window.scrollY;
      $("body.fixed").css("position", "fixed");
      $("body.fixed").css("left", "0");
      $("body.fixed").css("top", `${(-(pageY))}px`);
    }
    
    $(this).toggleClass('active')
    $('.mobile_sidebar').toggleClass('open')
  })

  $('.left_navbar .lnb_li .btn_open').click(function () {
    $('.left_navbar .lnb_li .btn_open').not($(this)).removeClass('active')
    $('.left_navbar .lnb_li .depth_2_ul').not($(this).siblings()).removeClass('open')
    $(this).toggleClass('active')
    $(this).siblings().toggleClass('open')
  })

  $('nav.m_sidebar .sidebar_ul>li>a').click(function () {
    $('nav.m_sidebar .sidebar_2depth').not($(this).siblings()).slideUp()
    $(this).siblings('.sidebar_2depth').slideToggle()
  })

  $(".scroll_top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 800);
  });
})

// 반응형 resize
$(window).on("resize", function () {
  let width = $(window).width();

  if (width > 1200) {
    if ($('.header .btn_mo_menu').hasClass('active')) {
      const top = $("body").css("top").replace("px", "");
      const topNum = (Number(-top));

      $("body.fixed").css("top", `0px`);
      $("body.fixed").css("position", "static");
      $(window).scrollTop(topNum);
      $("body").removeClass("fixed");

      $('.header .btn_mo_menu').toggleClass('active')
      $('.mobile_sidebar').toggleClass('open')
    }
  }
});


// ====== Modal 공통
function openModal(id) {
  $("#" + id).addClass('open');
  $("body").addClass("fixed");
  const pageY = window.scrollY;
  $("body.fixed").css("position", "fixed");
  $("body.fixed").css("left", "0");
  $("body.fixed").css("top", `${(-(pageY))}px`);
}

function closeModal(id) {
  $("#" + id).removeClass('open')
  const top = $("body").css("top").replace("px", "");
  const topNum = (Number(-top));

  $("body.fixed").css("top", `0px`);
  $("body.fixed").css("position", "static");
  $(window).scrollTop(topNum);
  $("body").removeClass("fixed");
}

function closeAllModal() {
  $(".modal").removeClass('open')
  const top = $("body").css("top").replace("px", "");
  const topNum = (Number(-top));

  $("body.fixed").css("top", `0px`);
  $("body.fixed").css("position", "static");
  $(window).scrollTop(topNum);
  $("body").removeClass("fixed");
}

$(document).keydown(function (event) {
  if (event.keyCode == 27 || event.which == 27) {
    $(".modal").removeClass('open')

    const top = $("body").css("top").replace("px", "");
    const topNum = (Number(-top));

    $("body.fixed").css("top", `0px`);
    $("body.fixed").css("position", "static");
    $(window).scrollTop(topNum);
    $("body").removeClass("fixed");
  }
});