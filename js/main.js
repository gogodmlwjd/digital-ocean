$(function () { ///////JQB/////////////////////

    var mob = $(window).width() < 1080;

    if (mob === false) {
        $(".hamburger_bar").fadeOut(400);
        $(".menu_popup, .x_btn").removeClass("effect");
    } else {

        $(".hamburger_bar").fadeIn(400);
    }

    $(window).resize(function () {

        mob = $(window).width() < 1080;

        if (mob === false) {
            $(".hamburger_bar").hide(400);
            $(".menu_popup, .x_btn").removeClass("effect");
        } else {
            $(".hamburger_bar").fadeIn(400);
        }

    });


    ///// GNB a링크를 클릭하면 해당 페이지 위치로 이동 애니메이션 ///
    //이벤트대상 : .gnb a, .menu_popup a
    $(".logo, .gnb a, .menu_popup a,.main_tit_area a").click(function (e) {
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
        }, 800, "easeInOutCubic");

        // 5. 이동선택된 메뉴변경하기(class="on"넣기)
        // $(this) 클릭된 a요소
        $(this).parent() //선택된 a요소의 부모 li를 선택 
            .addClass("on") //클래스 "on"넣기
            .siblings() //선택된 li외의 다른 li 모두선택!
            .removeClass("on"); //모두 클래스 "on"지우기

    }); ///// click //////////////////////






    var slideMts = 0; // 광클금지
    //////햄버거 바 누르면 나오게 만들기!
    $(".hamburger_bar").click(function (e) {
        e.preventDefault();

        //////왜 안먹힐까....????ㅎㅎㅎㅎㅎㅎ///////
        ///////// 광클금지 //////////////
        if (slideMts === 1) return false;
        slideMts = 1; //잠금
        setTimeout(function () {
            slideMts = 0;
        }, 400);
        /////////////////////////////////


        console.log("열기");
        $(this).fadeOut(400); /////햄버거바 숨기기/////
        $(".menu_popup").addClass("effect");
        setTimeout(function () {
            $(".x_btn").addClass("effect");
        }, 400);
    }); ///// click //////////////////////


    $(".x_btn").click(function () {
        console.log("닫기");

        $(".menu_popup, .x_btn").removeClass("effect");
        $(".hamburger_bar").fadeIn(400); /////햄버거바 보이기/////
    }); ///// click //////////////////////



    //만일, menu_popup이 display:block 이라면,
    //hamburger_bar를 x_btn 으로 변경해라



    // none_op_box h2, p 배경이랑 동시에 변환되게 만들기
    $("none_op_box h2", "none_op_box p").change(function () {

    }); ///// change //////////////////////



    var slideTg = $(".work_list_wrap");
    var slideSts = 0; // 광클금지
    $(".work_arrow_wrap a").click(function (e) {
        e.preventDefault();

        ///////// 광클금지 //////////////
        if (slideSts === 1) return false;
        slideSts = 1; //잠금
        setTimeout(function () {
            slideSts = 0;
        }, 800);
        /////////////////////////////////


        var idx = $(this).index();
        console.log("버튼순번:" + idx);

        if (idx) {
            slideTg.animate({
                left: "-100%"
            }, 800, function () {
                slideTg.append(slideTg.find("ul").first())
                    .css({
                        left: "0"
                    });
            });
        } //// if /////////////
        else {
            slideTg.prepend(slideTg.find("ul").last())
                .css({
                    left: "-100%"
                })
                .animate({
                    left: "0"
                }, 800);
        } /// else //////////////


    })


    ///////////////////////////////////////////////

}); ///////JQB///////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


$(function () { /////// JQB /////////////
    //라이트박스 플러그인 적용하기 ///
    // lightBox() 메서드를 호출한다!
    // 옵션은 호출시 메서드에 객체로 전달한다!
    //lightBox{속성명:값, 속성명:값,...}
    $(".view").lightBox({}); ////// light box //////////////////////

    ////// backstretch //////////
    //$만쓰면 전체화면에 적용됨!
    $(".main_visual_wrap").backstretch([
                "images/main_bg_ch/diocean_Big_revise.jpg",
                "images/main_bg_ch/raemian1.jpg",
                "images/main_bg_ch/smartcara_portfolio_main.jpg",
                "images/main_bg_ch/nepa_img_2.jpg.jpg",
                "images/main_bg_ch/asics_big.jpg"
            ], {
        duration: 4000,
        fade: 800
    }); ////// backstretch //////////


    // 데이터 셋팅!
    var btit = ["LEVI'S", "래미안", "스마트카라", "네파", "ASICS"];
    var bdesc = ["Styling on tour", "2019 RAEMIANM<br>ADVERTISING", "TVCF", "FREE WALK", "Want it more"];
    var link = ["http://www.diocean.co.kr/category/portfolio/page/19/", "http://www.diocean.co.kr/category/portfolio/page/2/", "http://www.diocean.co.kr/category/portfolio/page/3/", "http://www.diocean.co.kr/category/portfolio/page/16/", "http://www.diocean.co.kr/category/portfolio/page/17/"];
    //////////// 백스트레치가 실행될때 호출되는 함수 /////////
    $(".main_visual_wrap").on("backstretch.before", function (e, instance, index) {
        //호출확인(0~4)
        console.log(index);
        // 타이틀변경
        $(".none_op_box h2").text(btit[index]);
        //설명변경(br태그가 있어서 html로!)
        $(".none_op_box p").html(bdesc[index]);
        // 링크변경하기
        $(".none_op_box a").attr("href", link[index]);
        // 블릿변경하기
        $(".bullet_list li").eq(index).addClass("on")
            .siblings().removeClass("on");


    }); //////////// 백스트레치가 실행될때 호출되는 함수 /////////


    var wize = window.outerWidth;

    if (wize <= 400) {
        console.log("400이하로 시작!");
        //////// li 숨겨진 텍스트 꺼내기
        $(".service_list > li").click(function () {
            $(".service_box").addClass("active") //fadeIn();
            
            $(".active").fadeIn();

            ///// 내용 li별로 클릭시 바뀌도록 수정 /////
            var litit = $(this).find("h5").text();
            //console.log("제목" + litit);

            var litext = $(this).find("p").text();
            //console.log("내용" + litext);

            ///////////////////////////////////////


            ///// 내용 li별로 클릭시 바뀌도록 수정 /////
            var litit = $(this).find("h5").text();
            //console.log("제목" + litit);

            var litext = $(this).find("p").text();
            //console.log("내용" + litext);
            ///////////////////////////////////////

            // 제목 변경
            $(".service_box h5").text(litit);
            // 내용 변경
            $(".none_op_box p").html(litext);

            
        

        }); //// click //////////////////

        $(".service_box a").click(function (e) {
            e.preventDefault();
            
            $(".service_box").fadeOut();
        }); //// click //////////////////
    } /// if ////////////////
    else {
        console.log("400초과로 시작!");
        $(".active").hide();
        $(".service_box").removeClass("active");
    }



    $(window).resize(function () {
        // width값을 가져오기
        var width_size = window.outerWidth;
        //var width_size = window.width;

        // 1400 이하인지 if문으로 확인
        if (width_size <= 400) {
            console.log('현재 브라우저 크기가 400px 이하');

            ////// li 숨겨진 텍스트 꺼내기
            $(".service_list > li").click(function () {
                $(".service_box").addClass("active") //fadeIn();
                
                $(".active").fadeIn();

                ///// 내용 li별로 클릭시 바뀌도록 수정 /////
                var litit = $(this).find("h5").text();
                //console.log("제목" + litit);

                var litext = $(this).find("p").text();
                //console.log("내용" + litext);

                ///////////////////////////////////////

                // 제목 변경
                $(".service_box h5").text(litit);
                // 내용 변경
                $(".none_op_box p").html(litext);

            }); //// click //////////////////
            
            $(".service_box a").click(function (e) {
                e.preventDefault();

                $(".service_box").fadeOut();
            }); //// click //////////////////

//            $(".service_list > li").click(function () {
//                $(".service_box").fadeIn();
//
//
//                ///// 내용 li별로 클릭시 바뀌도록 수정 /////
//                var litit = $(this).find("h5").text();
//                //console.log("제목" + litit);
//
//                var litext = $(this).find("p").text();
//                //console.log("내용" + litext);
//                ///////////////////////////////////////
//
//                // 제목 변경
//                $(".service_box h5").text(litit);
//                // 내용 변경
//                $(".none_op_box p").html(litext);
//
//
//
//            }); //// click //////////////////




        } ////////   if   /////////////////////////

        //////////////////////////// 400 이상일 경우 //////////////////////////////
        else {
            console.log('현재 브라우저 크기가 400px 초과!');
            
            $(".active").hide();
            $(".service_list > li").click(function () {
                $(".service_box").removeClass("active");
            }); /// click ///
        } //////// else /////////////////////////

    }); /// resize //////////




}); //////////// JQB /////////////////////////////////////



/*
work 정리


*/
