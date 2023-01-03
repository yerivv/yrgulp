"use strict";

function setScreenSize() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

;
setScreenSize();
window.addEventListener('resize', setScreenSize); //scroll

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
    //console.log('플로팅바 yes');
    if (scrollTop > 0) {
      body.classList.add('scroll');
    } else {
      body.classList.remove('scroll');
    }
  }

  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {//console.log( '스크롤 멈춤' );
  }, 66);
} //floating button detail


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
  var wrap = a.closest('.accordions_wrap');
  wrap.childNodes[1].classList.toggle('on');
} //탭구현


function tabInit(a) {
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
}

function isModal() {
  var body = document.querySelector('body');
  var modals = document.querySelectorAll('#modal.open');

  if (modals.length == 0) {
    body.classList.remove('ismodal');
    body.removeEventListener('scroll touchmove mousewheel', null, false);
  } else {
    body.classList.add('ismodal');
    body.addEventListener('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
    }, false);
  }
}

function modalOpen(a) {
  var target = document.querySelector('.' + a);
  target.closest('body').classList.add('ismodal');
  target.classList.add('open');
  target.closest('body').addEventListener('scroll touchmove mousewheel', function (e) {
    e.preventDefault();
  }, false);
}

function modalClose(a) {
  var target = document.querySelector('.' + a);
  target.classList.remove('open');
  isModal();
}

function modalUrlOpen(a, b) {
  if (b == 'full') {
    $('#modalFullwrap').load(a, function () {
      $(this).find('#modal').addClass('open');
      $('body').addClass('ismodal');
    });
  } else {
    $('#modalwrap').load(a, function () {
      $(this).find('#modal').addClass('open');
      $('body').addClass('ismodal');
    });
  }
}

function modalUrlClose() {
  $('#modalwrap').empty();
  isModal();
}

function modalUrlCloseFull() {
  $('#modalFullwrap').empty();
  isModal();
} //간편장부


function ledger(a) {
  var body = document.querySelector('body');
  var li = a.closest('.ledger');
  var target = document.querySelector('.layer_ledger');
  var toolbar = document.querySelector('#toolbar');
  var menus = toolbar.querySelectorAll('li');
  var stay = Array.from(document.querySelectorAll('#toolbar li')).indexOf(document.querySelector('#toolbar .stay')); //console.log(stay)

  menus.forEach(function (menu) {
    menu.classList.remove('active');
  });

  if (target.classList.contains('open')) {
    target.classList.remove('open');
    li.classList.remove('active');
    menus[stay].classList.add('active');
    body.classList.remove('ismodal');
    body.removeEventListener('scroll touchmove mousewheel', null, false);
  } else {
    target.classList.add('open');
    li.classList.add('active');
    body.classList.add('ismodal');
    body.addEventListener('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
    }, false); //dimd close

    target.querySelector('.dimd').addEventListener('click', function () {
      target.classList.remove('open');
      li.classList.remove('active');
      menus[stay].classList.add('active');
      body.classList.remove('ismodal');
      body.removeEventListener('scroll touchmove mousewheel', null, false);
    });
  }
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
      } else {} //console.log(target.offsetLeft+(message.offsetWidth/2),target.offsetLeft);

    }, 1);
  }

  var close = target.querySelector('.close').addEventListener('click', function () {
    target.classList.remove('active');
    arrow.remove();
  });
}