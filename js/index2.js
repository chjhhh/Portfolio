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

    // 메인 티켓 클릭 시 Gongcha section으로 부드럽게 이동하기
    $('.white').click(function(){
        $('html, body').animate({scrollTop : $('.Gongcha').offset().top}, 400);
    });

    // 모바일, 탭, PC 메뉴 클릭시 부드럽게 이동하기
    $('.menuGo1, .active1').click(function(){
        $('html, body').animate({scrollTop : $('.Gongcha').offset().top}, 400);
    });
    $('.menuGo2, .active2').click(function(){
        $('html, body').animate({scrollTop : $('.Starbucks').offset().top}, 400);
    });
    $('.menuGo3, .active3').click(function(){
        $('html, body').animate({scrollTop : $('.UI').offset().top}, 400);
    });
    $('.menuGo4, .active4').click(function(){
        $('html, body').animate({scrollTop : $('.Me').offset().top}, 400);
    });


    // 모바일, 탭, PC 스크롤 시 메뉴 글자 색상 변경
    // 스크롤바 움직일 때 각 티켓 section에 그림자 추가, 삭제
    $(window).on('scroll', function(){
        let scroll = $(this).scrollTop();
        let Gongcha = $('.Gongcha').offset().top;
        let Starbucks = $('.Starbucks').offset().top;
        let UI = $('.UI').offset().top;
        let Me = $('.Me').offset().top;


        if(scroll >= Gongcha){
            // 모바일, 탭 메뉴 스크롤 시 글자 색상 변경 .menuGo
            // pc menu 클릭 시 색상 변경 .active
            $('.menuGo1, .active1').addClass('color').css({'font-weight' : 'bold'})
            $('.menuGo2, .active2').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo3, .active3').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo4, .active4').removeClass('color').css({'font-weight' : 'none'})

            // 스크롤바 움직일 때 각 티켓 section에 그림자 추가, 삭제
            $('.section.Gongcha .section-ticket').addClass('shadow')
            $('.section.Starbucks .section-ticket').removeClass('shadow')
            $('.section.UI .section-ticket').removeClass('shadow')
            $('.section.Me .section-ticket').removeClass('shadow')
        }
        if(scroll >= Starbucks){
            // 모바일, 탭 메뉴 스크롤 시 글자 색상 변경 .menuGo
            // pc menu 클릭 시 색상 변경 .active
            $('.menuGo1, .active1').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo2, .active2').addClass('color').css({'font-weight' : 'bold'})
            $('.menuGo3, .active3').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo4 .active4').removeClass('color').css({'font-weight' : 'none'})

            // 스크롤바 움직일 때 각 티켓 section에 그림자 추가, 삭제
            $('.section.Gongcha .section-ticket').removeClass('shadow')
            $('.section.Starbucks .section-ticket').addClass('shadow')
            $('.section.UI .section-ticket').removeClass('shadow')
            $('.section.Me .section-ticket').removeClass('shadow')
        }
        if(scroll >= UI){
            // 모바일, 탭 메뉴 스크롤 시 글자 색상 변경 .menuGo
            // pc menu 클릭 시 색상 변경 .active
            $('.menuGo1, .active1').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo2, .active2').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo3, .active3').addClass('color').css({'font-weight' : 'bold'})
            $('.menuGo4 .active4').removeClass('color').css({'font-weight' : 'none'})

            // 스크롤바 움직일 때 각 티켓 section에 그림자 추가, 삭제
            $('.section.Gongcha .section-ticket').removeClass('shadow')
            $('.section.Starbucks .section-ticket').removeClass('shadow')
            $('.section.UI .section-ticket').addClass('shadow')
            $('.section.Me .section-ticket').removeClass('shadow')
        }
        if(scroll >= Me){
            // 모바일, 탭 메뉴 스크롤 시 글자 색상 변경 .menuGo
            // pc menu 클릭 시 색상 변경 .active
            $('.menuGo1, .active1').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo2, .active2').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo3, .active3').removeClass('color').css({'font-weight' : 'none'})
            $('.menuGo4, .active4').addClass('color').css({'font-weight' : 'bold'})

            // 스크롤바 움직일 때 각 티켓 section에 그림자 추가, 삭제
            $('.section.Gongcha .section-ticket').removeClass('shadow')
            $('.section.Starbucks .section-ticket').removeClass('shadow')
            $('.section.UI .section-ticket').removeClass('shadow')
            $('.section.Me .section-ticket').addClass('shadow')
        }
    });


});