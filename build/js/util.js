"use strict";
"use strict";

var lastScroll = document.documentElement.scrollTop || 0;
var isScrolling;
document.addEventListener('scroll', getScrollDirection, false);
function getScrollDirection() {
  var scrollTop = document.documentElement.scrollTop;
  var height = window.innerHeight;
  var start = 30;
  var body = document.querySelector('body');
  var toolbar = document.querySelectorAll('#toolbar');
  var floating = document.querySelectorAll('#floating');
  var scrollHeight = document.querySelector('body').scrollHeight;
  if (toolbar.length > 0 || floating.length > 0) {
    if (scrollTop >= lastScroll) {
      document.querySelector('#toolbar').classList.add('down');
      console.log('down');
    } else {
      document.querySelector('#toolbar').classList.remove('down');
      console.log('up');
    }
    lastScroll = scrollTop;
  }

  //맨 아래를 탐지
  if (scrollTop + height >= scrollHeight || scrollTop == 0) {
    document.querySelector('#toolbar').classList.remove('down');
  }
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    console.log('스크롤 멈춤');
  }, 66);
}
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
<<<<<<< HEAD
window.addEventListener('scroll', function () {
  var top = this.scrollY;
  var h = 30;

  if (top > h) {
    document.querySelector('body').classList.add('scroll');
  } else {
    document.querySelector('body').classList.remove('scroll');
  }
});
=======

// window.addEventListener('scroll', function() {
//     const top = this.scrollY;
//     let h = 30;
//     if(top > h){
//         document.querySelector('body').classList.add('scroll');
//     } else {
//         document.querySelector('body').classList.remove('scroll');
//     }
// });
>>>>>>> fb541e52de944dcd12ce05f8edf4779538b03502

var floating = function floating(a) {
  var floating = document.querySelectorAll(a);
  var top = document.querySelector('#top');
  var talk = document.querySelector('#talk');

  if (floating.length > 0) {
    top.classList.add('have_bar');
    talk.classList.add('have_bar');
  }
};

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
<<<<<<< HEAD
} // let lastScroll = document.documentElement.scrollTop || 0;
// let isScrolling;
// document.addEventListener('scroll', getScrollDirection, false);
// function getScrollDirection() {
//     let scrollTop = document.documentElement.scrollTop;
//     let start = 30;
//     const body = document.querySelector('body');
//     const toolbar = document.querySelectorAll('#toolbar');
//     const floating = document.querySelectorAll('#floating');
//     if(toolbar.length>0 || floating.length>0){
//         if (scrollTop > lastScroll) {
//             toolbar.classList.remove('up');
//             //body.classList.remove('scroll');
//             console.log('dowm')
//         }
//         else {
//             //toolbar.classList.add('up');
//             //document.querySelector('body').classList.add('scroll');
//             console.log('up')
//         }
//         lastScroll = scrollTop;
//     }
//     window.clearTimeout( isScrolling );
// 	isScrolling = setTimeout(function() {
// 		console.log( '스크롤 멈춤' );
// 	}, 66);
// }
=======
}
var lastScroll = document.documentElement.scrollTop || 0;
var isScrolling;
document.addEventListener('scroll', getScrollDirection, false);
function getScrollDirection() {
  var scrollTop = document.documentElement.scrollTop;
  var height = window.innerHeight;
  var start = 30;
  var body = document.querySelector('body');
  var toolbar = document.querySelectorAll('#toolbar');
  var floating = document.querySelectorAll('#floating');
  var scrollHeight = document.querySelector('body').scrollHeight;
  if (toolbar.length > 0 || floating.length > 0) {
    if (scrollTop >= lastScroll) {
      document.querySelector('#toolbar').classList.add('down');
      console.log('down');
    } else {
      document.querySelector('#toolbar').classList.remove('down');
      console.log('up');
    }
    lastScroll = scrollTop;
  }

  //맨 아래를 탐지
  if (scrollTop + height >= scrollHeight || scrollTop == 0) {
    document.querySelector('#toolbar').classList.remove('down');
  }
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    console.log('스크롤 멈춤');
  }, 66);
}
>>>>>>> fb541e52de944dcd12ce05f8edf4779538b03502
