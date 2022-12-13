// let lastScroll = document.documentElement.scrollTop || 0;
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

const floating = (a) => {
    let floating = document.querySelectorAll(a);
    let top = document.querySelector('#floating');
    if(floating.length>0){
        top.classList.add('have_bar')
    }
}

window.addEventListener('scroll', function() {
    const top = this.scrollY;
    let h = 30;
    if(top > h){
        document.querySelector('body').classList.add('scroll');
    } else {
        document.querySelector('body').classList.remove('scroll');
    }
}, false);

const controlCate = () => {
    let target = document.querySelector('.category_tab');
    let text = target.querySelector('.text');

    if (target.classList.contains('init')) {
        target.classList.remove('init');
        text.innerText = '닫기';
    } else {
        target.classList.add('init');
        text.innerText = '열기';
    }
}

function cateReady(){
    let wrap = document.querySelector('.category_tab');
    let cate = wrap.querySelector('.list');
    let total = cate.childElementCount;
    let text = wrap.querySelector('.text');

    if(total < 4) {
        wrap.classList.add('minimum');
    } else {
        wrap.classList.remove('minimum');
    }

    if(cate.querySelector('li:nth-child(n+3)').classList.contains('active')){
        wrap.classList.remove('init');
        text.innerText = '닫기';
    } else {
        console.log('1')
    }
}

function isModal(){
    let body = document.querySelector('body');
    let modals = document.querySelectorAll('#modal.open');
    if(modals.length == 0){
        body.classList.remove('ismodal');
        body.removeEventListener('scroll touchmove mousewheel', null);
    } else {
        body.classList.add('ismodal');
    }
}

function modalOpen(a){
    let target = document.querySelector('.'+a);
    target.closest('body').classList.add('ismodal');
    target.classList.add('open');
    target.closest('body').addEventListener('scroll touchmove mousewheel', function(e){e.preventDefault();}, false);
}

function modalClose(a){
    let target = document.querySelector('.'+a);
    target.classList.remove('open');
    isModal();
}

function floatingMore(a){
    let wrap = a.closest('.floating_btn');
    let text = wrap.querySelector('.more');

    if(wrap.classList.contains('active')){
        wrap.classList.remove('active');
        text.innerText = '닫기';
    } else {
        wrap.classList.add('active');
        text.innerText = '닫기';
    }
}

//탭구현
const tabInit = (a) => {
    let tabWrap = document.querySelector(a);
    let tabs = tabWrap.querySelectorAll('.menu_tab li');
    let tabContents = tabWrap.querySelectorAll('.contents_tab .content');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tabWrap.querySelector('#'+tab.dataset.tabTarget)
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('active')
            });
            tabs.forEach((tab) => {
                tab.classList.remove('active')
            });
            target.classList.add('active')
            tab.classList.add('active')
        })
    })
}

//아코디언
// const accordions = document.querySelectorAll('.accordion');
// console.log(accordions)
// accordions.forEach(function(accordion, index) {
//     accordion.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         this.parentNode.classList.toggle('on');
        
//         accordions.forEach(function(accordion2, index2) {
//             if ( index !== index2 ) {
//                 accordion2.parentNode.classList.remove('on');
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const vh = window.innerHeight * 0.01;
	document.querySelector('html').style.cssText = '--vh:'+vh+'px';
});