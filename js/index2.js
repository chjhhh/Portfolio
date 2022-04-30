$(document).ready(function(){
    // 스크롤 내렸을 때 header와 top버튼 보이기
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
            $('header').fadeIn();
            $('.top').fadeIn();
        } else{
            $('header').fadeOut();
            $('.top').fadeOut();
        }
    });

    // 스크롤 내렸을 때 PC버전 shortcut 보이게 하기
    $(window).scroll(function(){
        let windowWidth = $(window).width();
        if($(this).scrollTop() > 600 && windowWidth > 1200){
            $('.pc-shortcut').fadeIn(); // pc에서만 보이게
        } else{
            $('.pc-shortcut').fadeOut();
        }
    });

    // Top 버튼 부드럽게 올라가기
    $('.top').click(function(){
        $('html, body').animate({scrollTop : 0}, 400);
    });

    // 모바일, 탭 메뉴 스크롤 시 글자 색상 변경
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        // const first = $('.first').offset().top;
        const Gongcha = $('.Gongcha').offset().top;
        const Starbucks = $('.Starbucks').offset().top;
        const UI = $('.UI').offset().top;
        const Me = $('.Me').offset().top;

        if(scroll >= Gongcha){
            $('.menuGo1').addClass('color');
        } else if(scroll >= Starbucks){
            $('.menuGo2').addClass('color');
        } else if(scroll >= UI){
            $('.menuGo3').addClass('color');
        } else if(scroll >= Me){
            $('.menuGo4').addClass('color');
        }
    })


    // 스크롤바 움직일 때 각 티켓 section에 그림자 추가, 삭제
    

    // pc menu 클릭 시 색상 변경 (완성 X)

});