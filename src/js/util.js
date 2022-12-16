// document.addEventListener("DOMContentLoaded", function () {
//     const vh = window.innerHeight * 0.01;
// 	document.querySelector('html').style.cssText = '--vh:'+vh+'px';
// });
function setScreenSize(){
    let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);

window.addEventListener('scroll', function() {
    const top = this.scrollY;
    let h = 30;
    if(top > h){
        document.querySelector('body').classList.add('scroll');
    } else {
        document.querySelector('body').classList.remove('scroll');
    }
});

const floating = (a) => {
    let floating = document.querySelectorAll(a);
    let top = document.querySelector('#top');
    let talk = document.querySelector('#talk')
    if(floating.length>0){
        top.classList.add('have_bar');
        talk.classList.add('have_bar');
    }
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

//accordion
function accordions(a){
    const wrap = a.closest('.accordion_wrap');
    wrap.childNodes[1].classList.toggle('on');
}

//탭구현
// const tabInit = (a) => {
//     let tabWrap = document.querySelector(a);
//     let tabs = tabWrap.querySelectorAll('.menu_tab li');
//     let tabContents = tabWrap.querySelectorAll('.contents_tab .content');

//     tabs.forEach((tab) => {
//         tab.addEventListener('click', () => {
//             const target = tabWrap.querySelector('#'+tab.dataset.tabTarget)
//             tabContents.forEach((tabContent) => {
//                 tabContent.classList.remove('active')
//             });
//             tabs.forEach((tab) => {
//                 tab.classList.remove('active')
//             });
//             target.classList.add('active')
//             tab.classList.add('active')
//         })
//     })
// }

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

function layerOpen(a){
    let target = document.querySelector('.'+a);
    target.classList.add('open');

    target.querySelector('.dimd').addEventListener('click', function(){
		target.classList.remove('open');
	})
}

//tooltip
function tooltip(a){
	const target = a.closest('.tooltip_wrap');
	const message = target.querySelector('.message_box');
	const arrow = document.createElement('span');
	arrow.className = 'arrow_down';
	
	if(target.classList.contains('active')){
		target.classList.remove('active');
		target.querySelector('.arrow_down').remove();
	} else {
		target.classList.add('active');
		target.append(arrow);
	}
	
	const close = target.querySelector('.close').addEventListener('click', function(){
		target.classList.remove('active');
		arrow.remove();
	})
}

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

//간편장부
function ledger(a){
    const li = a.closest('li');
    const target = document.querySelector('.layer_ledger');

    if(li.classList.contains('active')){
        target.classList.remove('open');
        li.classList.remove('active');
    } else {
        target.classList.add('open');
        li.classList.add('active');
        target.querySelector('.dimd').addEventListener('click', function(){
            target.classList.remove('open');
            li.classList.remove('active');
        })
    }
}

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
