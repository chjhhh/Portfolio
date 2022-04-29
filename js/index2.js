$(document).ready(function(){
    // 스크롤 내렸을 때 header와 top버튼 보이기
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
            $('header').fadeIn();
            $('.top').fadeIn();
            $('.pc-shortcut').fadeIn();
        } else{
            $('header').fadeOut();
            $('.top').fadeOut();
            $('.pc-shortcut').fadeOut();
        }
    });

    // 스크롤바 움직일 때 각 티켓 section에 그림자 추가, 삭제
    /* $(window).scroll(function(){
        if($(this).scrollTop() > 800){
            $('.section-ticket.Gongcha').addClass('shadow-hover');
        } else if($(this).scrollTop() > 820){
            $('.section-ticket.Gongcha').removeClass('shadow-hover');
            $('.section-ticket.Starbucks').addClass('shadow-hover');
        } else{
            $('.section-ticket').removeClass('shadow-hover');
        }
    }); */

    // pc menu 클릭 시 색상 변경
    let clicked = true;
    $('.active').click(function(){
        if(clicked){
            $(this).css('color', '#6868AC');
        } else{
            $(this).css('color', '#202020');
        }
    });

});