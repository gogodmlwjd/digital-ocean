$(function () { ///////JQB/////////////////////

    ///// GNB a링크를 클릭하면 해당 페이지 위치로 이동 애니메이션 ///
    //이벤트대상 : #gnb a
    $(".gnb a").click(function (e) {
        // 1. a태그 기본이동 막기
        e.preventDefault();

        // 2. a태그의 href값 읽어오기(이동할 페이지 아이디 값)
        var pid = $(this).attr("href");
        console.log("아이디:" + pid);

        // 3. 이동할 페이지 아이디로 페이지 위치값(top값) 구하기
        // offset() 메서드로 현재 요소 위치,크기정보를 알 수 있다!
        var pgpos = $(pid).offset().top;
        console.log("top값:" + pgpos);

        // 4. 스크롤 이동 애니메이션
        // 대상: html,body (범용브라우저 코딩시 선택대상)
        // 사용속성: scrollTop (세로스크롤 위치속성)
        // 비교 - scrollleft(가로스크롤바 위치속성)
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 800,"easeInOutCubic");

        // 5. 이동선택된 메뉴변경하기(class="on"넣기)
        // $(this) 클릭된 a요소
        $(this).parent() //선택된 a요소의 부모 li를 선택 
            .addClass("on") //클래스 "on"넣기
            .siblings() //선택된 li외의 다른 li 모두선택!
            .removeClass("on"); //모두 클래스 "on"지우기

    }); ///// click //////////////////////


}); ///////JQB///////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////