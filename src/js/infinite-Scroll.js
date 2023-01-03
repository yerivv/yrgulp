// function YesScroll () {
//     const pagination = document.querySelector('.paginaiton'); // 페이지네이션 정보획득
//     const fullContent = document.querySelector('.infinite'); // 전체를 둘러싼 컨텐츠 정보획득
//     const screenHeight = screen.height; // 화면 크기
//     let oneTime = false; // 일회용 글로벌 변수
	
//     document.addEventListener('scroll',OnScroll,{passive:true}) // 스크롤 이벤트함수정의
//     function OnScroll () { //스크롤 이벤트 함수
//         const fullHeight = fullContent.clientHeight; // infinite 클래스의 높이   
//         const scrollPosition = pageYOffset; // 스크롤 위치
//         if (fullHeight-screenHeight/2 <= scrollPosition && !oneTime) { // 만약 전체높이-화면높이/2가 스크롤포지션보다 작아진다면, 그리고 oneTime 변수가 거짓이라면
//             oneTime = true; // oneTime 변수를 true로 변경해주고,
//            // madeBox(); // 컨텐츠를 추가하는 함수를 불러온다.
//             console.log('끝')
//         }else if ( scrollPosition == 0 ) {
//             oneTime = true;
//             //madeBox();
//         }
//     }
// }

let count = 10; //보여줄 노출 갯수
window.addEventListener("scroll", (e) => {
    const footer = document.querySelector('#footer').offsetHeight - 16;
    const isScrollEnd = window.innerHeight + window.scrollY + footer > document.body.offsetHeight;
    const fullContent = document.querySelector('#scrollList .list');
    if (isScrollEnd && count < 2000) {
        for (let i = 0; i < 10; i++) {
            const $newBox = document.createElement("div");
            $newBox.className = "item";
			$newBox.setAttribute('onclick','move()')
            $newBox.textContent = ++count;
            fullContent.appendChild($newBox);
        }
    }
},{passive:true});

let scroll_position = localStorage.getItem("more-scroll");
window.addEventListener("beforeunload", () => {
	localStorage.setItem("more-scroll", element.scrollTop);
});

const scrollRestoration = history.scrollRestoration
if (scrollRestoration === 'manual') {
	console.log('The location on the page is not restored, user will need to scroll manually.');
}

function move(){
	location.href='order/cart.html' 
}

// window.addEventListener('pagehide', function(e){
// 	sessionStorage.setItem('historyScrollTop', document.documentElement.scrollTop);
// });


//https://lagneid.tistory.com/199

// const fullContent = document.querySelector('.infinite .list');

// var curpage = 1; //현재페이지
// var scrollchk = true; //스크롤 체크 여부 플래그  
// var totallist; //ajax로 받아온 list를 이 변수에 계속 누적시킴  

// var loadlist = function(){  
//     var url = '@@webRoot/kdsm/moreitem.html';
//     $.ajax({  
//         url : url,  
//         type : 'get',  
//         dataType : 'html',
//         success : function(list) {  
//             if(list.length > 3){  
//                 curpage++;  ///데이터를 받아오는데 성공했고 추가할 페이지가 있으면 현재 페이지를 늘려준다.  
//                 $('.infinite .list').append(list);   ///html에 받아온 리스트를 추가해주고  
//                 totallist += list; ///totallist에 차곡차곡 누적시켜준다.  
//                 history.replaceState({list:totallist, page:curpage},'Page '+curpage, 'board/list##'); //이부분이 핵심인데 현재 페이지의 주소에 ## 이라는 앵커를 넣어줌으로서 이 페이지에 1회이상 페이지 로딩이 있었다는 표시를 해준다.  
//             }  
//             scrollchk = true; //데이터 로딩이 끝나면 스크롤체크를 풀어준다.  
//             mutex = false; //데이터로딩이 끝나면 ajax접근권한을 준다(중복호출 방어)  
//         }  
//     });  
// }  

// $(window).scroll(function(){  
//     if(scrollchk){ ///새로고침이나 뒤로가기시 스크롤이 밑으로가있으면 로딩체크를하며 알람메시지가뜨므로 페이지를 완전히 세팅후 스크롤체크를 하도록 방어처리  
//         if($(window).scrollTop() >= $(document).height() - $(window).height()){  
//             if(mutex){  
//                 alert('다음페이지를 로딩중입니다.');  
//                 return;  
//             }  
//             mutex = true;  
//             loadlist();  
//         } else {
//             console.log('1')
//         }
//     }
// });

// if(location.hash){  //현재 주소에 ##이라는앵커가 박혀있을경우 true가 발생한다.  
//                     //앵커가 박혔다는것은 새 페이지 진입이아니라 한번이라도 로딩이 있었던 페이지이므로  
//                     //뒤로가기로 왔다는 뜻이된다.  
//     var data = history.state; //아까 데이터로 보낸부분이 history.state에 저장이되어있다.  
//     if(data){  
//         scrollchk = false; //데이터를 세팅하는동안 스크롤 체크를 하지않게하자.  
//         $('.infinite .list').append(data.list);   //저장된 데이터를 뿌려준다.  
//         curpage = data.page;     //저장되었던 마지막 페이지를 세팅  
//         scrollchk = true;  //데이터 세팅 종료 후 스크롤 체크  
//     }  
// } 


// var listPage = 1;
// var listScroll = 0;
// var totalList = "";     // 모바일앵커

// $(function(){
// 	if(location.hash){      // 모바일앵커
// 		var data = history.state;
// 		if(data){
// 			$("#scrollList").append(data.list);
// 			$('#idpage').val(data.page);
// 			$('#idscroll').val(data.scroll);
// 		}
// 	}

// 	listPage = Number($("#idpage").val());
// 	listScroll = Number($("#idscroll").val());
// });

// $(window).on('scroll',function(){
// 	$("#idscroll").val($(window).scrollTop());
// });

// function pageMore(){
// 	listPage += 1;
// 	fnMoreView(listPage);
// 	$("#idpage").val(listPage);
// }

// function fnMoreView(page,type){
// 	//var page = $("#page").val();
// 	var totalPage = $("#totalPage").val();
// 	var st = $(window).scrollTop();

// 	//page = parseInt(page) + 1;

// 	if(page > totalPage){
// 		alert("마지막 페이지 입니다.");
// 	}
// 	else
// 	{
// 		$.ajax({
// 			type     : "POST",
// 			dataType : "json",
// 			url      : "/mw/goods/list_ajax.do",
// 			async    : false,
// 			data     :
// 			{
// 				cate: $("#cate").val(),
// 				brcds : $("input[name=brcds]").val(),
// 				pview: $("#pview").val(),
// 				psort: $("#psort").val(),
// 				page: page,
// 				gender: $("#gender").val()
// 			},
// 			error: function (request, status, error)
// 			{
// 				alert(request.responseText);
// 			},
// 			success: function (data)
// 			{
// 				var strData = "";

// 				if (data.list.length > 0)
// 				{
// 					$("#page").val(data.page);

// 					for (i=0; i< data.list.length; i++)
// 					{
// 						strData += "<div class='item'>";
// 						strData += "    i++";
// 						strData += "</div>";
// 					}

// 					$("#scrollList").append(strData);
// 					$(window).scrollTop(st);
					
// 					if (type=='start')
// 					{
// 						$(window).scrollTop(listScroll);
// 					}

// 					totalList += strData;       // 모바일앵커
// 					history.replaceState({list:totalList, page:listPage, scroll:listScroll}, 'Page '+listPage, 'list.do##');
// 				}

// 			}
// 		});
// 	}
// }