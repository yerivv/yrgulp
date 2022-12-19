
let lastScroll = document.documentElement.scrollTop || 0;
let isScrolling;
document.addEventListener('scroll', getScrollDirection, false);
function getScrollDirection() {
    let scrollTop = document.documentElement.scrollTop;
    let height = window.innerHeight;
    let start = 30;
    const body = document.querySelector('body');
    const toolbar = document.querySelectorAll('#toolbar');
    const floating = document.querySelectorAll('#floating');
    const scrollHeight = document.querySelector('body').scrollHeight;

    if(toolbar.length>0 || floating.length>0){
        if (scrollTop >= lastScroll) {
            document.querySelector('#toolbar').classList.add('down');
            console.log('down')
        }
        else {
            document.querySelector('#toolbar').classList.remove('down');
            console.log('up')
        }
        lastScroll = scrollTop;
    }
    
    //맨 아래를 탐지
    if(scrollTop + height >= scrollHeight || scrollTop == 0){
        document.querySelector('#toolbar').classList.remove('down');
    }

    window.clearTimeout( isScrolling );

	isScrolling = setTimeout(function() {
		console.log( '스크롤 멈춤' );
	}, 66);
}