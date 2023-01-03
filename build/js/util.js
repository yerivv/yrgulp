"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//     const vh = window.innerHeight * 0.01;
// 	document.querySelector('html').style.cssText = '--vh:'+vh+'px';
// });
function setScreenSize() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}

setScreenSize();
window.addEventListener('resize', setScreenSize);

function floatingMore(a) {
  var wrap = a.closest('.floating_btn');
  var text = wrap.querySelector('.more');

  if (wrap.classList.contains('active')) {
    wrap.classList.remove('active');
    text.innerText = '닫기';
  } else {
    wrap.classList.add('active');
    text.innerText = '닫기';
  }
} //accordion


function accordions(a) {
  var wrap = a.closest('.accordion_wrap');
  wrap.childNodes[1].classList.toggle('on');
} //탭구현


var tabInit = function tabInit(a) {
  var tabWrap = document.querySelector(a);
  var tabs = tabWrap.querySelectorAll('.menu_tab li');
  var tabContents = tabWrap.querySelectorAll('.contents_tab .content');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tabWrap.querySelector('#' + tab.dataset.tabTarget);
      tabContents.forEach(function (tabContent) {
        tabContent.classList.remove('active');
      });
      tabs.forEach(function (tab) {
        tab.classList.remove('active');
      });
      target.classList.add('active');
      tab.classList.add('active');
    });
  });
};

function scrollDisable() {
  var body = document.querySelector('body');
  body.classList.add('scrollDisable');
  body.addEventListener('scroll touchmove mousewheel', function (e) {
    e.preventDefault();
  }, false);
}

function scrollAble() {
  var body = document.querySelector('body');
  body.classList.remove('scrollDisable');
  body.removeEventListener('scroll touchmove mousewheel', null);
}

function isModal() {
  var modals = document.querySelectorAll('#modal.open');

  if (modals.length == 0) {
    scrollAble();
  } else {
    body.classList.add('scrollDisable');
  }
}

function modalOpen(a) {
  var target = document.querySelector('.' + a);
  target.classList.add('open');
  scrollDisable();
}

function modalClose(a) {
  var target = document.querySelector('.' + a);
  target.classList.remove('open');
  isModal();
}

function layerOpen(a) {
  var target = document.querySelector('.' + a);
  target.classList.add('open');
  target.querySelector('.dimd').addEventListener('click', function () {
    target.classList.remove('open');
  });
} //tooltip


function tooltip(a) {
  var target = a.closest('.tooltip_wrap');
  var message = target.querySelector('.message_box');
  var arrow = document.createElement('span');
  arrow.className = 'arrow_down';

  if (target.classList.contains('active')) {
    target.classList.remove('active');
    target.querySelector('.arrow_down').remove();
  } else {
    target.classList.add('active');
    target.append(arrow);
    setTimeout(function () {
      if (target.offsetLeft + message.offsetWidth / 2 < 216) {
        message.style.cssText = 'left:-' + (target.offsetLeft - 8) + 'px;margin:0;';
      } else if (target.offsetLeft + message.offsetWidth / 2 > window.outerWidth) {
        message.style.cssText = 'left:auto;right:0;margin:0;';
      } else {}

      console.log(target.offsetLeft + message.offsetWidth / 2, target.offsetLeft);
    }, 500);
  }

  var close = target.querySelector('.close').addEventListener('click', function () {
    target.classList.remove('active');
    arrow.remove();
  });
}

var controlCate = function controlCate() {
  var target = document.querySelector('.category_tab');
  var text = target.querySelector('.text');

  if (target.classList.contains('init')) {
    target.classList.remove('init');
    text.innerText = '닫기';
  } else {
    target.classList.add('init');
    text.innerText = '열기';
  }
};

function cateReady() {
  var wrap = document.querySelector('.category_tab');
  var cate = wrap.querySelector('.list');
  var total = cate.childElementCount;
  var text = wrap.querySelector('.text');

  if (total < 4) {
    wrap.classList.add('minimum');
  } else {
    wrap.classList.remove('minimum');
  }

  if (cate.querySelector('li:nth-child(n+3)').classList.contains('active')) {
    wrap.classList.remove('init');
    text.innerText = '닫기';
  } else {
    console.log('1');
  }
} //간편장부


function ledger(a) {
  var li = a.closest('li');
  var target = document.querySelector('.layer_ledger');

  if (li.classList.contains('active')) {
    target.classList.remove('open');
    li.classList.remove('active');
  } else {
    target.classList.add('open');
    li.classList.add('active');
    target.querySelector('.dimd').addEventListener('click', function () {
      target.classList.remove('open');
      li.classList.remove('active');
    });
  }
}

var lastScroll = document.documentElement.scrollTop || 0;
var isScrolling;
document.addEventListener('scroll', getScrollDirection, false);

function getScrollDirection() {
  var scrollTop = document.documentElement.scrollTop;
  var height = window.innerHeight;
  var scrollHeight = document.querySelector('body').scrollHeight;
  var body = document.querySelector('body');
  var toolbar = document.querySelectorAll('#toolbar');
  var floating = document.querySelectorAll('.floating_btn');

  if (toolbar.length > 0) {
    if (scrollTop >= lastScroll) {
      body.classList.add('sDown'); //console.log('down')
    } else {
      body.classList.remove('sDown');
      body.classList.add('end'); //console.log('up')
    }

    lastScroll = scrollTop;

    if (scrollTop == 0) {
      body.classList.remove('end');
      body.classList.remove('sDown');
    }

    if (scrollTop + height >= scrollHeight) {
      body.classList.add('end');
    }
  } else if (floating.length > 0) {
    if (scrollTop > 0) {
      body.classList.add('scroll');
    } else {
      body.classList.remove('scroll');
    }
  }

  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {//console.log( '스크롤 멈춤' );
  }, 66);
} //swiper best
// function swipeScroll(a){
// 	let wrap = document.querySelector('#'+a);
// 	let box = wrap.querySelector('.swiper-container');
// 	let len = wrap.querySelectorAll('.swiper-slide').length;
// 	//console.log(len);
// 	if(len > 4){
// 		wrap.classList.add('swiper-init');
// 		let swiper = new Swiper(box, {
// 			slidesPerView: 2,
// 			slidesPerColumn: 2,
// 			slidesPerGroup: 4,
// 			spaceBetween: 8,
// 			on: {
// 				slideChange: function () {
// 					let length = this.slides.length;
// 					let active = this.activeIndex + 1;
// 					const fill = box.querySelector('.progress-fill');
// 					//console.log(this.activeIndex)
// 					fill.style.cssText = 'width:'+ active * (100 / length) + '%';
// 				},
// 				init: function () {
// 					var length = this.slides.length;
// 					const fill = document.createElement('span');
// 					fill.className = 'progress-fill';
// 					fill.style.cssText = 'width:' + 100 / length + '%';
// 					box.querySelector('.swiper-progress-bar').append(fill);
// 				},
// 			},
// 		});
// 	} else {
// 		wrap.classList.remove('swiper-init');
// 	}
// }


function slideAct(a) {
  var view = 0; //보이는 슬라이드 개수

  var realInx = []; //현재 페이지

  var swiperArr = []; //슬라이드 배열
  //슬라이드 배열 생성

  $.each('.slider', function (index, element) {
    realInx.push(0);
    swiperArr.push(undefined);
  }); //디바이스 체크

  var winWChk = '';
  $(window).on('load resize', function () {
    var winW = window.innerWidth;

    if (winWChk != 'mo2' && winW <= 320) {
      //280대응
      slideList();
      winWChk = 'mo2';
    }

    if (winWChk != 'mo1' && winW >= 321) {
      //320이상
      slideList();
      winWChk = 'mo1';
    }
  });

  function slideList() {
    //리스트 초기화
    if ($('.slider .item').parent().hasClass('swiper-slide')) {
      $('.slider .swiper-slide-duplicate').remove();
      $('.slider .item').unwrap('swiper-slide');
    } //보이는 슬라이드 개수 설정


    $(".slider").each(function (index) {
      if (window.innerWidth > 320) {
        //320이상
        view = 4;
      } else {
        //280대응
        view = 2;
      } //리스트 그룹 생성 (swiper-slide element 추가)


      var num = 0;
      $(this).addClass("slider-" + index);
      $(".slider-" + index).find('.item').each(function (i) {
        $(this).addClass("item" + Math.floor((i + view) / view));
        num = Math.floor((i + view) / view);
      }).promise().done(function () {
        for (var i = 1; i < num + 1; i++) {
          $(".slider-" + index).find('.item' + i + '').wrapAll('<div class="grid swiper-slide"></div>');
          $(".slider-" + index).find('.item' + i + '').removeClass('item' + i + '');
        }
      });
    }).promise().done(function () {
      sliderStart();
    });
  }

  function sliderStart() {
    $(".slider").each(function (index) {
      //슬라이드 초기화
      if (swiperArr[index] != undefined) {
        swiperArr[index].destroy();
        swiperArr[index] == undefined;
      } //슬라이드 실행


      swiperArr[index] = new Swiper('.slider-' + index + ' .inner', {
        slidesPerView: 1,
        initialSlide: Math.floor(realInx[index] / view),
        resistanceRatio: 0,
        loop: true,
        navigation: {
          nextEl: $('.slider-' + index).find('.swiper-next'),
          prevEl: $('.slider-' + index).find('.swiper-prev')
        },
        on: {
          slideChange: function slideChange() {
            realInx[index] = this.realIndex * view;
          }
        }
      }); //슬라이드 배열 값 추가

      if (swiperArr[index] == undefined) {
        swiperArr[index] = swiper;
      }
    });
  }
}