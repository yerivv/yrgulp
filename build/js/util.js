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

function modalFull(a) {
  var target = document.querySelector('.' + a);

  if (target.classList.contains('open')) {
    target.closest('#wrap').classList.remove('ismodal');
    target.classList.remove('open');
  } else {
    target.closest('#wrap').classList.add('ismodal');
    target.classList.add('open');
  }
}

function modalClose(a) {
  var target = document.querySelector('.' + a);
  target.closest('#wrap').classList.remove('ismodal');
  target.classList.remove('open');
}