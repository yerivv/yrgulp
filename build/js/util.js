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
}

//탭구현
var tabItem = document.querySelectorAll('.menu_tab .list li');
var tabContent = document.querySelectorAll('.contents_tab .content');
tabItem.forEach(function (item) {
  item.addEventListener("click", tabHandler);
});
function tabHandler(item) {
  var tabTarget = item.currentTarget;
  var target = tabTarget.dataset.tab;
  tabItem.forEach(function (title) {
    title.classList.remove("active");
  });
  tabContent.forEach(function (target) {
    target.classList.remove("active");
  });
  document.querySelector("#" + target).classList.add("active");
  tabTarget.classList.add("active");
}

// const gnbScroll = () => {
//     //let w = window.innerWidth;
//     let gnbWrap2 = document.querySelector('#gnb .wrap');
//     let gnbActive = gnbWrap2.querySelector('.active');

//     console.log(gnbWrap2.scrollLeft)

//     //gnbWrap.scrollLeft = gnbActive.clientWidth
//     //console.log('active:'+gnbActive.offsetLeft, 'scroll:'+gnbWrap.scrollLeft, 'width:'+ gnbActive.clientWidth);
// }
// document.querySelector('#gnb .wrap').addEventListener("scroll", gnbScroll);