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

const wrap = document.querySelector('body');
window.addEventListener('scroll', function() {
    const top = this.scrollY;
    let h = 30;
    if(top > h){
        document.querySelector('body').classList.add('scroll');
    } else {
        document.querySelector('body').classList.remove('scroll');
    }
});

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
    target.closest('body, html').classList.add('ismodal');
    target.classList.add('open');
    target.closest('body, html').addEventListener('scroll touchmove mousewheel', function(e){e.preventDefault();});
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
const tabItem = document.querySelectorAll('.menu_tab .list li');
const tabContent = document.querySelectorAll('.contents_tab .content')

tabItem.forEach((item) => {
    item.addEventListener("click", tabHandler);
});

function tabHandler(item) {
    const tabTarget = item.currentTarget;
    const target = tabTarget.dataset.tab;
    tabItem.forEach((title) => {
        title.classList.remove("active");
    });
    tabContent.forEach((target) => {
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