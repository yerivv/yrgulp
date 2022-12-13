"use strict";
"use strict";

// const area = document.querySelector('.wrap');
// let prevScroll = 0;
// document.addEventListener('scroll', getScrollDirection);
// function getScrollDirection() {
//     const currScroll = this.scrollTop;
//     if (prevScroll > currScroll) {
//         console.log('up')
//     }
//     else {
//         console.log('down')
//     }
//     prevScroll = currScroll;
// }
var wrap = document.querySelector('body');
window.addEventListener('scroll', function () {
  var top = this.scrollY;
  var h = 30;

  if (top > h) {
    document.querySelector('body').classList.add('scroll');
  } else {
    document.querySelector('body').classList.remove('scroll');
  }
});

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
}

function isModal() {
  var body = document.querySelector('body');
  var modals = document.querySelectorAll('#modal.open');

  if (modals.length == 0) {
    body.classList.remove('ismodal');
    body.removeEventListener('scroll touchmove mousewheel', null);
  } else {
    body.classList.add('ismodal');
  }
}

function modalOpen(a) {
  var target = document.querySelector('.' + a);
  target.closest('body, html').classList.add('ismodal');
  target.classList.add('open');
  target.closest('body, html').addEventListener('scroll touchmove mousewheel', function (e) {
    e.preventDefault();
  });
}

function modalClose(a) {
  var target = document.querySelector('.' + a);
  target.classList.remove('open');
  isModal();
}

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
}; //아코디언


var accordions = document.querySelectorAll('.accordion');
console.log(accordions);
accordions.forEach(function (accordion, index) {
  accordion.addEventListener('click', function (e) {
    e.preventDefault();
    this.parentNode.classList.toggle('on');
    accordions.forEach(function (accordion2, index2) {
      if (index !== index2) {
        accordion2.parentNode.classList.remove('on');
      }
    });
  });
});